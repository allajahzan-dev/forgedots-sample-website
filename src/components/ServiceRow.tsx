import { motion } from "framer-motion";

interface Props {
  n: string;
  name: string;
  desc: string;
  dark?: boolean;
  delay?: number;
}

export default function ServiceRow({ n, name, desc, dark, delay = 0 }: Props) {
  const numColor = dark ? "rgba(255,255,255,0.30)" : "var(--text-muted)";
  const nameColor = dark ? "var(--text-on-dark)" : "var(--text)";
  const descColor = dark ? "rgba(255,255,255,0.55)" : "var(--text-secondary)";
  const hoverBg = dark ? "rgba(255,255,255,0.04)" : "var(--hover-bg)";
  const borderColor = dark ? "var(--border-dark)" : "var(--border)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover="hover"
      style={{ borderBottom: `1px solid ${borderColor}`, position: "relative" }}
    >
      <motion.div
        variants={{
          hover: { backgroundColor: hoverBg },
        }}
        transition={{ duration: 0.25 }}
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr 2fr 40px",
          alignItems: "center",
          padding: "32px 24px",
          gap: 24,
        }}
      >
        <motion.span
          variants={{ hover: { x: 8 } }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: numColor,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {n}
        </motion.span>
        <span
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: nameColor,
            letterSpacing: "-0.01em",
          }}
        >
          {name}
        </span>
        <span style={{ fontSize: 14, fontWeight: 400, color: descColor, lineHeight: 1.6 }}>
          {desc}
        </span>
        <motion.span
          variants={{ hover: { opacity: 1, x: 0 } }}
          initial={{ opacity: 0, x: -8 }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: 20, color: nameColor, textAlign: "right" }}
        >
          →
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
