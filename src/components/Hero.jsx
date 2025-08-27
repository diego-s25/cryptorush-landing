import { motion } from "framer-motion";

export default function Hero() {
  const go = (id) => {
    // Give the sheet time to close before scrolling
    requestAnimationFrame(() => {
      if (typeof window.__scrollToPanel === "function") {
        window.__scrollToPanel(id);
      } else {
        // fallback — anchor within the section
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return (
    <section id="top" className="section hero">
      <div className="hero__bg" />
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: "center", gap: 28 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="heading-xl text-gradient">
                Expertos en Soluciones Blockchain Personalizadas
              </h1>

              <p className="lead" style={{ marginTop: 10 }}>
                Expertos en Proyectos Web3 Personalizados.
              </p>

              {/* CTA group */}
              <div className="hero__cta">
                <a
                  href="#products"
                  className="btn btn--primary"
                  onClick={(e) => {
                    e.preventDefault();
                    go("products"); // <-- horizontal page “products”
                  }}
                >
                  Explora nuestros productos
                </a>
                <span style={{ display: "inline-block", width: 10 }} />
                <a
                  href="#contact"
                  className="btn btn--ghost"
                  onClick={(e) => {
                    e.preventDefault();
                    go("contact"); // <-- horizontal page “contact”
                  }}
                >
                  Agenda asesoría
                </a>
              </div>

              <p className="subtle">
                Lidera el futuro digital bajo un marco regulatorio sólido.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="card" style={{ position: "relative", padding: 24 }}>
              {/* Video container */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--ring)",
                }}
              >
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2FCryptoRushIntro.mp4?alt=media&token=27758fd8-9406-4c6a-a00f-a71cf15fac69"
                  controls
                  playsInline
                  // if you want it to start muted & looping, add: autoPlay muted loop
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 1, // ensure video is above any decorative layers
                  }}
                />
              </div>

              {/* Glow layer – make it non-interactive and below */}
              <div
                style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: 16,
                  filter: "blur(24px)",
                  opacity: 0.2,
                  background:
                    "linear-gradient(90deg,var(--brand-a),var(--brand-b))",
                  pointerEvents: "none", // <— key line
                  zIndex: 0, // <— behind the video
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
