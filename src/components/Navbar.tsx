import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LogoMark from "./LogoMark";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,1)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "var(--text)",
          }}
        >
          <LogoMark size={26} />
          FORGEDOTS
        </Link>
        <nav style={{ display: "flex", gap: 40 }} aria-label="Main">
          {LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  position: "relative",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--text)",
                  padding: "8px 0",
                }}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 1,
                      background: "var(--text)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <Link to="/contact" className="btn btn-outline" style={{ height: 40, padding: "0 20px" }}>
          Let's Talk
        </Link>
      </div>
    </motion.header>
  );
}
