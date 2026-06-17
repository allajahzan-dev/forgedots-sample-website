import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return val;
}

export default function StatsRow({
  num,
  suffix,
  label,
  desc,
  delay = 0,
}: {
  num: number;
  suffix: string;
  label: string;
  desc: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useCountUp(num, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "40px 0",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        alignItems: "center",
        gap: 32,
      }}
    >
      <div
        className="display"
        style={{
          fontSize: "clamp(56px, 8vw, 88px)",
          color: "var(--text)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
        {suffix}
      </div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
          {label}
        </div>
        <div style={{ fontSize: 15, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {desc}
        </div>
      </div>
    </motion.div>
  );
}
