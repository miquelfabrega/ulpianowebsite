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

function CalculatorIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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

function BellAlertIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <line x1="1" y1="1" x2="4" y2="4" />
      <line x1="23" y1="1" x2="20" y2="4" />
    </svg>
  );
}

function AuditTrailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ShieldAlertIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function SearchCheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <polyline points="8 11 10 13 14 9" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
      <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/* =============================================
   DATA
   ============================================= */

const featureBlocks = [
  {
    icon: <CalculatorIcon />,
    title: "Motor Fiscal ISD Automatizado",
    subtitle:
      "La cuota del ISD de cada heredero. Calculada. Con la norma citada.",
    features: [
      {
        title: "C\u00e1lculo Completo por Heredero",
        desc: "Base imponible \u2192 reducciones auton\u00f3micas \u2192 bonificaciones \u2192 coeficiente multiplicador \u2192 cuota a ingresar. La Llei 19/2010 integrada en cada paso. Sin hojas de c\u00e1lculo, sin revisi\u00f3n manual de tablas.",
      },
      {
        title: "Rec\u00e1lculo ante Cambios Normativos",
        desc: "Cuando la normativa cambia, los expedientes activos se recalculan autom\u00e1ticamente. Sin repasar uno a uno. Sin riesgo de aplicar una tabla derogada.",
      },
    ],
  },
  {
    icon: <BellAlertIcon />,
    title: "Alertas de Plazo y Modelos Fiscales",
    subtitle:
      "La alerta antes del vencimiento. El Modelo 650, listo para presentar.",
    features: [
      {
        title: "Alertas de Vencimiento Proactivas",
        desc: "El per\u00edodo voluntario de 6 meses, monitorizado. El recargo seg\u00fan Art. 27 LGT, calculado antes de que ocurra. La alerta llega a ti, no al cliente.",
      },
      {
        title: "Modelo 650 Autocompleto",
        desc: "Autoliquidaci\u00f3n individual por heredero. Los campos rellenados desde los datos del expediente. Sin transcribir manualmente. Listo para presentar ante la ATC.",
      },
    ],
  },
  {
    icon: <AuditTrailIcon />,
    title: "Trazabilidad y Auditor\u00eda ante la ATC",
    subtitle:
      "Cada paso del c\u00e1lculo, documentado. Con la referencia normativa citada.",
    features: [
      {
        title: "Cada Paso Documentado con Norma Citada",
        desc: "Desde la base imponible hasta la cuota final, cada c\u00e1lculo tiene su referencia legal. Ante una inspecci\u00f3n de la ATC, el expediente se defiende solo.",
      },
      {
        title: "Modelo 660 Estructurado",
        desc: "Declaraci\u00f3n de sucesiones con inventario completo, generado desde datos estructurados. Sin ensamblar documentos a mano.",
      },
    ],
  },
];

const claims = [
  "El ISD de cada heredero, calculado con la norma citada",
  "El Modelo 650, autocompleto desde el expediente",
  "La alerta de extemporaneidad, antes de que ocurra",
  "El rec\u00e1lculo normativo, autom\u00e1tico en expedientes activos",
];

const benefits = [
  {
    icon: <ShieldAlertIcon />,
    title: "Cero Contingencias por Plazo",
    desc: "La alerta llega antes que el vencimiento. El recargo seg\u00fan Art. 27 LGT, calculado antes de que sea real. Sin sustos para ti ni para tu cliente.",
  },
  {
    icon: <SearchCheckIcon />,
    title: "Trazabilidad ante la ATC",
    desc: "Cada paso del c\u00e1lculo fiscal documentado con referencia normativa. Auditable desde el primer d\u00eda. El expediente habla por s\u00ed solo ante una inspecci\u00f3n.",
  },
  {
    icon: <RefreshIcon />,
    title: "Rec\u00e1lculo Normativo Autom\u00e1tico",
    desc: "Cuando la Llei 19/2010 se modifica, los expedientes activos se actualizan solos. Sin repasarlos uno a uno. Sin riesgo de aplicar normativa derogada.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "ROI Medible por Expediente",
    desc: "Menos horas de c\u00e1lculo manual, menos riesgo de error, menos contingencias. El ahorro de tiempo es cuantificable expediente a expediente.",
  },
];

const testimonials = [
  {
    quote:
      "Antes dedic\u00e1bamos dos horas por heredero al c\u00e1lculo del ISD. Con Ulpiano, el embudo fiscal completo sale en minutos y con la norma citada. Ante la ATC, el expediente se defiende solo.",
    author: "Laura G., Asesora Fiscal",
    location: "Asesor\u00eda en Girona",
  },
  {
    quote:
      "El rec\u00e1lculo autom\u00e1tico ante cambios normativos nos ha evitado m\u00e1s de una contingencia. Antes repas\u00e1bamos expedientes uno a uno. Ahora se actualizan solos.",
    author: "Marc T., Director de Fiscalidad",
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
    href: "/soluciones/planificacion-sucesoria",
    label: "Planificaci\u00f3n Sucesoria",
    desc: "M\u00f3dulo patrimonial completo",
  },
  {
    href: "/soluciones/documentacion-sucesoria",
    label: "Documentaci\u00f3n Sucesoria",
    desc: "Generaci\u00f3n documental inteligente",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function AsesoriasClient() {
  const revealRef = useReveal();

  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* SECCI\u00d3N 1: HERO */}
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
            PENSADO PARA ASESORES FISCALES
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
            El ISD Recalculado ante Cada Cambio Normativo. La Alerta antes del
            Plazo. La Trazabilidad ante la ATC.
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
            Con Ulpiano, el ISD de cada heredero sale calculado con la Llei
            19/2010 citada en cada paso. Cuando la norma cambia, los expedientes
            activos se recalculan solos. El Modelo 650, autocompleto. La alerta
            de plazo, antes de que sea un problema.
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
            <a href="#propuesta" className="btn-ghost">
              M&aacute;s Informaci&oacute;n &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 2: PROPUESTA DE VALOR */}
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
              PARA TU ASESOR&Iacute;A
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              &iquest;Por Qu&eacute; Ulpiano para Asesores Fiscales?
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
              El Motor Fiscal ISD Completo, las Alertas de Plazo y la
              Trazabilidad Auditable ante la ATC
            </p>
          </div>

          <div className="ases-features-grid">
            {featureBlocks.map((block, blockIdx) => (
              <div
                key={block.title}
                className="card reveal"
                style={stagger(blockIdx)}
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

      {/* SECCI\u00d3N 2B: CLAIMS STRIP */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-12) 0",
        }}
      >
        <div className="container">
          <div className="ases-claims-grid">
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

      {/* SECCI\u00d3N 3: BENEFICIOS */}
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
              Lo que cambia en tu asesor&iacute;a con Ulpiano
            </h2>
          </div>

          <div className="ases-benefits-grid">
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

      {/* SECCI\u00d3N 4: TESTIMONIOS */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-16) 0",
        }}
      >
        <div className="container">
          {/* Pendiente: testimonios reales de asesores fiscales usuarios */}
          <div className="ases-testimonials-grid">
            {testimonials.map((t, i) => (
              <div
                key={t.author}
                className="reveal"
                style={{
                  paddingLeft: "var(--space-6)",
                  borderLeft: "3px solid var(--ulpiano-green)",
                  ...stagger(i),
                }}
              >
                <blockquote
                  style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
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
                  }}
                >
                  &mdash; {t.author} | {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 5: CROSS-LINKS */}
      <section
        style={{ background: "var(--white)", padding: "var(--space-12) 0" }}
      >
        <div className="container">
          <div className="ases-crosslinks-grid">
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
                  ...stagger(i),
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: 2,
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--slate)",
                    }}
                  >
                    {link.desc}
                  </div>
                </div>
                <span style={{ color: "var(--ulpiano-green)", flexShrink: 0 }}>
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 6: CTA FINAL */}
      <section
        style={{
          background:
            "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-24) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2 reveal ases-cta-h2">
            El ISD de tu Pr&oacute;ximo Expediente, Calculado en Minutos. Con la
            Norma Citada.
          </h2>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              margin: "var(--space-6) auto 0",
              ...stagger(1),
            }}
          >
            Descubre c&oacute;mo Ulpiano puede eliminar el c&aacute;lculo manual
            del ISD en tu asesor&iacute;a y ofrecerte trazabilidad completa ante
            la ATC.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-10)",
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
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
              marginTop: "var(--space-4)",
              ...stagger(3),
            }}
          >
            Ulpiano &ndash; Innovaci&oacute;n en Derecho Sucesorio
          </p>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style>{`
        .ases-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .ases-claims-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-6);
        }
        .ases-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .ases-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }
        .ases-crosslinks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .ases-cta-h2 {
          color: var(--white);
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .ases-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ases-crosslinks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ases-features-grid {
            grid-template-columns: 1fr;
          }
          .ases-benefits-grid {
            grid-template-columns: 1fr;
          }
          .ases-testimonials-grid {
            grid-template-columns: 1fr;
          }
          .ases-crosslinks-grid {
            grid-template-columns: 1fr;
          }
          .ases-cta-h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
