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

function FileTextIcon() {
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
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function FolderLockIcon() {
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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      <rect x="10" y="13" width="4" height="4" rx="1" />
      <path d="M11 13v-1a1 1 0 0 1 2 0v1" />
    </svg>
  );
}

function MessageSquareIcon() {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function UsersIcon() {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function FileOutputIcon() {
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
      <line x1="12" y1="18" x2="12" y2="12" />
      <polyline points="9 15 12 18 15 15" />
    </svg>
  );
}

function LockIcon() {
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
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LinkIcon() {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
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
    icon: <FileTextIcon />,
    title: "Expediente Post-Testamento Activo",
    subtitle:
      "La relación con el cliente no termina en la firma. El expediente sigue vivo.",
    features: [
      {
        title: "Seguimiento Continuo del Cliente",
        desc: "El testamento es el inicio. Ulpiano mantiene el expediente activo con alertas, plazos y eventos sucesorios posteriores. La relación con tu cliente se extiende 20 años, no 20 minutos.",
      },
      {
        title: "Alertas y Recordatorios Automáticos",
        desc: "Plazos fiscales, cambios normativos que afectan al expediente, eventos sucesorios pendientes. Todo señalizado antes de que sea urgente.",
      },
    ],
  },
  {
    icon: <FolderLockIcon />,
    title: "Documentación Centralizada y Generación de Escrituras",
    subtitle:
      "Todo el expediente en un lugar. Las escrituras, generadas desde los datos.",
    features: [
      {
        title: "Repositorio Cifrado por Expediente",
        desc: "Testamento, certificado de defunción, escrituras, DNIs — todo cifrado, accesible por rol. Sin documentos dispersos en carpetas compartidas.",
      },
      {
        title: "Escrituras Generadas desde Datos del Expediente",
        desc: "La escritura de partición, redactada a partir de los datos estructurados del expediente. Sin empezar desde un documento en blanco. Tú revisas y firmas.",
      },
    ],
  },
  {
    icon: <MessageSquareIcon />,
    title: "Comunicación y Coordinación con el Cliente",
    subtitle:
      "Un canal único por expediente. Sin email, sin WhatsApp.",
    features: [
      {
        title: "Canal de Comunicación Integrado",
        desc: "Cada expediente tiene su canal. El cliente pregunta, tú respondes. Sin hilos de email perdidos ni grupos de WhatsApp descontrolados.",
      },
      {
        title: "Panel de Estado Visible para el Cliente",
        desc: "El cliente ve en qué punto está su expediente: qué está hecho, qué falta, qué viene después. Transparencia que genera confianza.",
      },
    ],
  },
];

const claims = [
  "La escritura de partición, generada desde el expediente",
  "El seguimiento post-testamento, desde la plataforma",
  "La documentación del expediente, cifrada y centralizada",
  "La comunicación con el cliente, sin salir de Ulpiano",
];

const benefits = [
  {
    icon: <UsersIcon />,
    title: "Relación Continuada con el Cliente",
    desc: "El testamento es el inicio. El expediente post-testamento mantiene la relación activa durante años. Tu notaría, presente cuando el cliente lo necesita.",
  },
  {
    icon: <FileOutputIcon />,
    title: "Eficiencia Documental",
    desc: "Escrituras generadas desde los datos del expediente. Sin redactar desde cero. Sin copiar-pegar entre documentos.",
  },
  {
    icon: <LockIcon />,
    title: "Seguridad y Control de Acceso",
    desc: "Documentación cifrada, accesible por rol. Trazabilidad de quién accede a qué y cuándo. El expediente está protegido.",
  },
  {
    icon: <LinkIcon />,
    title: "Coordinación sin Fricción",
    desc: "Sin hilos de email, sin grupos de WhatsApp. Un canal único por expediente. Cada comunicación trazable y archivada.",
  },
];

const testimonials = [
  {
    quote:
      "El expediente post-testamento nos permite mantener la relación con familias durante años. Antes, firmaban y no volvíamos a saber de ellos hasta la siguiente generación.",
    author: "Carmen L., Notaria",
    location: "Girona",
  },
  {
    quote:
      "Generar la escritura de partición desde los datos del expediente nos ahorra horas de redacción. Y el resultado es más coherente que empezar desde cero.",
    author: "Àlex M., Oficial de Notaría",
    location: "Barcelona",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function NotariasClient() {
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
            PENSADO PARA NOTARÍAS
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
            El Expediente Post-Testamento, Activo. La Documentación
            Centralizada. El Seguimiento del Cliente, desde la Plataforma.
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
            Con Ulpiano, la relación con tu cliente no termina en la firma. El
            expediente sigue vivo, la documentación está cifrada y centralizada,
            y las escrituras se generan desde los datos — sin redactar desde
            cero.
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
              PARA TU NOTARÍA
            </p>
            <h2
              className="h2"
              style={{
                color: "var(--ink)",
                marginTop: "var(--space-3)",
                maxWidth: 700,
              }}
            >
              ¿Por Qué Ulpiano para Notarías?
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
              El Expediente Post-Testamento Activo, la Documentación Cifrada y
              la Escritura Generada desde Datos
            </p>
          </div>

          <div className="not-features-grid">
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
          <div className="not-claims-grid">
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
              Lo que cambia en tu notaría con Ulpiano
            </h2>
          </div>

          <div className="not-benefits-grid">
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
          <div className="not-testimonials-grid">
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
            Pendiente: testimonios reales de notarías usuarias
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
            El Expediente Post-Testamento que Mantiene la Relación con tu
            Cliente Activa durante 20 Años
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
            Descubre cómo Ulpiano puede transformar la gestión post-testamento
            de tu notaría y ofrecer un seguimiento continuado a tus clientes.
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
          <div className="not-crosslinks-grid">
            {[
              {
                href: "/soluciones/documentacion-sucesoria",
                label: "Documentación Sucesoria",
                desc: "Generación documental inteligente",
              },
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
        .not-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .not-claims-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-6);
        }
        .not-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .not-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }
        .not-crosslinks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          margin-top: var(--space-6);
        }

        @media (max-width: 1023px) {
          .not-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .not-features-grid > :last-child {
            grid-column: 1 / -1;
          }
          .not-crosslinks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .not-crosslinks-grid > :last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 767px) {
          .not-features-grid {
            grid-template-columns: 1fr;
          }
          .not-features-grid > :last-child {
            grid-column: auto;
          }
          .not-benefits-grid {
            grid-template-columns: 1fr;
          }
          .not-testimonials-grid {
            grid-template-columns: 1fr;
          }
          .not-claims-grid {
            grid-template-columns: 1fr;
          }
          .not-crosslinks-grid {
            grid-template-columns: 1fr;
          }
          .not-crosslinks-grid > :last-child {
            grid-column: auto;
          }
        }
      `}</style>
    </div>
  );
}
