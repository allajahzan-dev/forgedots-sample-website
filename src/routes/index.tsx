import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ServiceTicker from "../components/ServiceTicker";
import TechMarquee from "../components/TechMarquee";
import ServiceRow from "../components/ServiceRow";
import StatsRow from "../components/StatsRow";
import ScrollReveal from "../components/ScrollReveal";
import {
  SERVICES,
  STATS,
  TECHNOLOGIES,
  INDUSTRIES,
} from "../data/constants";


const wipe = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  show: (i: number) => ({
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.76, 0, 0.24, 1] as const },
  }),
};

function Line({ i, children, italic }: { i: number; children: React.ReactNode; italic?: boolean }) {
  return (
    <div style={{ overflow: "hidden", display: "block" }}>
      <motion.div
        custom={i}
        initial="hidden"
        animate="show"
        variants={wipe}
        style={{ fontStyle: italic ? "italic" : "normal", display: "block" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const watermarkY = useTransform(scrollY, [0, 800], [0, 320]);

  return (
    <>
      <ServiceTicker />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          minHeight: "calc(100vh - 112px)",
          background: "var(--bg)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            y: watermarkY,
            zIndex: 0,
          }}
          aria-hidden
        >
          <span
            className="display"
            style={{
              fontSize: "clamp(120px, 22vw, 280px)",
              color: "#F2F2F2",
              whiteSpace: "nowrap",
            }}
          >
            FORGEDOTS
          </span>
        </motion.div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
            style={{ marginBottom: 40 }}
          >
            Data &amp; AI Solutions
          </motion.div>
          <h1
            className="display"
            style={{ fontSize: "clamp(44px, 7.5vw, 100px)", marginBottom: 40 }}
          >
            <Line i={0}>Transform Your</Line>
            <Line i={1}>Business With</Line>
            <Line i={2} italic>
              Data &amp; AI.
            </Line>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              maxWidth: 560,
              margin: "0 auto 40px",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--text-secondary)",
            }}
          >
            ForgeDots delivers enterprise-grade BI, Data Engineering, and Generative AI — built for
            organizations that want lasting results, not just dashboards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              The Numbers
            </div>
            <hr className="divider" style={{ marginBottom: 8 }} />
          </ScrollReveal>
          {STATS.map((s, i) => (
            <StatsRow key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* SERVICES — dark */}
      <motion.section
        className="section dark-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="eyebrow-light" style={{ marginBottom: 24 }}>
              What We Do
            </div>
            <h2
              className="display"
              style={{
                color: "var(--text-on-dark)",
                fontSize: "clamp(36px, 5vw, 64px)",
                maxWidth: 900,
                marginBottom: 64,
              }}
            >
              Services built for every layer of your data stack.
            </h2>
          </motion.div>
          <div style={{ borderTop: "1px solid var(--border-dark)" }}>
            {SERVICES.map((s, i) => (
              <ServiceRow
                key={s.n}
                n={s.n}
                name={s.name}
                desc={s.short}
                dark
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <hr className="divider" />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr",
                gap: 80,
                alignItems: "start",
              }}
            >
              <h2
                className="display"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", maxWidth: 720 }}
              >
                A partner for the full journey — from raw data to{" "}
                <em>real results.</em>
              </h2>
              <div>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                    lineHeight: 1.75,
                    color: "var(--text-secondary)",
                    marginBottom: 32,
                  }}
                >
                  Welcome to ForgeDots. With a strong presence in the UAE and India, we specialize
                  in harnessing the power of data to provide actionable insights for informed
                  decision-making. Our team delivers tailored solutions built on collaboration,
                  transparency, and lasting value.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "30+ years combined expertise",
                    "6+ industry verticals",
                    "SME to global enterprise",
                    "End-to-end, strategy to deployment",
                  ].map((t) => (
                    <li
                      key={t}
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      <span style={{ color: "var(--text-muted)", marginRight: 12 }}>—</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <hr className="divider" />

      {/* TECHNOLOGY */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Technology Partners
            </div>
            <h2
              className="display"
              style={{ fontSize: "clamp(32px, 4.2vw, 52px)", maxWidth: 720, marginBottom: 64 }}
            >
              Built on platforms your team already trusts.
            </h2>
          </ScrollReveal>
        </div>
        <TechMarquee items={TECHNOLOGIES} duration={45} />
      </section>

      {/* INDUSTRIES */}
      <motion.section
        className="section dark-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="eyebrow-light" style={{ marginBottom: 24 }}>
              Industries We Serve
            </div>
            <h2
              className="display"
              style={{
                color: "var(--text-on-dark)",
                fontSize: "clamp(36px, 5vw, 60px)",
                maxWidth: 900,
                marginBottom: 64,
              }}
            >
              Deep domain expertise across key sectors.
            </h2>
          </motion.div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {INDUSTRIES.map((ind, i) => (
              <IndustryCell key={ind} n={String(i + 1).padStart(2, "0")} name={ind} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <hr className="divider" />
      <section style={{ padding: "180px 24px", textAlign: "center" }}>
        <ScrollReveal>
          <h2
            className="display"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1.0, marginBottom: 32 }}
          >
            Let's build something
            <br />
            <em>that lasts.</em>
          </h2>
          <p
            style={{
              maxWidth: 560,
              margin: "0 auto 40px",
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            Whether it's your first analytics project or a full AI transformation — we're ready.
          </p>
          <Link to="/contact" className="btn btn-primary btn-tall">
            Start a Conversation →
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}

function IndustryCell({ n, name }: { n: string; name: string }) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      style={{
        position: "relative",
        padding: "56px 32px",
        minHeight: 200,
        borderRight: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}
    >
      <motion.span
        variants={{
          initial: { color: "rgba(255,255,255,0.15)" },
          hover: { color: "rgba(255,255,255,0.30)" },
        }}
        transition={{ duration: 0.3 }}
        className="display"
        style={{
          position: "absolute",
          top: 16,
          left: 24,
          fontSize: 48,
        }}
      >
        {n}
      </motion.span>
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 32,
          fontSize: 20,
          fontWeight: 600,
          color: "var(--text-on-dark)",
        }}
      >
        {name}
      </div>
    </motion.div>
  );
}

export default Home;
