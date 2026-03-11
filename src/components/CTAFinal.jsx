import { Shield, Truck, ArrowRight, Zap } from "lucide-react";
import { ML_URL } from "../constants";
import { useFade } from "../hooks/useFade";
import styles from "./CTAFinal.module.css";

const MINI_AVATARS = [
  "https://i.pravatar.cc/64?img=7",
  "https://i.pravatar.cc/64?img=11",
  "https://i.pravatar.cc/64?img=15",
  "https://i.pravatar.cc/64?img=22",
];

export default function CTAFinal() {
  const ref = useFade();

  return (
    <section className={styles.section} id="comprar">
      <div ref={ref} className={`${styles.inner} fade`}>

        <div className={styles.eyebrow}>
          <Zap size={11} fill="currentColor" strokeWidth={0} />
          Últimas unidades disponíveis
        </div>

        <h2 className={styles.title}>
          Não Deixe Seu Sonho
          <em>Para Amanhã</em>
        </h2>

        <p className={styles.sub}>
          Quem planeja, executa. Quem executa, vence.<br />
          +150 jogadores já estão organizando a temporada de 2026 com o Planner Vencedor. E você?
        </p>

        {/* Mini prova social */}
        <div className={styles.socialProof}>
          <div className={styles.miniAvatars}>
            {MINI_AVATARS.map((src, i) => (
              <div key={i} className={styles.miniAvatar}>
                <img src={src} alt="" aria-hidden loading="lazy" />
              </div>
            ))}
          </div>
          <span className={styles.socialProofText}>
            <strong>+150 atletas</strong> já garantiram o deles
          </span>
        </div>

        {/* Preço */}
        <div className={styles.priceBlock}>
          <span className={styles.priceOld}>De R$ 129,90</span>
          <div className={styles.price}>R$ 98,00</div>
          <p className={styles.inst}>ou 12× de R$ 9,65 sem juros no cartão</p>
          <div className={styles.frete}>
            <Truck size={12} />
            Frete grátis na 1ª compra
          </div>
        </div>

        <a
          href={ML_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`cta-btn ${styles.bigCta}`}
          aria-label="Comprar Planner Vencedor com frete grátis"
        >
          GARANTIR MEU PLANNER AGORA <ArrowRight size={20} />
        </a>

        <div className={styles.trustRow}>
          {[
            { icon: <Shield size={13} />, text: "Compra 100% Garantida" },
            { icon: <Truck size={13} />,  text: "Frete Grátis" },
          ].map((b, i) => (
            <div className={styles.pill} key={i}>{b.icon}{b.text}</div>
          ))}
        </div>

      </div>
    </section>
  );
}
