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

function HeartHandshakeIcon() {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  );
}

function FileSearchIcon() {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <circle cx="11.5" cy="14.5" r="2.5" />
      <line x1="13.25" y1="16.25" x2="15" y2="18" />
    </svg>
  );
}

function MonitorIcon() {
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
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function StarIcon() {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TrophyIcon() {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function CheckSquareIcon() {
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
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function AwardIcon() {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
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
    icon: <HeartHandshakeIcon />,
    title: "El Servicio Funerario, Ampliado",
    subtitle:
      "Tu servicio no termina en el sepelio. La tramitación sucesoria, integrada.",
    features: [
      {
        title: "Tramitación Sucesoria Integrada",
        desc: "Del certificado de defunción al expediente sucesorio estructurado. Tus clientes reciben un camino completo — no solo una derivación a un tercero.",
      },
      {
        title: "Diferenciación Tangible",
        desc: "Mientras otros terminan en el funeral, tu servicio continúa con la gestión sucesoria digital. Eso se recuerda. Eso se recomienda.",
      },
    ],
  },
  {
    icon: <FileSearchIcon />,
    title: "Documentación Procesada y Fiscalidad Calculada",
    subtitle:
      "Los documentos del fallecido, procesados. El ISD, estimado para la familia.",
    features: [
      {
        title: "Documentos Procesados Digitalmente",
        desc: "Certificado de defunción subido → datos extraídos → expediente sucesorio estructurado. Sin transcripción manual. Sin papeleo disperso.",
      },
      {
        title: "ISD Estimado para la Familia",
        desc: "La carga fiscal por heredero, calculada y presentada en un informe claro. La familia entiende qué va a pagar y por qué. Sin sorpresas.",
      },
    ],
  },
  {
    icon: <MonitorIcon />,
    title: "Transparencia y Seguimiento para el Cliente",
    subtitle:
      "El estado del expediente, visible. La distribución patrimonial, clara.",
    features: [
      {
        title: "Panel de Estado del Expediente",
        desc: "La familia ve el progreso: qué está hecho, qué falta, qué viene después. Transparencia que reduce preguntas y genera confianza.",
      },
      {
        title: "Distribución Patrimonial Visualizada",
        desc: "Diagramas interactivos que muestran quién hereda qué. Claros, exportables, profesionales. La herencia deja de ser una caja negra.",
      },
    ],
  },
];

const claims = [
  "El expediente sucesorio, estructurado desde el primer día",
  "El ISD de cada heredero, estimado para la familia",
  "La documentación del fallecido, procesada sin transcripción manual",
  "El servicio funerario, ampliado más allá del sepelio",
];

const benefits = [
  {
    icon: <StarIcon />,
    title: "Servicio Completo para la Familia",
    desc: "Tu funeraria acompaña desde el fallecimiento hasta la tramitación de la herencia. Un servicio integral que nadie más ofrece en tu mercado.",
  },
  {
    icon: <TrophyIcon />,
    title: "Diferenciación en el Mercado",
    desc: "Mientras otros terminan en el sepelio, tú continúas con la gestión sucesoria digital. Eso se recuerda y se recomienda.",
  },
  {
    icon: <CheckSquareIcon />,
    title: "Operativa Digital, Sin Errores",
    desc: "Documentos procesados, cálculos automatizados, expedientes trazables. Sin duplicidades ni papeleo confuso.",
  },
  {
    icon: <AwardIcon />,
    title: "Imagen Profesional y de Confianza",
    desc: "Ofrecer soluciones completas transmite compromiso. Las familias lo valoran en un momento donde la confianza lo es todo.",
  },
];

const testimonials = [
  {
    quote:
      "Ofrecer la tramitación sucesoria como parte de nuestro servicio ha cambiado la percepción de las familias. Ya no somos solo la funeraria — somos quienes les ayudan a resolver lo que viene después.",
    author: "Antoni B., Director de Funeraria",
    location: "Girona",
  },
  {
    quote:
      "El expediente sucesorio estructurado nos permite derivar a un profesional con toda la documentación lista. Las familias lo agradecen enormemente.",
    author: "Montse P., Responsable de Atención",
    location: "Barcelona",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function FunerariasClient() {
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
            PENSADO PARA FUNERARIAS
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
            La Tramitación Sucesoria que tus Clientes Necesitan. Integrada en tu
            Servicio Funerario.
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
            Con Ulpiano, amplía tu oferta más allá del sepelio. Cuando la
            familia necesita apoyo en la gestión de la herencia, tu funeraria
            ofrece un camino completo — estructurado, digital y con el rigor
            profesional que esperan.
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
              Quiero Saber Más <ArrowIcon />
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
              PARA TU FUNERARIA
            </p>
            <h2
              className="h2"
              style={{
                color: "var(--ink)",
                marginTop: "var(--space-3)",
                maxWidth: 700,
              }}
            >
              ¿Por Qué Ulpiano para Funerarias?
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
              Amplía tu Servicio con la Tramitación Sucesoria Digital, la
              Documentación Procesada y la Fiscalidad Calculada
            </p>
          </div>

          <div className="fun-features-grid">
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
          <div className="fun-claims-grid">
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
              Lo que cambia en tu funeraria con Ulpiano
            </h2>
          </div>

          <div className="fun-benefits-grid">
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
          <div className="fun-testimonials-grid">
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
                  [Pendiente: captura de diagrama sucesorio]
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
            Pendiente: testimonios reales de directores de funerarias
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
            Amplía tu Servicio Funerario con la Tramitación Sucesoria que tus
            Clientes Necesitan
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
            Descubre cómo Ulpiano puede integrar la gestión sucesoria en tu
            oferta de servicios y diferenciarte en el mercado.
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
          <div className="fun-crosslinks-grid">
            {[
              {
                href: "/soluciones/procesamiento-documental",
                label: "Procesamiento Documental",
                desc: "Documentos procesados automáticamente",
              },
              {
                href: "/soluciones/fiscalidad-sucesoria",
                label: "Fiscalidad Sucesoria",
                desc: "Motor ISD automatizado",
              },
              {
                href: "/soluciones/documentacion-sucesoria",
                label: "Documentación Sucesoria",
                desc: "Generación documental inteligente",
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
        .fun-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .fun-claims-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-6);
        }
        .fun-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .fun-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }
        .fun-crosslinks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          margin-top: var(--space-6);
        }

        @media (max-width: 1023px) {
          .fun-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fun-features-grid > :last-child {
            grid-column: 1 / -1;
          }
          .fun-crosslinks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fun-crosslinks-grid > :last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 767px) {
          .fun-features-grid {
            grid-template-columns: 1fr;
          }
          .fun-features-grid > :last-child {
            grid-column: auto;
          }
          .fun-benefits-grid {
            grid-template-columns: 1fr;
          }
          .fun-testimonials-grid {
            grid-template-columns: 1fr;
          }
          .fun-claims-grid {
            grid-template-columns: 1fr;
          }
          .fun-crosslinks-grid {
            grid-template-columns: 1fr;
          }
          .fun-crosslinks-grid > :last-child {
            grid-column: auto;
          }
        }
      `}</style>
    </div>
  );
}
