import { ArrowRight } from "lucide-react";
import { ML_URL } from "../constants";
import styles from "./StickyBar.module.css";

export default function StickyBar({ visible }) {
  return (
    <div
      className={styles.bar}
      style={{ display: visible ? "flex" : "none" }}
      role="complementary"
      aria-label="Ação rápida de compra"
    >
      <div className={styles.left}>
        <div className={styles.price}>R$ 98,00</div>
        <div className={styles.inst}>12x de R$ 9,65 · Frete Grátis</div>
      </div>
      <a
        href={ML_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`cta-btn ${styles.btn}`}
        aria-label="Comprar Planner Vencedor agora"
      >
        COMPRAR <ArrowRight size={15} />
      </a>
    </div>
  );
}
