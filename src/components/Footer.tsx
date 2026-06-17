import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { COMPANY } from "../data/constants";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
      <div className="container" style={{ padding: "40px 48px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            paddingBottom: 32,
          }}
        >
          <Link
            to="/"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 17, fontWeight: 700, letterSpacing: "0.02em", color: "var(--text)" }}
          >
            <LogoMark size={26} />
            FORGEDOTS
          </Link>
          <nav style={{ display: "flex", gap: 32 }}>
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}
              >
                {l.label}
              </Link>
            ))}
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}>
              Privacy Policy
            </span>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href={`mailto:${COMPANY.email}`}
              style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}
            >
              {COMPANY.email}
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              style={{ display: "inline-flex", color: "var(--text)" }}
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 400, color: "var(--text-muted)" }}>
            © 2026 ForgeDots Technologies LLC. All rights reserved.
          </span>
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-muted)" }}>
            {COMPANY.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
