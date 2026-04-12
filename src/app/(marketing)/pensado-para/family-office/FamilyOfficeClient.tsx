"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* =============================================
   SCROLL REVEAL HOOK
   ============================================= */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const children = node.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* =============================================
   SVG ICONS
   ============================================= */

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22V12h6v10" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
    </svg>
  );
}

function PieChartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="M4 7l8-4 8 4" />
      <path d="M4 7l-1 8h6L8 7" />
      <path d="M20 7l-1 8h-6l1-8" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

function CheckCircleSmall() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ulpiano-green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

/* =============================================
   DATA
   ============================================= */

const featureBlocks = [
  {
    icon: <CompassIcon />,
    title: "Planificación Sucesoria Pre-Mortem",
    subtitle:
      "Los escenarios sucesorios, comparados. Antes de que sea urgente.",
    features: [
      {
        title: "Modelado Patrimonial Completo",
        desc: "Inmuebles con cargas, productos financieros, participaciones societarias, activos digitales — todo valorado y estructurado en un inventario único. El patrimonio completo, visible de un vistazo.",
      },
      {
        title: "Escenarios Sucesorios Comparados",
        desc: "Herencia directa vs. donación en vida vs. usufructo al cónyuge — el impacto fiscal de cada opción, lado a lado. La familia decide con datos, no con intuición.",
      },
    ],
  },
  {
    icon: <BuildingIcon />,
    title: "Empresa Familiar y Patrimonio Complejo",
    subtitle:
      "Las participaciones distribuidas. La reducción del 95%, aplicada donde corresponde.",
    features: [
      {
        title: "Participaciones Societarias con Impacto Fiscal",
        desc: "Cómo se distribuyen las participaciones de la empresa familiar entre herederos. Con la reducción del 95% aplicada donde corresponde y el impacto fiscal de cada escenario calculado.",
      },
      {
        title: "Activos Digitales Integrados",
        desc: "Criptomonedas, wallets, cuentas online — valorados a fecha de devengo y clasificados fiscalmente. Integrados en el caudal relicto como categoría de primer nivel, no como una nota al margen.",
      },
    ],
  },
  {
    icon: <PieChartIcon />,
    title: "Visibilidad Patrimonial y Reporting",
    subtitle:
      "El patrimonio completo, en un dashboard. Los informes, listos para el consejo familiar.",
    features: [
      {
        title: "Dashboard Patrimonial Consolidado",
        desc: "Qué hay dentro del patrimonio, qué cargas tiene, cuál es el caudal relicto neto. Visible, actualizado, exportable. La foto completa para tomar decisiones.",
      },
      {
        title: "Informes para el Consejo Familiar",
        desc: "Reportes estructurados con escenarios sucesorios, impacto fiscal comparado y distribución patrimonial. Listos para la reunión. Claros para la familia.",
      },
    ],
  },
];

const claims = [
  "Tres escenarios sucesorios comparados en una pantalla",
  "El impacto fiscal de la donación en vida, calculado antes de decidir",
  "La empresa familiar, distribuida con reducción del 95% aplicada",
  "El patrimonio completo inventariado y valorado",
];

const benefits = [
  {
    icon: <TargetIcon />,
    title: "Planificación Proactiva",
    desc: "No esperas al fallecimiento. Modelas escenarios hoy para decidir mejor mañana. La sucesión se planifica, no se improvisa.",
  },
  {
    icon: <LayersIcon />,
    title: "Visibilidad Patrimonial Completa",
    desc: "Inmuebles, financieros, empresa familiar, activos digitales — todo en un inventario estructurado y valorado. Sin hojas de cálculo dispersas.",
  },
  {
    icon: <ScaleIcon />,
    title: "Decisiones Fiscales Informadas",
    desc: "Cada escenario sucesorio con su impacto fiscal calculado. Herencia directa, donación, usufructo — la familia decide con datos sobre la mesa.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Continuidad de la Empresa Familiar",
    desc: "Cómo se distribuyen las participaciones, qué reducciones aplican, qué impacto fiscal tiene cada opción. La empresa familiar no se improvisa.",
  },
];

const testimonials = [
  {
    quote:
      "Antes de Ulpiano, preparar los escenarios sucesorios para un consejo familiar nos llevaba semanas. Ahora presentamos tres opciones comparadas con impacto fiscal en una sola reunión.",
    author: "Elena V., Directora de Planificación",
    location: "Family Office en Barcelona",
  },
  {
    quote:
      "La integración de activos digitales en el inventario patrimonial fue decisiva para nosotros. Ninguna otra plataforma los trata como categoría fiscal real.",
    author: "David R., Asesor Patrimonial",
    location: "Family Office en Madrid",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function FamilyOfficeClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* ─────────────── SECCIÓN 1: HERO ─────────────── */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-16))",
          paddingBottom: "var(--space-24)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -100,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="eyebrow reveal"
            style={{
              color: "rgba(255,255,255,0.5)",
              marginBottom: "var(--space-4)",
            }}
          >
            PENSADO PARA FAMILY OFFICES
          </p>
          <h1
            className="h1 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 720,
              margin: "0 auto",
              ...stagger(1),
            }}
          >
            El Impacto Fiscal de Cada Escenario Sucesorio, Comparado. Antes de
            que Sea Urgente.
          </h1>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 600,
              margin: "var(--space-6) auto 0",
              ...stagger(2),
            }}
          >
            Con Ulpiano, modelas el patrimonio completo — inmuebles,
            financieros, empresa familiar, activos digitales — y comparas
            escenarios sucesorios con su impacto fiscal calculado. La sucesión
            se planifica, no se improvisa.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-8)",
              flexWrap: "wrap",
              ...stagger(3),
            }}
          >
            <Link href="/demo" className="btn-primary">
              Reserva tu Demo
            </Link>
            <Link
              href="#propuesta"
              className="btn-ghost"
              style={{ color: "var(--white)" }}
            >
              Más Información <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── SECCIÓN 2: PROPUESTA DE VALOR ─────────────── */}
      <section
        id="propuesta"
        style={{
          background: "var(--white)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container">
          <div className="reveal" style={{ marginBottom: "var(--space-10)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              PARA TU FAMILY OFFICE
            </p>
            <h2
              className="h2"
              style={{
                color: "var(--ink)",
                marginTop: "var(--space-3)",
                maxWidth: 700,
              }}
            >
              ¿Por Qué Ulpiano para Family Offices?
            </h2>
            <p
              className="body-lg"
              style={{
                color: "var(--slate)",
                marginTop: "var(--space-3)",
                maxWidth: 600,
                fontSize: 17,
              }}
            >
              Planificación Pre-Mortem, Escenarios Comparados y Patrimonio
              Complejo Estructurado
            </p>
          </div>

          <div className="fo-features-grid">
            {featureBlocks.map((block, i) => (
              <div
                key={block.title}
                className="card reveal"
                style={stagger(i + 1)}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--green-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {block.icon}
                </div>
                <h3
                  style={{
                    color: "var(--ink)",
                    marginTop: "var(--space-4)",
                  }}
                >
                  {block.title}
                </h3>
                <p
                  className="body-sm"
                  style={{
                    color: "var(--slate)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  {block.subtitle}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-4)",
                    marginTop: "var(--space-6)",
                  }}
                >
                  {block.features.map((feat) => (
                    <div key={feat.title}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--space-3)",
                        }}
                      >
                        <span
                          style={{ flexShrink: 0, marginTop: 3 }}
                        >
                          <CheckIcon />
                        </span>
                        <div>
                          <div
                            style={{
                              fontWeight: 500,
                              fontSize: 15,
                              color: "var(--ink)",
                              lineHeight: 1.4,
                            }}
                          >
                            {feat.title}
                          </div>
                          <p
                            style={{
                              fontSize: 15,
                              color: "var(--slate)",
                              lineHeight: 1.7,
                              marginTop: 4,
                            }}
                          >
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SECCIÓN 2B: CLAIMS RÁPIDOS ─────────────── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-12) 0",
        }}
      >
        <div className="container">
          <div className="fo-claims-grid">
            {claims.map((claim, i) => (
              <div
                key={claim}
                className="reveal"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--mist)",
                  borderRadius: 8,
                  padding: "var(--space-4) var(--space-6)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  ...stagger(i),
                }}
              >
                <span style={{ flexShrink: 0 }}>
                  <CheckCircleSmall />
                </span>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: "var(--ink)",
                    lineHeight: 1.4,
                  }}
                >
                  {claim}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SECCIÓN 3: BENEFICIOS CLAVE ─────────────── */}
      <section
        style={{
          background: "var(--white)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container">
          <div className="reveal" style={{ marginBottom: "var(--space-10)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              BENEFICIOS
            </p>
            <h2
              className="h2"
              style={{
                color: "var(--ink)",
                marginTop: "var(--space-3)",
              }}
            >
              Lo que cambia en tu family office con Ulpiano
            </h2>
          </div>

          <div className="fo-benefits-grid">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="card reveal"
                style={stagger(i + 1)}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--green-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    color: "var(--ink)",
                    marginTop: "var(--space-4)",
                    fontSize: 20,
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--slate)",
                    lineHeight: 1.7,
                    marginTop: "var(--space-3)",
                  }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SECCIÓN 4: TESTIMONIOS ─────────────── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-16) 0",
        }}
      >
        <div className="container">
          <div className="fo-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.author} className="reveal" style={stagger(i + 1)}>
                <blockquote
                  style={{
                    borderLeft: "3px solid var(--ulpiano-green)",
                    paddingLeft: "var(--space-6)",
                    margin: 0,
                  }}
                >
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: 17,
                      color: "var(--ink)",
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer
                    style={{
                      fontSize: 14,
                      color: "var(--fog)",
                      marginTop: "var(--space-4)",
                    }}
                  >
                    — {t.author} | {t.location}
                  </footer>
                </blockquote>
                <div
                  style={{
                    marginTop: "var(--space-6)",
                    background: "var(--white)",
                    border: "1px solid var(--mist)",
                    borderRadius: 8,
                    height: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    color: "var(--fog)",
                    fontWeight: 500,
                  }}
                >
                  [Pendiente: captura de dashboard patrimonial]
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "var(--fog)",
              marginTop: "var(--space-8)",
              fontStyle: "italic",
            }}
          >
            Pendiente: testimonios reales de asesores de family offices
          </p>
        </div>
      </section>

      {/* ─────────────── SECCIÓN 5: CTA FINAL ─────────────── */}
      <section
        className="cta-final"
        style={{ padding: "var(--space-24) 0" }}
      >
        <div className="cta-final__orb" />
        <div className="cta-final__content container">
          <h2
            className="h2 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 640,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            La Próxima Reunión del Consejo Familiar, con los Escenarios
            Sucesorios sobre la Mesa
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 520,
              margin: "var(--space-4) auto 0",
              textAlign: "center",
              lineHeight: 1.6,
              ...stagger(1),
            }}
          >
            Descubre cómo Ulpiano puede estructurar la planificación sucesoria
            de tus clientes y ofrecer escenarios comparados con impacto fiscal
            real.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-8)",
              flexWrap: "wrap",
              ...stagger(2),
            }}
          >
            <Link href="/demo" className="btn-primary">
              Reserva tu Demo
            </Link>
            <Link href="/registro" className="btn-ghost">
              Empieza Ahora <ArrowIcon />
            </Link>
          </div>
          <p
            className="reveal"
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              marginTop: "var(--space-4)",
              textAlign: "center",
              ...stagger(3),
            }}
          >
            Ulpiano – Innovación en Derecho Sucesorio
          </p>
        </div>
      </section>

      {/* ─────────────── CROSS-LINKS ─────────────── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-12) 0",
          borderTop: "1px solid var(--mist)",
        }}
      >
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <p
              className="eyebrow"
              style={{
                color: "var(--slate)",
                marginBottom: "var(--space-4)",
              }}
            >
              EXPLORA NUESTRAS SOLUCIONES
            </p>
          </div>
          <div className="fo-crosslinks-grid">
            {[
              {
                href: "/soluciones/planificacion-sucesoria",
                label: "Planificación Sucesoria",
                desc: "Módulo patrimonial completo",
              },
              {
                href: "/soluciones/fiscalidad-sucesoria",
                label: "Fiscalidad Sucesoria",
                desc: "Motor ISD automatizado",
              },
              {
                href: "/soluciones/activos-digitales",
                label: "Activos Digitales",
                desc: "Criptopatrimonio inventariado y valorado",
              },
            ].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="card reveal"
                style={{
                  textDecoration: "none",
                  display: "block",
                  ...stagger(i + 1),
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    color: "var(--ink)",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--slate)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── RESPONSIVE STYLES ─────────────── */}
      <style>{`
        .fo-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .fo-claims-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-6);
        }
        .fo-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .fo-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }
        .fo-crosslinks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          margin-top: var(--space-6);
        }

        @media (max-width: 1023px) {
          .fo-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fo-features-grid > :last-child {
            grid-column: 1 / -1;
          }
          .fo-crosslinks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fo-crosslinks-grid > :last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 767px) {
          .fo-features-grid {
            grid-template-columns: 1fr;
          }
          .fo-features-grid > :last-child {
            grid-column: auto;
          }
          .fo-benefits-grid {
            grid-template-columns: 1fr;
          }
          .fo-testimonials-grid {
            grid-template-columns: 1fr;
          }
          .fo-claims-grid {
            grid-template-columns: 1fr;
          }
          .fo-crosslinks-grid {
            grid-template-columns: 1fr;
          }
          .fo-crosslinks-grid > :last-child {
            grid-column: auto;
          }
        }
      `}</style>
    </div>
  );
}
