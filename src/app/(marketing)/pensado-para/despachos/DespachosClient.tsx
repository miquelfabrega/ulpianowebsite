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

function ClipboardTreeIcon() {
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
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M12 11v6" />
      <path d="M9 14h6" />
    </svg>
  );
}

function CalculatorChartIcon() {
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
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="14" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="14" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  );
}

function DocumentPenIcon() {
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
      <path d="M16 13l-4 4-2-2" />
    </svg>
  );
}

function EyeIcon() {
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
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ClockIcon() {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldCheckIcon() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
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
    icon: <ClipboardTreeIcon />,
    title: "Gestión Digital de Expedientes y Esquemas Sucesorios",
    subtitle:
      "El expediente sucesorio completo, digitalizado y estructurado.",
    features: [
      {
        title: "Paso a Paso Digital",
        desc: "Define parámetros legales (legítimas, régimen foral) y añade datos de herederos y bienes.",
      },
      {
        title: "Diagramas Interactivos",
        desc: "Muestra el árbol familiar y la estructura patrimonial, facilitando la explicación al cliente y sorprendiendo con una experiencia clara y atractiva.",
      },
    ],
  },
  {
    icon: <CalculatorChartIcon />,
    title: "Atribución de Bienes y Control Fiscal",
    subtitle:
      "Distribución patrimonial y fiscalidad sucesoria, automatizadas.",
    features: [
      {
        title: "Reportes de Atribución",
        desc: "Presenta un desglose detallado sobre la distribución de bienes y la obligación tributaria de cada beneficiario. Muestra la estructura del patrimonio y los herederos en un esquema claro y atractivo.",
      },
      {
        title: "Simulaciones de Impuestos",
        desc: "Calcula en segundos cuánto pagará cada heredero, considerando reducciones y bonificaciones autonómicas. Ajusta distribuciones en tiempo real para mostrar posibles variaciones en la carga fiscal.",
      },
    ],
  },
  {
    icon: <DocumentPenIcon />,
    title: "Creación de Documentos y Firma",
    subtitle:
      "De datos estructurados a documentos prácticamente definitivos.",
    features: [
      {
        title: "Automatización de Documentos",
        desc: "Genera testamentos, pactos sucesorios y escrituras adaptadas a la normativa vigente, reduciendo tareas manuales.",
      },
      {
        title: "Firma y Registro",
        desc: "Acelera la formalización con documentos prácticamente definitivos, evitando correcciones de última hora.",
      },
    ],
  },
];

const claims = [
  "Las atribuciones sucesorias en tres minutos",
  "La herencia legal meditada",
  "La demanda por legítima preparada",
  "La demanda por cuarta viudal preparada",
];

const benefits = [
  {
    icon: <EyeIcon />,
    title: "Transparencia para el Cliente",
    desc: "Ofrece diagramas claros y simulaciones en tiempo real, generando confianza y diferenciándote de la competencia.",
  },
  {
    icon: <ClockIcon />,
    title: "Mayor Eficiencia Interna",
    desc: "Automatiza procesos y libera horas de trabajo manual.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Reducción de Errores y Riesgos Legales",
    desc: "Ulpiano refuerza la coherencia con la normativa sucesoria y actualizaciones forales.",
  },
  {
    icon: <LayersIcon />,
    title: "Servicio Integral",
    desc: "Combina el asesoramiento legal con una plataforma robusta que cubre desde la planificación patrimonial hasta la tramitación fiscal.",
  },
];

const testimonials = [
  {
    quote:
      "Desde que usamos Ulpiano, la preparación de un expediente sucesorio nos lleva la mitad de tiempo. Y el cliente entiende lo que paga.",
    author: "Marta R., Abogada",
    location: "Despacho en Girona",
  },
  {
    quote:
      "La visualización del árbol familiar y las simulaciones fiscales cambiaron la forma en que presentamos las herencias a nuestros clientes.",
    author: "Jordi P., Abogado Civilista",
    location: "Barcelona",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function DespachosClient() {
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
            PENSADO PARA ABOGADOS
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
            Optimiza tus Expedientes de Herencia y Ofrece a tus Clientes la
            Claridad que Esperan
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
            Con ulpiano.es, agiliza la elaboración y el seguimiento de
            expedientes sucesorios, ofreciendo al cliente diagramas y
            visualizaciones que facilitan la comprensión de cada proceso.
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
              PARA TU DESPACHO
            </p>
            <h2
              className="h2"
              style={{
                color: "var(--ink)",
                marginTop: "var(--space-3)",
                maxWidth: 700,
              }}
            >
              ¿Por Qué ulpiano.es para Abogados?
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
              Automatiza la Gestión de Herencias, Visualiza la Distribución de
              Bienes y Gana Eficiencia
            </p>
          </div>

          <div className="desp-features-grid">
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
          <div className="desp-claims-grid">
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
              Lo que cambia en tu despacho con Ulpiano
            </h2>
          </div>

          <div className="desp-benefits-grid">
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
          <div className="desp-testimonials-grid">
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
                {/* Placeholder para capturas de diagramas */}
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
            Pendiente: testimonios reales de abogados usuarios
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
            Mejora la Experiencia de Tus Clientes y Digitaliza la Gestión
            Sucesoria
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
            Descubre cómo ulpiano.es puede agilizar tus casos de herencia y
            ofrecer una presentación visual del patrimonio más impactante.
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
            ulpiano.es – Innovación en Derecho Sucesorio
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
          <div className="desp-crosslinks-grid">
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
        .desp-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .desp-claims-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-6);
        }
        .desp-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .desp-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }
        .desp-crosslinks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          margin-top: var(--space-6);
        }

        @media (max-width: 1023px) {
          .desp-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .desp-features-grid > :last-child {
            grid-column: 1 / -1;
          }
          .desp-crosslinks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .desp-crosslinks-grid > :last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 767px) {
          .desp-features-grid {
            grid-template-columns: 1fr;
          }
          .desp-features-grid > :last-child {
            grid-column: auto;
          }
          .desp-benefits-grid {
            grid-template-columns: 1fr;
          }
          .desp-testimonials-grid {
            grid-template-columns: 1fr;
          }
          .desp-claims-grid {
            grid-template-columns: 1fr;
          }
          .desp-crosslinks-grid {
            grid-template-columns: 1fr;
          }
          .desp-crosslinks-grid > :last-child {
            grid-column: auto;
          }
        }
      `}</style>
    </div>
  );
}
