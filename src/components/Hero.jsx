import {
  ArrowRight, Star, Truck, ShieldCheck,
  CreditCard, Users, Zap,
} from "lucide-react";

const ML_URL = "https://www.mercadolivre.com.br/planner-vencedor--jogador-de-futebol-2026/up/MLBU3677972295";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap');

  .hv * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── SECTION ── */
  .hv {
    position: relative;
    min-height: 100vh;
    background: #070707;
    display: flex;
    align-items: center;
    padding-top: 70px;
    overflow: hidden;
  }

  /* ── BG ── */
  .hv-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
  .hv-bg-glow-left {
    position: absolute; left: -8%; top: 40%; transform: translateY(-50%);
    width: 55vw; height: 70vh; border-radius: 50%;
    background: radial-gradient(ellipse, rgba(200,164,90,0.08) 0%, transparent 62%);
  }
  .hv-bg-glow-right {
    position: absolute; right: -5%; top: 55%; transform: translateY(-50%);
    width: 40vw; height: 50vh; border-radius: 50%;
    background: radial-gradient(ellipse, rgba(200,164,90,0.06) 0%, transparent 65%);
  }
  .hv-bg-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(200,164,90,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,164,90,0.02) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 90% 90% at 30% 50%, black 10%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 90% 90% at 30% 50%, black 10%, transparent 100%);
  }
  .hv-bg-line {
    position: absolute; top: 0; bottom: 0;
    left: 50%; width: 1px;
    background: linear-gradient(to bottom, transparent 0%, rgba(200,164,90,0.08) 30%, rgba(200,164,90,0.12) 60%, transparent 100%);
  }
  .hv-bg-border-left {
    position: absolute; left: 0; top: 0; width: 1px; height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(200,164,90,0.4) 35%, rgba(230,202,128,0.5) 65%, transparent);
  }

  /* ── GRID ── */
  .hv-grid {
    position: relative; z-index: 10;
    display: grid;
    grid-template-columns: 1fr 440px;
    align-items: center;
    gap: 0;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    min-height: calc(100vh - 70px);
    padding: 0 40px;
  }

  /* ── LEFT ── */
  .hv-left {
    display: flex; flex-direction: column;
    padding: 64px 52px 64px 0;
    border-right: 1px solid rgba(200,164,90,0.08);
  }

  .hv-promo {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(200,164,90,0.09);
    border: 1px solid rgba(200,164,90,0.25);
    border-radius: 999px;
    padding: 6px 18px;
    font-family: 'Montserrat', sans-serif;
    font-size: 9px; font-weight: 800;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: #C8A45A;
    margin-bottom: 36px;
    width: fit-content;
    opacity: 0; animation: hv-up .5s .05s ease forwards;
  }
  .hv-promo-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #C8A45A;
    animation: hv-pulse 1.6s ease-in-out infinite;
  }
  @keyframes hv-pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:.35; transform:scale(.65); }
  }

  .hv-tag {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 8.5px; font-weight: 700;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: rgba(200,164,90,0.5);
    margin-bottom: 24px;
    opacity: 0; animation: hv-up .5s .12s ease forwards;
  }
  .hv-tag-line { width: 28px; height: 1px; background: rgba(200,164,90,0.35); }

  .hv-headline {
    opacity: 0; animation: hv-up .7s .18s ease forwards;
    margin-bottom: 0;
  }
  .hv-venca {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(72px, 9.5vw, 140px);
    color: #EEEAE4;
    letter-spacing: 0.05em;
    line-height: 0.88;
  }
  .hv-year {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(100px, 15vw, 220px);
    line-height: 0.76;
    letter-spacing: -0.02em;
    background: linear-gradient(115deg, #B8943A 0%, #E6CA80 28%, #F8EAB8 50%, #E6CA80 72%, #B8943A 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 6px 48px rgba(200,164,90,0.28));
    animation: hv-up .7s .18s ease forwards, hv-shimmer 6s 1.5s linear infinite;
  }
  .hv-sub {
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-style: italic; font-weight: 300;
    font-size: clamp(12px, 1.3vw, 16px);
    color: #555;
    letter-spacing: 0.08em;
    margin-top: 12px;
  }

  .hv-div {
    width: 80px; height: 1px;
    background: linear-gradient(to right, rgba(200,164,90,0.5), transparent);
    margin: 28px 0;
    opacity: 0; animation: hv-up .5s .3s ease forwards;
  }

  .hv-body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14.5px; line-height: 1.85;
    color: #838383; font-weight: 400;
    max-width: 480px;
    opacity: 0; animation: hv-up .5s .34s ease forwards;
  }
  .hv-body strong { color: #c8c8c8; font-weight: 600; }

  /* ── RIGHT ── */
  .hv-right {
    display: flex; flex-direction: column;
    padding: 64px 0 64px 48px;
    gap: 28px;
    align-items: flex-start;
    background: rgba(255,255,255,0.012);
  }

  /* Price */
  .hv-price-wrap {
    display: flex; flex-direction: column; gap: 4px;
    opacity: 0; animation: hv-up .5s .22s ease forwards;
  }
  .hv-price-old {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px; color: #3a3a3a;
    text-decoration: line-through;
    letter-spacing: 0.04em;
  }
  .hv-price-badge {
    display: inline-flex; align-items: center; gap: 5px;
    background: rgba(34,197,94,0.12);
    border: 1px solid rgba(34,197,94,0.28);
    border-radius: 999px;
    padding: 4px 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 8.5px; font-weight: 800;
    letter-spacing: 0.15em; text-transform: uppercase;
    color: #22c55e;
    width: fit-content;
    margin-bottom: 4px;
  }
  .hv-price {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: clamp(64px, 6.5vw, 96px);
    line-height: 0.85;
    background: linear-gradient(135deg, #C8A45A 0%, #F4E0A8 55%, #C8A45A 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: hv-shimmer 5s 2s linear infinite;
  }
  .hv-price-details {
    display: flex; flex-direction: column; gap: 4px;
    margin-top: 8px;
  }
  .hv-price-inst {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px; color: #585858;
  }
  .hv-price-frete {
    display: inline-flex; align-items: center; gap: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 9.5px; letter-spacing: 0.12em;
    text-transform: uppercase; color: #C8A45A; font-weight: 700;
  }

  /* CTA */
  .hv-cta-block {
    display: flex; flex-direction: column;
    gap: 12px; width: 100%;
    opacity: 0; animation: hv-up .5s .3s ease forwards;
  }
  .hv-cta-main {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    padding: 20px 32px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 19px; letter-spacing: 0.2em;
    text-decoration: none; border: none; cursor: pointer;
    border-radius: 999px;
    color: #000;
    background: linear-gradient(105deg, #C8A45A 0%, #E6CA80 50%, #F4E0A8 100%);
    box-shadow: 0 8px 52px rgba(200,164,90,0.38);
    transition: transform .22s ease, box-shadow .22s ease;
    position: relative; overflow: hidden;
    width: 100%;
    animation: hv-glow 3s 2s ease-in-out infinite;
  }
  @keyframes hv-glow {
    0%,100% { box-shadow: 0 8px 52px rgba(200,164,90,0.38); }
    50%      { box-shadow: 0 12px 64px rgba(200,164,90,0.55), 0 0 0 6px rgba(200,164,90,0.06); }
  }
  .hv-cta-main::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,.32) 50%, transparent 70%);
    transform: translateX(-120%);
    transition: transform .55s ease;
  }
  .hv-cta-main:hover { transform: translateY(-3px); box-shadow: 0 16px 68px rgba(200,164,90,0.55); }
  .hv-cta-main:hover::after { transform: translateX(120%); }

  .hv-cta-sub {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase; color: #4a4a4a;
  }
  .hv-cta-sep { width: 3px; height: 3px; border-radius: 50%; background: #2a2a2a; }

  /* Stats */
  .hv-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
    opacity: 0; animation: hv-up .5s .38s ease forwards;
  }
  .hv-stat {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(200,164,90,0.1);
    border-radius: 10px;
    padding: 12px 14px;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 600;
    color: #585858; letter-spacing: 0.03em;
    transition: border-color .2s;
  }
  .hv-stat:hover { border-color: rgba(200,164,90,0.22); }
  .hv-stat svg { color: #C8A45A; flex-shrink: 0; }
  .hv-stat-val { color: #c8c8c8; font-weight: 700; margin-right: 2px; }

  /* ── KEYFRAMES ── */
  @keyframes hv-up {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes hv-shimmer { to { background-position: 200% center; } }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .hv-grid { grid-template-columns: 1fr 380px; padding: 0 28px; }
    .hv-left { padding: 52px 44px 52px 0; }
    .hv-right { padding: 52px 0 52px 40px; }
  }
  @media (max-width: 820px) {
    .hv-grid { grid-template-columns: 1fr; min-height: auto; padding: 0 20px; }
    /* centraliza todo o conteúdo no mobile */
    .hv-left {
      padding: 40px 0 28px;
      border-right: none;
      border-bottom: 1px solid rgba(200,164,90,0.08);
      align-items: center;
      text-align: center;
    }
    .hv-tag  { justify-content: center; }
    .hv-div  { margin: 20px auto; }
    .hv-body { text-align: center; max-width: 100%; }
    .hv-right {
      padding: 28px 0 64px;
      background: none;
      align-items: center;
      text-align: center;
    }
    .hv-price-wrap   { align-items: center; }
    .hv-price-details { align-items: center; }
    .hv-price-frete  { justify-content: center; }
    .hv-cta-main { font-size: 17px; }
    /* oculta linha vertical central (layout 2 colunas desktop) */
    .hv-bg-line { display: none; }
  }
  @media (max-width: 480px) {
    .hv-grid { padding: 0 16px; }
    .hv-venca { font-size: 60px; }
    .hv-year  { font-size: 88px; }
    .hv-sub   { font-size: 11px; }
    .hv-body  { font-size: 13.5px; }
    .hv-cta-main { font-size: 15px; padding: 17px 24px; }
    .hv-price { font-size: 56px; }
    /* badge: reduz letter-spacing e padding para caber em 1 linha */
    .hv-promo {
      font-size: 8px;
      letter-spacing: 0.06em;
      padding: 5px 12px;
      margin-bottom: 20px;
    }
    .hv-tag { font-size: 7.5px; letter-spacing: 0.18em; margin-bottom: 14px; }
    .hv-left { padding-top: 32px; }
  }
  @media (max-width: 360px) {
    .hv-venca { font-size: 52px; }
    .hv-year  { font-size: 76px; }
    .hv-price { font-size: 48px; }
    .hv-promo { font-size: 7.5px; letter-spacing: 0.04em; }
  }
`;

export default function Hero() {
  return (
    <>
      <style>{CSS}</style>
      <section className="hv" id="inicio">

        <div className="hv-bg">
          <div className="hv-bg-grid" />
          <div className="hv-bg-glow-left" />
          <div className="hv-bg-glow-right" />
          <div className="hv-bg-line" />
          <div className="hv-bg-border-left" />
        </div>

        <div className="hv-grid">

          {/* ── LEFT: headline ── */}
          <div className="hv-left">
            <div className="hv-promo">
              <div className="hv-promo-dot" />
              <Zap size={10} />
              Oferta especial · Edição limitada 2026
            </div>

            <div className="hv-tag">
              <span className="hv-tag-line" />
              1º Planner Exclusivo Para Atletas de Futebol
            </div>

            <div className="hv-headline">
              <span className="hv-venca">VENÇA</span>
              <span className="hv-year">2026</span>
              <span className="hv-sub">com planejamento de atleta profissional</span>
            </div>

            <div className="hv-div" />

            <p className="hv-body">
              Defina metas reais, registre cada treino e evolua semana a semana.
              A ferramenta que separa quem <strong>sonha</strong> de quem <strong>vence</strong> dentro e fora de campo.
            </p>
          </div>

          {/* ── RIGHT: price + CTA ── */}
          <div className="hv-right">

            <div className="hv-price-wrap">
              <span className="hv-price-old">De R$ 129,00</span>
              <div className="hv-price-badge">
                <Zap size={9} />
                Promoção · 24% off
              </div>
              <div className="hv-price">R$&nbsp;98</div>
              <div className="hv-price-details">
                <span className="hv-price-inst">ou 12× de R$ 9,65 sem juros</span>
                <span className="hv-price-frete">
                  <Truck size={10} />
                  Frete grátis na 1ª compra
                </span>
              </div>
            </div>

            <div className="hv-cta-block">
              <a href={ML_URL} target="_blank" rel="noopener noreferrer" className="hv-cta-main">
                GARANTIR MEU PLANNER
                <ArrowRight size={17} />
              </a>
              <div className="hv-cta-sub">
                <ShieldCheck size={11} style={{ color: "#4a4a4a" }} />
                Compra 100% segura
              </div>
            </div>

            <div className="hv-stats">
              <div className="hv-stat">
                <Star size={13} fill="#C8A45A" stroke="none" />
                <span><span className="hv-stat-val">5.0</span> avaliação</span>
              </div>
              <div className="hv-stat">
                <Users size={13} />
                <span><span className="hv-stat-val">+150</span> planners</span>
              </div>
              <div className="hv-stat">
                <Truck size={13} />
                <span><span className="hv-stat-val">Frete</span> grátis</span>
              </div>
              <div className="hv-stat">
                <CreditCard size={13} />
                <span><span className="hv-stat-val">12×</span> sem juros</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
