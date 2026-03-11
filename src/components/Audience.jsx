import { Target, TrendingUp, Trophy, Dumbbell } from "lucide-react";
import { useFade } from "../hooks/useFade";
import styles from "./Audience.module.css";

const CARDS = [
  { icon: <Target size={22} />, title: "Jovens Atletas", text: "Jogadores de 12 a 21 anos que querem evoluir com organização e consistência." },
  { icon: <Dumbbell size={22} />, title: "Atletas de Base", text: "Quem treina em escolinhas ou categorias de base e quer se destacar." },
  { icon: <TrendingUp size={22} />, title: "Em Busca de Clube", text: "Jogadores sem clube se preparando para testes e oportunidades reais." },
  { icon: <Trophy size={22} />, title: "Mentalidade de Elite", text: "Quem quer metas claras, disciplina e a visão de um atleta profissional." },
];

export default function Audience() {
  const ref = useFade();

  return (
    <section className={styles.section} id="para-quem">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
            Para quem é esse planner
          </div>
        </div>
        <h2 className="sec-title">
          Feito Para Quem Quer<br /><em>Chegar ao Próximo Nível</em>
        </h2>
        <p className="sec-sub">
          Não importa onde você está agora, o que importa é para onde você quer ir.
        </p>

        <div ref={ref} className={`${styles.grid} fade`}>
          {CARDS.map((c, i) => (
            <div
              className={styles.card}
              key={i}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <div className={styles.iconWrap}>{c.icon}</div>
              <div className={styles.title}>{c.title}</div>
              <div className={styles.text}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
