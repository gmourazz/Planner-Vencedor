import { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./FAQ.module.css";

const FAQS = [
  { q: "Para qual idade é recomendado?",   a: "O planner é ideal para jogadores de 12 a 21 anos, mas qualquer atleta que queira organizar sua carreira e metas pode usar perfeitamente." },
  { q: "O frete é realmente grátis?",      a: "Sim! O frete é grátis na primeira compra realizada pelo Mercado Livre. É uma das vantagens de comprar direto pela plataforma." },
  { q: "Em quanto tempo o planner chega?", a: "Para a maioria das regiões do Brasil, a entrega ocorre entre segunda e quinta-feira após a confirmação do pagamento." },
  { q: "Posso parcelar a compra?",          a: "Sim, você pode parcelar em até 12× de R$ 9,65 sem juros pelo Mercado Livre. Aproveite!" },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="sec-eyebrow" style={{ justifyContent: "center" }}>Dúvidas frequentes</div>
        </div>
        <h2 className="sec-title">
          Perguntas <em>Frequentes</em>
        </h2>
        <p className="sec-sub">Tire suas dúvidas antes de garantir o seu.</p>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <div
              className={`${styles.item} ${open === i ? styles.open : ""}`}
              key={i}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.questionText}>{f.q}</span>
                <span className={styles.icon}><Plus size={14} /></span>
              </button>
              <div className={`${styles.answer} ${open === i ? styles.answerOpen : ""}`}>
                <div className={styles.answerInner}>
                  <div className={styles.answerBar} />
                  <p className={styles.answerText}>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
