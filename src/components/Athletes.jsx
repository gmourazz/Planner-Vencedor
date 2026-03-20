import styles from "./Athletes.module.css";
import { useFade } from "../hooks/useFade";

const ATHLETES = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2025-02-18_Pedro_Guilherme_Abreu_dos_Santos.jpg/400px-2025-02-18_Pedro_Guilherme_Abreu_dos_Santos.jpg",
    name: "Pedro",
    pos: "Atacante",
    club: "Flamengo",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Luciano-Sao-Paulo-Juventude-jun-2022_%28cropped%29.jpg/400px-Luciano-Sao-Paulo-Juventude-jun-2022_%28cropped%29.jpg",
    name: "Luciano",
    pos: "Atacante",
    club: "São Paulo",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/LEO_ORTIZ_X_FLU_-_ONE9_CONTENT_-_GABRIEL_NUFFER_2024-7.jpg/400px-LEO_ORTIZ_X_FLU_-_ONE9_CONTENT_-_GABRIEL_NUFFER_2024-7.jpg",
    name: "Léo Ortiz",
    pos: "Zagueiro",
    club: "Flamengo",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Estevao-Palmeiras-Liverpool-abr24_%28cropped%29.jpg/400px-Estevao-Palmeiras-Liverpool-abr24_%28cropped%29.jpg",
    name: "Estevão",
    pos: "Atacante",
    club: "Palmeiras",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Rony-Palmeiras-Santos-jan24.jpg/400px-Rony-Palmeiras-Santos-jan24.jpg",
    name: "Rony",
    pos: "Atacante",
    club: "Palmeiras",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ze-Rafael-Palmeiras-Athletico-jul-2022_%28cropped%29.jpg/400px-Ze-Rafael-Palmeiras-Athletico-jul-2022_%28cropped%29.jpg",
    name: "Zé Rafael",
    pos: "Volante",
    club: "Palmeiras",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Andreas-Pereira-Palmeiras-Internacional-sep2025_%28cropped%29.jpg/400px-Andreas-Pereira-Palmeiras-Internacional-sep2025_%28cropped%29.jpg",
    name: "Andreas Pereira",
    pos: "Meia",
    club: "Palmeiras",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Brasileir%C3%A3o_2022_Corinthians_2x0_Cuiab%C3%A1_%2852661306474%29_%28cropped%29.jpg/400px-Brasileir%C3%A3o_2022_Corinthians_2x0_Cuiab%C3%A1_%2852661306474%29_%28cropped%29.jpg",
    name: "Yuri Alberto",
    pos: "Atacante",
    club: "Corinthians",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pedro_Tonon_Geromel_-_Gr%C3%AAmio_%28cropped%29.png/400px-Pedro_Tonon_Geromel_-_Gr%C3%AAmio_%28cropped%29.png",
    name: "Geromel",
    pos: "Zagueiro",
    club: "Grêmio",
  },
];

export default function Athletes() {
  const refH = useFade();
  const refG = useFade();

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />

      <div className={styles.inner}>
        {/* Header */}
        <div ref={refH} className={`${styles.header} fade`}>
          <span className={styles.eyebrow}>Inspiração que vem do topo</span>
          <h2 className={styles.title}>
            Eles chegaram lá com<br />
            <em>disciplina e planejamento</em>
          </h2>
          <p className={styles.sub}>
            Os maiores talentos do futebol brasileiro não jogam no improviso.
            Treino, metas e organização fazem parte da rotina de quem chega ao mais alto nível.
          </p>
        </div>

        {/* Grid */}
        <div ref={refG} className={`${styles.grid} fade`}>
          {ATHLETES.map(({ img, name, pos, club }) => (
            <div key={name} className={styles.card}>
              <img
                src={img}
                alt={name}
                className={styles.img}
                loading="lazy"
              />
              <div className={styles.overlay} />
              <div className={styles.posBadge}>{pos}</div>
              <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <span className={styles.club}>{club}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div ref={useFade()} className={`${styles.bottomBar} fade`}>
          <span className={styles.bottomStat}><strong>+150</strong> planners nas mãos de atletas</span>
          <span className={styles.dot} />
          <span className={styles.bottomStat}><strong>Sub-15</strong> até <strong>Sub-20</strong></span>
          <span className={styles.dot} />
          <span className={styles.bottomStat}>Todo o Brasil</span>
        </div>
      </div>
    </section>
  );
}
