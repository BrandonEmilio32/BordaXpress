import Link from "next/link";
import Copy from "@/components/Copy";

function HowItWorksSection() {
  return (
    <section className="bx-how">
      <div className="bx-how-inner">
        <Copy delay={0.1}>
          <p className="bx-how-eyebrow">¿CÓMO FUNCIONA BORDAXPRESS?</p>
        </Copy>
        <Copy delay={0.2}>
          <h2 className="bx-how-title">
            Del catálogo a la cotización
            <span className="bx-hero-highlight"> en tres pasos claros</span>
          </h2>
        </Copy>

        <div className="bx-how-grid">
          <Copy delay={0.3} animateOnScroll={true}>
            <article className="bx-how-card">
              <h3>1. Explora el catálogo</h3>
              <p>
                Centralizamos todos tus modelos, variantes y colores por categoría. Tu equipo
                encuentra rápido el producto base correcto sin revisar PDFs sueltos.
              </p>
            </article>
          </Copy>

          <Copy delay={0.35} animateOnScroll={true}>
            <article className="bx-how-card">
              <h3>2. Elige técnica y volumen</h3>
              <p>
                Bordado, serigrafía, DTF, sublimado o láser. El catálogo sabe qué técnicas
                aplican por modelo y muestra mínimos sugeridos por volumen.
              </p>
            </article>
          </Copy>

          <Copy delay={0.4} animateOnScroll={true}>
            <article className="bx-how-card">
              <h3>3. Solicita cotización precisa</h3>
              <p>
                Envía una solicitud clara al equipo de producción: modelo, variante, técnica,
                cantidades y notas. Sin correos confusos ni capturas de pantalla.
              </p>
            </article>
          </Copy>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <main className="bx-hero">
        <div className="bx-hero-inner">
          <section>
            <div className="bx-hero-copy-eyebrow">CATÁLOGO PROFESIONAL DE PERSONALIZACIÓN</div>

            <Copy animateOnScroll={false} delay={0.3}>
              <h1 className="bx-hero-title">
                Producción textil
                <br />
                <span className="bx-hero-highlight">rápida y precisa</span>
              </h1>
            </Copy>

            <Copy delay={0.6}>
              <p className="bx-hero-subtitle">
                BordaXpress centraliza tu catálogo, técnicas de personalización y cotizaciones
                B2B en una sola experiencia web. Pensado para agencias, marcas y equipos de
                compras que necesitan velocidad y claridad.
              </p>
            </Copy>

            <div className="bx-hero-cta-row">
              <Link href="/catalogo" className="bx-btn-primary">
                Ver catálogo
              </Link>
              <Link href="/cotizador" className="bx-btn-ghost">
                Solicitar cotización
              </Link>
            </div>

            <div className="bx-hero-meta">
              <span>• Bordado • Serigrafía • DTF • Sublimado • Láser</span>
              <span>Enfocado en volumen y precisión B2B</span>
            </div>
          </section>

          <section className="bx-hero-media">
            <div className="bx-hero-media-overlay" />
            <div className="bx-hero-badge">BordaXpress Studio</div>
            <p className="bx-hero-tagline">
              Diseñado para catálogos B2B que necesitan orden, consistencia y animaciones
              suaves con GSAP.
            </p>
          </section>
        </div>
      </main>

      <HowItWorksSection />
    </>
  );
}
