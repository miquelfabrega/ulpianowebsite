import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__orb" />
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">Plataforma de gestión sucesoria</p>
            <h1 className="hero__title">
              De inventario a cuaderno particional. Sin errores de cálculo. Sin revisión manual de la norma.
            </h1>
            <p className="hero__subtitle">
              Ulpiano es la plataforma que estructura, valida y documenta el proceso sucesorio completo.
              Para abogados, asesores y notarías que gestionan herencias con volumen, complejidad y
              responsabilidad profesional.
            </p>
            <div className="hero__cta-primary">
              <Link href="#cta-final" className="btn-primary">Solicita tu demo gratuita</Link>
            </div>
            <div className="hero__cta-secondary">
              <Link href="#como-funciona" className="btn-ghost">
                Ver cómo funciona el motor normativo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero-mockup">
              <div className="mockup__chrome">
                <span className="mockup__dot" />
                <span className="mockup__dot" />
                <span className="mockup__dot" />
                <span className="mockup__title">Panel de Expedientes</span>
              </div>
              <div className="mockup__table">
                <div className="mockup__table-header">
                  <span>Causante</span>
                  <span>Estado</span>
                  <span>Próximo plazo</span>
                  <span style={{ textAlign: 'right' }}>Cuota ISD</span>
                </div>
                <div className="mockup__row mockup__row--active">
                  <span className="mockup__name">García Puig, M.</span>
                  <span><span className="mockup__badge mockup__badge--green">Liquidado</span></span>
                  <span className="mockup__date">12/03/2026</span>
                  <span className="mockup__amount">€ 12.430,00</span>
                </div>
                <div className="mockup__row">
                  <span className="mockup__name">Casals Ferrer, J.</span>
                  <span><span className="mockup__badge mockup__badge--amber">Pendiente ISD</span></span>
                  <span className="mockup__date">28/04/2026</span>
                  <span className="mockup__amount">€ 8.215,50</span>
                </div>
                <div className="mockup__row">
                  <span className="mockup__name">Roca Vidal, T.</span>
                  <span><span className="mockup__badge mockup__badge--blue">En cálculo</span></span>
                  <span className="mockup__date">15/05/2026</span>
                  <span className="mockup__amount">€ 24.890,00</span>
                </div>
                <div className="mockup__row">
                  <span className="mockup__name">Puig Soler, A.</span>
                  <span><span className="mockup__badge mockup__badge--green">Liquidado</span></span>
                  <span className="mockup__date">02/02/2026</span>
                  <span className="mockup__amount">€ 5.640,75</span>
                </div>
                <div className="mockup__row">
                  <span className="mockup__name">Ferrer Costa, L.</span>
                  <span><span className="mockup__badge mockup__badge--amber">Pendiente ISD</span></span>
                  <span className="mockup__date">30/06/2026</span>
                  <span className="mockup__amount">€ 31.200,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
