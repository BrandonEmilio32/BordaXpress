import Link from "next/link";
import Copy from "@/components/Copy";

export default function Page() {
  return (
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
  );
}
