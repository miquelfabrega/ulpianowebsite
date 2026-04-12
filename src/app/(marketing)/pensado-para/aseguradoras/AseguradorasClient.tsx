"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ShieldPlus,
  FileBarChart,
  HeartPulse,
  PackagePlus,
  Smile,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
   INLINE SVG ICONS
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

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
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
    icon: <ShieldPlus size={24} />,
    title: "Complemento a Pólizas de Vida y Decesos",
    subtitle:
      "Tu póliza no termina en la indemnización. La tramitación sucesoria, integrada.",
    features: [
      {
        title: "Servicio Post-Fallecimiento Estructurado",
        desc: "Del fallecimiento a la distribución de la herencia — las familias de tus asegurados reciben un camino gestionado, no solo una indemnización económica.",
      },
      {
        title: "Propuesta de Valor Diferenciada",
        desc: "Paquete integral: póliza + gestión sucesoria. Ningún competidor ofrece esta combinación. Tu aseguradora se posiciona como solución completa para la vida y el fallecimiento.",
      },
    ],
  },
  {
    icon: <FileBarChart size={24} />,
    title: "Expediente Sucesorio y Fiscalidad del Cobro",
    subtitle:
      "Los datos del asegurado, vinculados al expediente. El impacto fiscal, calculado.",
    features: [
      {
        title: "Datos del Asegurado Vinculados al Expediente",
        desc: "Los datos del asegurado y sus beneficiarios fluyen directamente al expediente sucesorio. Sin re-entrada manual. Sin duplicidades.",
      },
      {
        title: "Impacto Fiscal del Cobro de la Póliza",
        desc: "La carga fiscal estimada que implica el cobro de la póliza tras el fallecimiento, calculada y presentada a la familia. Entienden qué recibirán y qué pagarán.",
      },
    ],
  },
  {
    icon: <HeartPulse size={24} />,
    title: "Fidelización y Cumplimiento Normativo",
    subtitle:
      "Transparencia para el asegurado. Cumplimiento normativo actualizado.",
    features: [
      {
        title: "Visibilidad Completa para el Asegurado",
        desc: "Los pasos sucesorios, el estado de la póliza, las acciones pendientes — todo transparente. El asegurado y su familia ven el proceso completo.",
      },
      {
        title: "Cumplimiento Normativo Actualizado",
        desc: "La plataforma se mantiene al día con la legislación española y autonómica. Documentación cifrada. El riesgo regulatorio, gestionado.",
      },
    ],
  },
];

const claims = [
  "El servicio sucesorio, integrado en tu póliza de vida",
  "El impacto fiscal del cobro, calculado para la familia",
  "El expediente del asegurado, estructurado desde el primer día",
  "La fidelización que va más allá de la indemnización",
];

const benefits = [
  {
    icon: <PackagePlus size={24} />,
    title: "Catálogo de Productos Ampliado",
    desc: "Tu póliza de vida no termina en la indemnización. Incluye la gestión sucesoria completa. Eso es diferenciación real en un mercado saturado.",
  },
  {
    icon: <Smile size={24} />,
    title: "Experiencia del Asegurado Mejorada",
    desc: "En el momento más difícil, tu aseguradora ofrece más que dinero: ofrece un camino estructurado para gestionar la herencia. Eso fideliza.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Menor Riesgo Operativo",
    desc: "Cumplimiento normativo actualizado, documentación cifrada, expedientes trazables. Menos incidencias, menos reclamaciones.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Imagen de Innovación",
    desc: "Servicios digitales que añaden transparencia y practicidad a tus pólizas. Eso se percibe en el mercado y se valora por el asegurado.",
  },
];

const testimonials = [
  {
    quote:
      "Integrar la gestión sucesoria en nuestras pólizas de vida ha sido el mayor diferenciador de los últimos años. Los clientes perciben un valor que ningún competidor ofrece.",
    author: "Patricia S., Directora de Producto",
    location: "Aseguradora en Madrid",
  },
  {
    quote:
      "El cálculo del impacto fiscal del cobro de la póliza es información que las familias agradecen enormemente. Antes llegaban sin saber qué iban a pagar de impuestos.",
    author: "Javier M., Responsable de Canal",
    location: "Barcelona",
  },
];

const crossLinks = [
  {
    href: "/soluciones/fiscalidad-sucesoria",
    label: "Fiscalidad Sucesoria",
    desc: "Motor ISD automatizado",
  },
  {
    href: "/soluciones/procesamiento-documental",
    label: "Procesamiento Documental",
    desc: "Documentos procesados automáticamente",
  },
  {
    href: "/soluciones/planificacion-sucesoria",
    label: "Planificación Sucesoria",
    desc: "Módulo patrimonial completo",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function AseguradorasClient() {
  const revealRef = useReveal();

  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* SECCIÓN 1: HERO */}
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
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <div
            className="eyebrow reveal"
            style={{
              color: "rgba(255,255,255,0.5)",
              marginBottom: "var(--space-4)",
            }}
          >
            PENSADO PARA ASEGURADORAS
          </div>
          <h1
            className="h1 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 720,
              margin: "0 auto",
              ...stagger(1),
            }}
          >
            La Tramitación Sucesoria que Complementa tus Pólizas de Vida. El
            Servicio Post-Fallecimiento que Fideliza.
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
            Con Ulpiano, cuando tu asegurado fallece, la familia recibe más que
            una indemnización — recibe el camino completo de la sucesión,
            estructurado y gestionado. Tu póliza se convierte en un servicio
            integral.
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
            <Link href="#propuesta" className="btn-ghost">
              Quiero Más Información &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: PROPUESTA DE VALOR */}
      <section
        id="propuesta"
        style={{ background: "var(--white)", padding: "var(--space-20) 0" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--space-12)",
            }}
          >
            <div
              className="eyebrow reveal"
              style={{
                color: "var(--slate)",
                marginBottom: "var(--space-4)",
              }}
            >
              PARA TU ASEGURADORA
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              &iquest;Por Qué Ulpiano para Aseguradoras?
            </h2>
            <p
              className="body-lg reveal"
              style={{
                color: "var(--slate)",
                maxWidth: 600,
                margin: "var(--space-4) auto 0",
                ...stagger(2),
              }}
            >
              Complementa tus Pólizas con la Gestión Sucesoria Digital, el
              Impacto Fiscal Calculado y la Fidelización Real
            </p>
          </div>

          {/* Feature Blocks Grid */}
          <div className="aseg-features-grid">
            {featureBlocks.map((block, i) => (
              <div key={block.title} className="card reveal" style={stagger(i)}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--green-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ulpiano-green)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  {block.icon}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {block.title}
                </h3>
                <p
                  className="body-sm"
                  style={{
                    color: "var(--slate)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  {block.subtitle}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {block.features.map((feat) => (
                    <li
                      key={feat.title}
                      style={{
                        marginBottom: "var(--space-4)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--space-3)",
                          marginBottom: 4,
                        }}
                      >
                        <span style={{ flexShrink: 0, marginTop: 3 }}>
                          <CheckIcon />
                        </span>
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: "var(--ink)",
                          }}
                        >
                          {feat.title}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: 15,
                          color: "var(--slate)",
                          lineHeight: 1.7,
                          paddingLeft: 28,
                          margin: 0,
                        }}
                      >
                        {feat.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2B: CLAIMS STRIP */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-12) 0",
        }}
      >
        <div className="container">
          <div className="aseg-claims-grid">
            {claims.map((claim, i) => (
              <div
                key={claim}
                className="reveal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  background: "var(--white)",
                  border: "1px solid var(--mist)",
                  borderLeft: "3px solid var(--ulpiano-green)",
                  borderRadius: 8,
                  padding: "var(--space-4) var(--space-6)",
                  ...stagger(i),
                }}
              >
                <span style={{ flexShrink: 0 }}>
                  <CheckCircleSmall />
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
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

      {/* SECCIÓN 3: BENEFICIOS */}
      <section
        style={{ background: "var(--white)", padding: "var(--space-20) 0" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--space-12)",
            }}
          >
            <div
              className="eyebrow reveal"
              style={{
                color: "var(--slate)",
                marginBottom: "var(--space-4)",
              }}
            >
              BENEFICIOS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Lo que cambia en tu aseguradora con Ulpiano
            </h2>
          </div>

          <div className="aseg-benefits-grid">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="card reveal"
                style={stagger(i)}
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
                    color: "var(--ulpiano-green)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--slate)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: TESTIMONIOS */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-16) 0",
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: 12,
              color: "var(--fog)",
              textAlign: "center",
              marginBottom: "var(--space-8)",
              fontStyle: "italic",
            }}
          >
            Pendiente: testimonios reales de responsables de aseguradoras
          </p>
          <div className="aseg-testimonials-grid">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  paddingLeft: "var(--space-6)",
                  borderLeft: "3px solid var(--ulpiano-green)",
                  ...stagger(i),
                }}
              >
                <blockquote
                  style={{
                    fontStyle: "italic",
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p
                  style={{
                    marginTop: "var(--space-4)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--fog)",
                    margin: "var(--space-4) 0 0",
                  }}
                >
                  &mdash; {t.author} | {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CROSS-LINKS */}
      <section
        style={{ background: "var(--white)", padding: "var(--space-12) 0" }}
      >
        <div className="container">
          <div className="aseg-crosslinks-grid">
            {crossLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="card reveal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-4)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                  ...stagger(i),
                }}
              >
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: 13,
                      color: "var(--slate)",
                      marginTop: 2,
                    }}
                  >
                    {link.desc}
                  </span>
                </div>
                <span style={{ color: "var(--ulpiano-green)", flexShrink: 0 }}>
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CTA FINAL */}
      <section
        style={{
          background: "var(--night)",
          padding: "var(--space-24) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="h2 reveal aseg-cta-h2"
            style={{
              color: "var(--white)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Diferénciate con el Servicio Sucesorio que Complementa tus Pólizas
            de Vida
          </h2>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: 520,
              margin: "var(--space-6) auto 0",
              ...stagger(1),
            }}
          >
            Descubre cómo Ulpiano puede ampliar tu catálogo de productos y
            ofrecer a tus asegurados un servicio que va más allá de la
            indemnización.
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
              Empieza Ahora &rarr;
            </Link>
          </div>
          <p
            className="reveal"
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              marginTop: "var(--space-4)",
              ...stagger(3),
            }}
          >
            Ulpiano – Innovación en Derecho Sucesorio
          </p>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style>{`
        .aseg-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .aseg-claims-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-6);
        }
        .aseg-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .aseg-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-10);
        }
        .aseg-crosslinks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .aseg-cta-h2 {
          font-size: 42px;
        }

        @media (max-width: 1024px) {
          .aseg-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .aseg-crosslinks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .aseg-features-grid {
            grid-template-columns: 1fr;
          }
          .aseg-claims-grid {
            grid-template-columns: 1fr;
          }
          .aseg-benefits-grid {
            grid-template-columns: 1fr;
          }
          .aseg-testimonials-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
          .aseg-crosslinks-grid {
            grid-template-columns: 1fr;
          }
          .aseg-cta-h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
