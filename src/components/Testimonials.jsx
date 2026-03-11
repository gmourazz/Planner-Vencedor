import { Star, BadgeCheck, Quote } from "lucide-react";
import { useFade } from "../hooks/useFade";
import styles from "./Testimonials.module.css";

// TARTA — ex-jogador do Fluminense, comentarista esportivo (@tarta_12)
const FEATURED = {
  quote: "Organização é o que separa o talento do profissional. O Planner Vencedor chegou pra dar estrutura real pra quem quer ir além. Isso é mentalidade de atleta de verdade.",
  name:  "TARTA",
  role:  "Ex-jogador do Fluminense · Comentarista Esportivo",
  handle: "@tarta_12",
  followers: "35,8 mil seguidores",
  photo: "/img/tartajogador.png",
};

// Fotos públicas de avatares
const TESTI = [
  {
    quote: "Esse planner mudou minha forma de encarar os treinos. Agora sei exatamente onde quero chegar e sigo o plano toda semana.",
    name: "Lucas M.",
    role: "Meia · 17 anos",
    avatar: "https://i.pravatar.cc/80?img=7",
  },
  {
    quote: "Comprei pra mim e pro meu filho. A qualidade é incrível, as páginas são muito bem pensadas e ele usa toda semana.",
    name: "Carlos R.",
    role: "Pai de jogador",
    avatar: "https://i.pravatar.cc/80?img=52",
  },
  {
    quote: "Defini minha meta de entrar em um clube profissional até os 20 anos. Estou seguindo o plano e evoluindo muito.",
    name: "Matheus S.",
    role: "Atacante · 18 anos",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    quote: "Nunca imaginei que organizar os treinos ia fazer tanta diferença. Meu técnico já notou minha evolução.",
    name: "Pedro A.",
    role: "Lateral · 16 anos",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote: "O planner me ajudou a manter o foco nas metas mesmo nas semanas difíceis. Produto top, super recomendo!",
    name: "Rafael T.",
    role: "Goleiro · 19 anos",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    quote: "Meu treinador ficou surpreso com minha evolução. O planner estrutura a mente e o jogo ao mesmo tempo.",
    name: "Diego F.",
    role: "Zagueiro · 20 anos",
    avatar: "https://i.pravatar.cc/80?img=57",
  },
];

function Stars({ size = 14 }) {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} fill="var(--g1)" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref     = useFade();
  const refGrid = useFade();

  return (
    <section className={styles.section} id="depoimentos">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="sec-eyebrow" style={{ justifyContent: "center" }}>Depoimentos</div>
        </div>
        <h2 className="sec-title">
          Quem Usa<br /><em>Já Está Vencendo</em>
        </h2>
        <p className="sec-sub">+150 planners vendidos. Resultados reais de quem levou o jogo a sério.</p>

        {/* ── DESTAQUE TARTA — FOTO REAL ── */}
        <div ref={ref} className={`${styles.featured} fade`}>

          {/* Foto em destaque (lado esquerdo) */}
          <div className={styles.featuredPhoto}>
            <img
              src={FEATURED.photo}
              alt="TARTA com o Planner Vencedor"
              className={styles.featuredPhotoImg}
            />
            <div className={styles.featuredPhotoOverlay} />

            {/* Badge flutuante */}
            <div className={styles.floatBadge}>
              <BadgeCheck size={14} />
              Personalidade do Futebol
            </div>
          </div>

          {/* Conteúdo (lado direito) */}
          <div className={styles.featuredContent}>
            <div className={styles.featuredEyebrow}>
              <BadgeCheck size={13} />
              Indicado por
            </div>

            <div className={styles.featuredName}>
              {FEATURED.name}
              <span className={styles.verifiedBadge} title="Conta verificada">
                <BadgeCheck size={18} />
              </span>
            </div>
            <div className={styles.featuredRole}>{FEATURED.role}</div>
            <div className={styles.featuredHandle}>{FEATURED.handle} · {FEATURED.followers}</div>

            <div className={styles.divider} />

            <Stars size={16} />

            <div className={styles.quoteIcon}><Quote size={32} /></div>
            <blockquote className={styles.featuredQuote}>
              {FEATURED.quote}
            </blockquote>
          </div>
        </div>

        {/* ── GRID DE DEPOIMENTOS ── */}
        <div ref={refGrid} className={`${styles.grid} fade`}>
          {TESTI.map((t, i) => (
            <div className={styles.card} key={i} style={{ transitionDelay: `${i * 0.09}s` }}>
              <Stars />
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
