import { Calendar, Target, Dumbbell, Brain, BarChart2, Flag } from "lucide-react";
import { useFade } from "../hooks/useFade";
import styles from "./Benefits.module.css";

const ITEMS = [
  { icon: <Calendar size={24} />, title: "Planejamento Anual",   text: "Organize todo o seu ano de 2026 com clareza e foco total nos seus objetivos." },
  { icon: <Target size={24} />,   title: "Metas de Elite",       text: "Defina objetivos reais e acompanhe seu progresso semana a semana." },
  { icon: <Dumbbell size={24} />, title: "Controle de Treinos",  text: "Registre cada treino, evolução física e desempenho técnico com precisão." },
  { icon: <Brain size={24} />,    title: "Mentalidade Vencedora",text: "Espaço para reflexão, motivação e desenvolvimento mental do atleta." },
  { icon: <BarChart2 size={24} />,title: "Análise de Jogos",     text: "Acompanhe suas partidas e identifique pontos de melhoria consistentes." },
  { icon: <Flag size={24} />,     title: "Visão de Carreira",    text: "Trace o caminho do seu sonho com etapas claras e alcançáveis." },
];

export default function Benefits() {
  const ref = useFade();

  return (
    <section className={styles.section} id="beneficios">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
            O que você vai encontrar
          </div>
        </div>
        <h2 className="sec-title">
          Tudo Que Você Precisa<br /><em>Em Um Só Lugar</em>
        </h2>
        <p className="sec-sub">Cada página foi pensada para transformar sua rotina de atleta.</p>

        <div ref={ref} className={`${styles.grid} fade`}>
          {ITEMS.map((it, i) => (
            <div className={styles.card} key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className={styles.icon}>{it.icon}</div>
              <div className={styles.title}>{it.title}</div>
              <div className={styles.text}>{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
