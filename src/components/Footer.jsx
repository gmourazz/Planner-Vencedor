import { Trophy, Instagram, Package } from "lucide-react";
import { ML_URL, IG_URL } from "../constants";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Trophy size={22} color="var(--g1)" />
        Planner Vencedor
      </div>
      <div className={styles.links}>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @plannerjogadordefutebol"
        >
          <Instagram size={15} /> @plannerjogadordefutebol
        </a>
        <a
          href={ML_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comprar no Mercado Livre"
        >
          <Package size={15} /> Mercado Livre
        </a>
      </div>
      <p className={styles.copy}>© 2026 Planner Vencedor. Todos os direitos reservados.</p>
    </footer>
  );
}
