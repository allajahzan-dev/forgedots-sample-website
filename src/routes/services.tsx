import { createFileRoute, Link } from "@tanstack/react-router";
import ServiceTicker from "../components/ServiceTicker";
import TechMarquee from "../components/TechMarquee";
import ServiceRow from "../components/ServiceRow";
import ScrollReveal from "../components/ScrollReveal";
import { SERVICES, PROCESS, FOCUS_TECH } from "../data/constants";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ForgeDots Technologies" },
      {
        name: "description",
        content:
          "Enterprise BI, Data Engineering, Advanced Data Analytics, Generative AI, Managed Services, and Corporate Training — every layer of your data stack covered.",
      },
      { property: "og:title", content: "Services — ForgeDots Technologies" },
      {
        property: "og:description",
        content: "Every layer of your data and AI stack — covered.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <ServiceTicker />

      {/* HERO */}
      <section style={{ padding: "120px 0 80px", background: "var(--bg)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            Our Services
          </div>
          <h1
            className="display"
            style={{ fontSize: "clamp(44px, 7vw, 88px)", maxWidth: 1100 }}
          >
            Every layer of your data and AI stack — <em>covered.</em>
          </h1>
        </div>
      </section>
      <hr className="divider" />

      {/* SERVICE DETAIL SECTIONS */}
      {SERVICES.map((s, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={s.n}
            className={dark ? "dark-section" : ""}
            style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
          >
            <span
              aria-hidden
              className="display"
              style={{
                position: "absolute",
                top: "50%",
                right: -40,
                transform: "translateY(-50%)",
                fontSize: "clamp(140px, 20vw, 240px)",
                color: dark ? "rgba(255,255,255,0.06)" : "#F0F0F0",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {s.n}
            </span>
            <div className="container" style={{ position: "relative" }}>
              <ScrollReveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.2fr",
                    gap: 80,
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      className="eyebrow"
                      style={{
                        marginBottom: 24,
                        color: dark ? "rgba(255,255,255,0.4)" : undefined,
                      }}
                    >
                      Service {s.n}
                    </div>
                    <h2
                      className="display"
                      style={{
                        fontSize: "clamp(32px, 4.5vw, 56px)",
                        color: dark ? "var(--text-on-dark)" : "var(--text)",
                        marginBottom: 32,
                      }}
                    >
                      {s.name}
                    </h2>
                    <Link
                      to="/contact"
                      className="btn-ghost"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: dark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)",
                      }}
                    >
                      Get in Touch →
                    </Link>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 1.75,
                        color: dark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)",
                        marginBottom: 32,
                      }}
                    >
                      {s.long}
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: dark ? "var(--text-on-dark)" : "var(--text)",
                          }}
                        >
                          <span
                            style={{
                              color: dark ? "rgba(255,255,255,0.4)" : "var(--text-muted)",
                              marginRight: 12,
                            }}
                          >
                            —
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <hr
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 1,
                border: 0,
                background: dark ? "var(--border-dark)" : "var(--border)",
              }}
            />
          </section>
        );
      })}

      {/* HOW WE WORK */}
      <section className="section dark-section">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow-light" style={{ marginBottom: 24 }}>
              How We Work
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
              A methodical process. <em>Lasting outcomes.</em>
            </h2>
          </ScrollReveal>
          <div style={{ borderTop: "1px solid var(--border-dark)" }}>
            {PROCESS.map((p, i) => (
              <ServiceRow
                key={p}
                n={String(i + 1).padStart(2, "0")}
                name={p}
                desc=""
                dark
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS TECHNOLOGY */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Focus Technologies
            </div>
            <h2
              className="display"
              style={{ fontSize: "clamp(32px, 4.2vw, 52px)", maxWidth: 720, marginBottom: 64 }}
            >
              The platforms we build with.
            </h2>
          </ScrollReveal>
        </div>
        <TechMarquee items={FOCUS_TECH} duration={45} />
      </section>
    </>
  );
}
