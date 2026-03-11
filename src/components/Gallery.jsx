import { useState } from "react";
import { BookOpen, Target, Calendar, Medal } from "lucide-react";
import { useFade } from "../hooks/useFade";
import styles from "./Gallery.module.css";

const IMG1 = "/img/imagemprodutodois.png"; // Vista frontal
const IMG2 = "/img/imagemprodutoum.png";   // Vista 3D/angular

const ITEMS = [
  {
    img: IMG1,
    icon: <BookOpen size={20} />,
    label: "Capa do Planner",
    sub: "Capa dura preta premium",
    tag: "CAPA",
  },
  {
    img: IMG2,
    icon: <Target size={20} />,
    label: "Moderno",
    sub: "Design moderno e funcional",
    tag: "DESIGN",
  },
  {
    img: IMG1,
    icon: <Calendar size={20} />,
    label: "Planejamento Anual",
    sub: "Calendário & treinos semanais",
    tag: "TREINOS",
  },
  {
    img: IMG2,
    icon: <Medal size={20} />,
    label: "Acabamento Premium",
    sub: "Encadernação de qualidade",
    tag: "DETALHE",
  },
];

export default function Gallery() {
  const ref = useFade();

  return (
    <section className={styles.section} id="galeria">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="sec-eyebrow" style={{ justifyContent: "center" }}>Produto real</div>
        </div>
        <h2 className="sec-title">
          Conheça Cada Detalhe<br /><em>Do Seu Planner</em>
        </h2>
        <p className="sec-sub">Capa dura preta, espiral premium e páginas projetadas para o jogador de futebol vencer.</p>

        <div ref={ref} className={`${styles.grid} fade`}>
          {ITEMS.map((it, i) => (
            <div className={styles.card} key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <CardImage src={it.img} alt={it.label} />
              <span className={styles.tag}>{it.tag}</span>
              <div className={styles.content}>
                <div className={styles.iconWrap}>{it.icon}</div>
                <div className={styles.label}>{it.label}</div>
                <div className={styles.sub}>{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardImage({ src, alt }) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={styles.cardImg}
      onError={() => setErr(true)}
      loading="lazy"
    />
  );
}
