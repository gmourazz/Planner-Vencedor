import { Trophy, Award, Calendar, Truck, Star, Zap } from "lucide-react";
import styles from "./SocialBar.module.css";

const ITEMS = [
  { icon: <Trophy size={15} />,   val: "1.200+",  label: "Seguidores no Instagram" },
  { icon: <Award size={15} />,    val: "150+",    label: "Planners Vendidos" },
  { icon: <Calendar size={15} />, val: "2026",    label: "Edição" },
  { icon: <Truck size={15} />,    val: "GRÁTIS",  label: "Frete Grátis" },
  { icon: <Star size={15} />,     val: "5.0★",    label: "Avaliação Média" },
  { icon: <Zap size={15} />,      val: "24% off", label: "Desconto Especial" },
];

// Duplica 3× para loop suave
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

export default function SocialBar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {TRACK.map((it, i) => (
          <div className={styles.item} key={i} aria-hidden={i >= ITEMS.length}>
            <span className={styles.icon}>{it.icon}</span>
            <span className={styles.val}>{it.val}</span>
            <span className={styles.label}>{it.label}</span>
            <span className={styles.sep}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
