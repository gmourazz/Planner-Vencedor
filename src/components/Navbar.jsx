import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShoppingCart } from "lucide-react";
import { ML_URL } from "../constants";
import styles from "./Navbar.module.css";

const LOGO_IMG = "/img/plannerlogopreta.png";

const NAV_LINKS = [
  { label: "Benefícios",    href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Fotos",         href: "#galeria" },
  { label: "Depoimentos",   href: "#depoimentos" },
  { label: "FAQ",           href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [logoErr, setLogoErr]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 860) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  function handleLink(e, href) {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <a
            href="#"
            className={styles.logo}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }}
          >
            {!logoErr
              ? <img src={LOGO_IMG} alt="Planner Vencedor" className={styles.logoImg}
                  onError={() => setLogoErr(true)} />
              : <span className={styles.logoText}>Planner Vencedor</span>
            }
          </a>

          {/* Links desktop */}
          <ul className={styles.links}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}
                  onClick={(e) => handleLink(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href={ML_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} ${styles.desktopCta}`}
          >
            <ShoppingCart size={14} />
            Comprar Agora
          </a>

          {/* Hamburger mobile */}
          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </nav>

      {/* Drawer mobile */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} aria-hidden={!open}>
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.drawerLink}
                onClick={(e) => handleLink(e, l.href)}>
                {l.label}
                <ArrowRight size={14} className={styles.drawerArrow} />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={ML_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.drawerCta}
          onClick={() => setOpen(false)}
        >
          <ShoppingCart size={16} />
          Comprar Agora · R$ 98
        </a>
        <p className={styles.drawerSub}>Frete grátis · 12× sem juros</p>
      </div>

      {/* Overlay mobile */}
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} aria-hidden />}
    </>
  );
}
