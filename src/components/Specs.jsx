import { CheckCircle, ArrowRight } from "lucide-react";
import { ML_URL } from "../constants";
import { useFade } from "../hooks/useFade";
import styles from "./Specs.module.css";

const SPECS = [
  { label: "Formato",   value: "Caderneta espiral" },
  { label: "Capa",      value: "Plástico duro preto" },
  { label: "Edição",    value: "2026" },
  { label: "Conteúdo",  value: "Planejamento anual completo para jogadores" },
  { label: "Preço",     value: "R$ 98 · 12x de R$ 9,65 sem juros" },
  { label: "Frete",     value: "Grátis na 1ª compra · Entrega seg/qui" },
];

export default function Specs() {
  const ref = useFade();

  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={ref} className={`${styles.inner} fade`}>
          <div>
            <h2 className={styles.title}>
              Produto Premium,<br /><em>Feito Para Vencer</em>
            </h2>
            <p className={styles.desc}>
              Cada detalhe foi pensado para você levar seus objetivos a sério.
              Do material da capa ao conteúdo interno, é um produto de atleta, para atleta.
            </p>
            <a
              href={ML_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              aria-label="Comprar Planner Vencedor"
            >
              COMPRAR AGORA <ArrowRight size={18} />
            </a>
          </div>

          <div className={styles.list}>
            {SPECS.map((s, i) => (
              <div className={styles.row} key={i}>
                <div className={styles.check}>
                  <CheckCircle size={14} />
                </div>
                <div className={styles.label}>
                  <strong>{s.label}:</strong> {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
