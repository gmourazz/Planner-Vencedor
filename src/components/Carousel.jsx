import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useFade } from "../hooks/useFade";
import styles from "./Carousel.module.css";

// ── Fotos reais — pessoas com o Planner Vencedor ────────────────────────────
const SLIDES = [
  {
    src:     "/img/carrosselum.png",
    alt:     "Rodrigo Caetano com seus filhos e o Planner Vencedor",
    club:    "Seleção Brasileira",
    caption: "Rodrigo Caetano, Diretor Geral da Seleção Brasileira, ao lado dos seus filhos com o Planner Vencedor.",
    badge:   "🇧🇷 Seleção Brasileira",
  },
  {
    src:     "/img/carroseldois.png",
    alt:     "Jogador do Vasco da Gama com o Planner Vencedor",
    club:    "Vasco da Gama",
    caption: "Jogador do Vasco da Gama usando o Planner Vencedor na sua rotina.",
    badge:   "⚽ Clube Profissional",
  },
  {
    src:     "/img/carrosseltres.png",
    alt:     "Planner Vencedor na CBF",
    club:    "CBF — Confederação Brasileira de Futebol",
    caption: "O Planner Vencedor chegou até a sede da CBF, a casa do futebol brasileiro.",
    badge:   "🇧🇷 CBF Oficial",
  },
  {
    src:     "/img/carrosselquatro.png",
    alt:     "Jogadores do Flamengo com o Planner Vencedor",
    club:    "Flamengo",
    caption: "Atletas do maior clube do Brasil aprovando o Planner Vencedor.",
    badge:   "🔴⚫ Flamengo",
  },
  {
    src:     "/img/carrosselcinco.png",
    alt:     "Comissão técnica com o Planner Vencedor",
    club:    "Comissão Técnica",
    caption: "Treinadores e comissão técnica adotando o Planner Vencedor.",
    badge:   "📋 Comissão Técnica",
  },
];

const INTERVAL = 4500;

export default function Carousel() {
  const sectionRef  = useFade();
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setActive(idx);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const prev = useCallback(() => go((active - 1 + SLIDES.length) % SLIDES.length), [go, active]);
  const next = useCallback(() => go((active + 1) % SLIDES.length), [go, active]);

  // Auto-play fluido
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // Reinicia timer ao mudar manualmente
  const handleManual = useCallback((fn) => {
    clearInterval(timerRef.current);
    setPaused(false);
    fn();
  }, []);

  // Swipe
  useEffect(() => {
    let sx = 0;
    const onStart = (e) => { sx = (e.touches?.[0] ?? e).clientX; };
    const onEnd   = (e) => {
      const dx = sx - (e.changedTouches?.[0] ?? e).clientX;
      if (Math.abs(dx) > 50) dx > 0 ? handleManual(next) : handleManual(prev);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend",   onEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [handleManual, next, prev]);

  const slide = SLIDES[active];

  return (
    <section className={styles.section} id="fotos">
      <div className={styles.header}>
        <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
          Nos melhores clubes do Brasil
        </div>
        <h2 className="sec-title">
          Quem Já Está<br /><em>Com o Planner</em>
        </h2>
        <p className="sec-sub">
          Do jogador amador ao profissional, da escolinha até a CBF.
        </p>
      </div>

      <div
        ref={sectionRef}
        className={`${styles.stage} fade`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* SLIDES */}
        <div className={styles.track}>
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}
              aria-hidden={i !== active}
            >
              <img
                src={s.src}
                alt={s.alt}
                className={styles.img}
                loading={i <= 1 ? "eager" : "lazy"}
              />
              <div className={styles.imgOverlay} />
            </div>
          ))}

          {/* Navegação */}
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => handleManual(prev)}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => handleManual(next)}
            aria-label="Próxima foto"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* CAPTION PANEL */}
        <div className={styles.panel}>
          <div className={styles.badge}>{slide.badge}</div>

          <div className={styles.quoteIcon}><Quote size={28} /></div>
          <p className={styles.caption}>{slide.caption}</p>
          <div className={styles.club}>{slide.club}</div>

          {/* Counter */}
          <div className={styles.counter}>
            <span className={styles.counterCurrent}>
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>
              {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => handleManual(() => go(i))}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused ? "paused" : "running" }}
              key={active}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
