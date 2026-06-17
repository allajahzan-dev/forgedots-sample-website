
import { useState } from "react";
import { motion } from "framer-motion";
import ServiceTicker from "../components/ServiceTicker";
import ScrollReveal from "../components/ScrollReveal";
import { COMPANY, SERVICES_LIST } from "../data/constants";


const ENQUIRY_TYPES = [...SERVICES_LIST, "Others"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  borderBottom: "1px solid var(--border)",
  borderRadius: 0,
  padding: "16px 0",
  fontSize: 16,
  fontWeight: 400,
  background: "transparent",
  color: "var(--text)",
  outline: "none",
  transition: "border-color 0.25s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: 8,
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={labelStyle}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 400, color: "var(--text)", lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );
}

function Contact() {
  const [enquiry, setEnquiry] = useState<string>("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const focusBorder = (k: string) =>
    focused === k ? "1px solid var(--text)" : "1px solid var(--border)";

  return (
    <>
      <ServiceTicker />

      <section style={{ padding: "120px 0 80px" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            Get in Touch
          </div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 80px)", maxWidth: 1100, marginBottom: 32 }}>
            Let's start a <em>conversation.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 560, lineHeight: 1.75 }}>
            Fill out the form and our team will respond within 24 hours.
          </p>
        </div>
      </section>
      <hr className="divider" />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.7fr 1fr",
              gap: 96,
              alignItems: "start",
            }}
          >
            {/* LEFT: Info */}
            <ScrollReveal>
              <div>
                <InfoRow label="India Office">{COMPANY.india}</InfoRow>
                <InfoRow label="UAE Office">{COMPANY.uae}</InfoRow>
                <InfoRow label="Phone">{COMPANY.phone}</InfoRow>
                <InfoRow label="Email">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: 4,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                  >
                    {COMPANY.email}
                  </a>
                </InfoRow>
                <InfoRow label="LinkedIn">
                  <a
                    href="https://linkedin.com"
                    style={{ textDecoration: "underline", textUnderlineOffset: 4 }}
                  >
                    Follow us on LinkedIn →
                  </a>
                </InfoRow>
              </div>
            </ScrollReveal>

            {/* RIGHT: Form */}
            <ScrollReveal delay={0.1}>
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                  <div>
                    <label htmlFor="fn" style={labelStyle}>First Name</label>
                    <input
                      id="fn"
                      required
                      style={{ ...inputStyle, borderBottom: focusBorder("fn") }}
                      onFocus={() => setFocused("fn")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label htmlFor="ln" style={labelStyle}>Last Name</label>
                    <input
                      id="ln"
                      required
                      style={{ ...inputStyle, borderBottom: focusBorder("ln") }}
                      onFocus={() => setFocused("ln")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                  <div>
                    <label htmlFor="em" style={labelStyle}>Email</label>
                    <input
                      id="em"
                      type="email"
                      required
                      style={{ ...inputStyle, borderBottom: focusBorder("em") }}
                      onFocus={() => setFocused("em")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label htmlFor="ph" style={labelStyle}>Phone</label>
                    <input
                      id="ph"
                      type="tel"
                      style={{ ...inputStyle, borderBottom: focusBorder("ph") }}
                      onFocus={() => setFocused("ph")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Type of Enquiry</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {ENQUIRY_TYPES.map((t) => {
                      const active = enquiry === t;
                      return (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setEnquiry(t)}
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            padding: "10px 18px",
                            borderRadius: 0,
                            border: active ? "1px solid var(--text)" : "1px solid var(--border)",
                            background: active ? "var(--text)" : "transparent",
                            color: active ? "var(--bg)" : "var(--text-secondary)",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label htmlFor="msg" style={labelStyle}>Message</label>
                  <textarea
                    id="msg"
                    rows={5}
                    required
                    style={{ ...inputStyle, borderBottom: focusBorder("msg"), resize: "vertical" }}
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sent}
                  whileTap={{ scale: 0.99 }}
                  className="btn btn-full btn-tall"
                  style={{
                    background: sent ? "transparent" : "var(--text)",
                    color: sent ? "var(--success)" : "var(--bg)",
                    border: sent ? "1px solid var(--success)" : "1px solid var(--text)",
                    transition: "all 0.4s ease",
                  }}
                >
                  {sent ? "Message Sent ✓" : "Send Message →"}
                </motion.button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
