import { Package, Flag, Dumbbell, Trophy } from "lucide-react";
import { useFade } from "../hooks/useFade";
import styles from "./HowItWorks.module.css";

const STEPS = [
  { icon: <Package size={26} />, n: "01", title: "Compre o Planner",   text: "Receba em casa com frete grátis na primeira compra via Mercado Livre." },
  { icon: <Flag size={26} />,    n: "02", title: "Defina Suas Metas",  text: "Use as páginas guiadas para traçar objetivos reais e alcançáveis." },
  { icon: <Dumbbell size={26} />,n: "03", title: "Execute Seu Plano",  text: "Registre treinos, jogos e sua evolução toda semana com consistência." },
  { icon: <Trophy size={26} />,  n: "04", title: "Próximo Nível",      text: "Veja sua evolução e conquiste o objetivo que você sempre quis." },
];

export default function HowItWorks() {
  const ref = useFade();

  return (
    <section className={styles.section} id="como-funciona">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="sec-eyebrow" style={{ justifyContent: "center" }}>Passo a passo</div>
        </div>
        <h2 className="sec-title">
          Como o Planner Vai<br /><em>Transformar Sua Carreira</em>
        </h2>
        <p className="sec-sub">Um processo simples, poderoso e comprovado por atletas.</p>

        <div ref={ref} className={`${styles.grid} fade`}>
          {STEPS.map((s, i) => (
            <div className={styles.step} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.num}>PASSO {s.n}</div>
              <div className={styles.circle}>{s.icon}</div>
              <div className={styles.title}>{s.title}</div>
              <div className={styles.text}>{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
