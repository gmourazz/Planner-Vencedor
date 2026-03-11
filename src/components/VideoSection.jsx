import { useState, useRef } from "react";
import { Play, Target, Brain, TrendingUp } from "lucide-react";
import { VIDEO_SRC } from "../constants";
import { useFade } from "../hooks/useFade";
import styles from "./VideoSection.module.css";

const POINTS = [
  "Como o planner organiza toda a sua temporada de 2026",
  "Seções de metas, treinos e evolução pessoal",
  "Por que jogadores profissionais já estão usando",
];

export default function VideoSection() {
  const ref     = useFade();
  const videoRef = useRef(null);
  const [playing,  setPlaying]  = useState(false);
  const [hasVideo, setHasVideo] = useState(true);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section className={styles.section} id="video">
      <div ref={ref} className={`${styles.inner} fade`}>

        <div className={styles.header}>
          <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
            <Play size={11} />
            Assista antes de comprar
          </div>
          <h2 className="sec-title">
            Veja o Planner<br /><em>Em Ação</em>
          </h2>
        </div>

        <div className={styles.videoLayout}>

          {/* ── VÍDEO (formato vertical 9:16) ── */}
          <div className={styles.videoWrapper}>
            {hasVideo ? (
              <>
                <video
                  ref={videoRef}
                  src={VIDEO_SRC}
                  controls={playing}
                  playsInline
                  preload="metadata"
                  onError={() => setHasVideo(false)}
                  className={styles.video}
                  aria-label="Vídeo de apresentação do Planner Vencedor"
                />
                {!playing && (
                  <div
                    className={styles.overlay}
                    onClick={handlePlay}
                    role="button"
                    tabIndex={0}
                    aria-label="Reproduzir vídeo"
                    onKeyDown={(e) => e.key === "Enter" && handlePlay()}
                  >
                    <div className={styles.playBtn}>
                      <Play size={28} fill="#000" color="#000" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.placeholder}>
                <Play size={40} color="var(--g1)" />
                <p>Adicione o vídeo em <code style={{ color: "var(--g1)" }}>public/img/video.mp4</code></p>
              </div>
            )}
          </div>

          {/* ── CONTEXTO (lado direito) ── */}
          <div className={styles.videoContext}>
            <h3 className={styles.videoContextTitle}>
              Tudo que você precisa<br /><em>saber em 1 vídeo</em>
            </h3>
            <p className={styles.videoContextText}>
              Assista e entenda por que o Planner Vencedor é a ferramenta
              que faltava na rotina de quem quer vencer no futebol.
            </p>
            <ul className={styles.videoContextPoints}>
              {POINTS.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
