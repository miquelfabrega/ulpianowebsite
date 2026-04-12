"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );
    node.querySelectorAll(".reveal").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Icons ─── */

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--fog)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function StepNumberIcon({ n }: { n: number }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "2px solid var(--ulpiano-green)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "var(--font-mono)",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--ulpiano-green)",
      }}
    >
      {n}
    </div>
  );
}

/* ─── Data ─── */

const demoTopics = [
  {
    title: "Inventario patrimonial estructurado",
    desc: "Inmuebles, financieros, participaciones — en un panel con caudal relicto neto calculado automáticamente.",
  },
  {
    title: "Cálculo del ISD con norma citada",
    desc: "La cuota de cada heredero según la Llei 19/2010, con reducciones y bonificaciones aplicadas.",
  },
  {
    title: "Cuaderno particional generado",
    desc: "En Word, con los datos reales del expediente. Listo para tu revisión.",
  },
  {
    title: "Comparación de escenarios fiscales",
    desc: "Herencia directa vs. donación vs. usufructo al cónyuge — impacto fiscal en paralelo.",
  },
];

const nextSteps = [
  {
    step: 1,
    title: "Completa el formulario",
    desc: "Solo nombre, email y despacho. En 30 segundos.",
  },
  {
    step: 2,
    title: "Recibes el enlace de agenda",
    desc: "En menos de 24h, con horarios disponibles que se ajusten a ti.",
  },
  {
    step: 3,
    title: "Sesión de 25 minutos",
    desc: "Directamente sobre la plataforma con un expediente real del sector.",
  },
];

const faqs = [
  {
    q: "¿Qué necesito preparar para la sesión?",
    a: "Nada. Nosotros proporcionamos un caso real del sector sucesorio catalán para que veas la plataforma en acción con datos representativos.",
  },
  {
    q: "¿Es realmente sin compromiso?",
    a: "Sí. La sesión es informativa. No cerramos con precio ni pedimos datos de pago. Si quieres probar por tu cuenta después, puedes empezar gratis.",
  },
  {
    q: "¿Puedo traer a un compañero del despacho?",
    a: "Por supuesto. De hecho, lo recomendamos. Cuantos más perfiles vean la plataforma, mejor evaluación podéis hacer.",
  },
  {
    q: "¿La demo cubre la normativa de mi comunidad?",
    a: "Actualmente la plataforma cubre el derecho foral catalán (CCCat, Llei 19/2010). La demo se centra en un expediente con domicilio en Catalunya.",
  },
  {
    q: "¿Cuánto tarda la respuesta?",
    a: "Menos de 24 horas laborables. Normalmente respondemos el mismo día.",
  },
];

/* ─── FAQ Component ─── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid var(--mist)",
        padding: "var(--space-5) 0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-4)",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: 0,
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "var(--ink)",
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            transition: "transform 200ms ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: "var(--slate)",
          }}
        >
          <ChevronDown />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 200 : 0,
          overflow: "hidden",
          transition: "max-height 300ms ease",
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: "var(--slate)",
            lineHeight: 1.7,
            paddingTop: "var(--space-3)",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─── Main ─── */

export function DemoClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const formStartedRef = useRef(false);

  const dl = useRef(
    () => (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer,
  );

  function handleFormStarted() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    dl.current()?.push({ event: "demo_form_started" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setFormError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);

      dl.current()?.push({
        event: "demo_form_submitted",
        empresa: data.company,
      });
      dl.current()?.push({
        event: "generate_lead",
        lead_type: "demo",
        currency: "EUR",
        value: 150,
      });
    } catch {
      setFormError("Ha ocurrido un error. Inténtalo de nuevo.");
      dl.current()?.push({
        event: "form_error",
        form_name: "demo",
        error_type: "submission",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div ref={revealRef}>
      {/* ═══ HERO — Outcome-focused, not format-focused ═══ */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-16))",
          paddingBottom: "var(--space-20)",
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
            background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="eyebrow reveal"
            style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}
          >
            VE CÓMO FUNCIONA
          </p>
          <h1
            className="h1 reveal"
            style={{ color: "var(--white)", maxWidth: 800, margin: "0 auto", ...stagger(1) }}
          >
            El expediente que hoy te cuesta 6 horas, resuelto en 25 minutos
          </h1>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 620,
              margin: "var(--space-6) auto 0",
              ...stagger(2),
            }}
          >
            Reserva una sesión personalizada. Verás la plataforma funcionando con un caso
            real del sector sucesorio catalán — inventario, cálculo del ISD, y
            generación del cuaderno particional.
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
            <a href="#reservar" className="btn-primary btn-primary--large">
              Reservar mi sesión
            </a>
            <a href="#que-veras" className="btn-ghost" style={{ color: "var(--white)" }}>
              Ver qué incluye <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF STRIP ═══ */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-8) 0",
          borderBottom: "1px solid var(--mist)",
        }}
      >
        <div className="container">
          <div className="demo-proof-strip reveal">
            {[
              {
                number: "25",
                unit: "min",
                label: "Sin diapositivas. Directamente sobre el producto.",
              },
              {
                number: "35%",
                unit: "",
                label: "Reducción media en tiempo de gestión por expediente.",
              },
              {
                number: "100%",
                unit: "",
                label: "Derecho foral catalán integrado (CCCat, Llei 19/2010).",
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 28,
                    color: "var(--ulpiano-green)",
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 56,
                  }}
                >
                  {s.number}
                  {s.unit && (
                    <span style={{ fontSize: 16 }}>{s.unit}</span>
                  )}
                </span>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.5 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM + CONTENT GRID ═══ */}
      <section
        id="que-veras"
        style={{ background: "var(--white)", padding: "var(--space-20) 0" }}
      >
        <div className="container">
          <div className="demo-grid">
            {/* Left: what you'll see */}
            <div className="reveal" style={stagger(0)}>
              <p className="eyebrow" style={{ color: "var(--slate)" }}>
                QUÉ VERÁS EN LA SESIÓN
              </p>
              <h2
                className="h2"
                style={{ color: "var(--ink)", marginTop: "var(--space-3)", maxWidth: 480 }}
              >
                Un caso real, de principio a fin
              </h2>
              <p
                className="body-sm"
                style={{ color: "var(--slate)", marginTop: "var(--space-4)", maxWidth: 460 }}
              >
                Trabajamos sobre la plataforma desde el primer minuto. Sin
                presentación comercial, sin diapositivas.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-6)",
                  marginTop: "var(--space-8)",
                }}
              >
                {demoTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="reveal"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--space-3)",
                      ...stagger(i + 1),
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: 3 }}>
                      <CheckIcon />
                    </span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", lineHeight: 1.4 }}>
                        {topic.title}
                      </p>
                      <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6, marginTop: 2 }}>
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* How it works strip */}
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-6)",
                  marginTop: "var(--space-10)",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { icon: <CalendarIcon />, text: "Tú eliges fecha y hora" },
                  { icon: <MonitorIcon />, text: "Por videoconferencia" },
                  { icon: <ClockIcon />, text: "25 min, sin compromiso" },
                ].map((step) => (
                  <div
                    key={step.text}
                    className="reveal"
                    style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "var(--green-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form — reduced friction, value-oriented CTA */}
            <div id="reservar" className="reveal" style={stagger(2)}>
              <div
                className="card"
                style={{
                  padding: "var(--space-8)",
                  position: "sticky",
                  top: 96,
                  borderTop: "3px solid var(--ulpiano-green)",
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "var(--space-8) 0" }}>
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "var(--green-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto var(--space-6)",
                      }}
                    >
                      <ShieldIcon />
                    </div>
                    <h3 style={{ color: "var(--ink)", fontSize: 22 }}>
                      Sesión reservada
                    </h3>
                    <p
                      style={{
                        color: "var(--slate)",
                        fontSize: 15,
                        lineHeight: 1.6,
                        marginTop: "var(--space-3)",
                        maxWidth: 360,
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Recibirás un email en menos de 24h con los horarios
                      disponibles para elegir el que mejor te convenga.
                    </p>
                    <div
                      style={{
                        background: "var(--surface)",
                        borderRadius: 8,
                        padding: "var(--space-4)",
                        marginTop: "var(--space-6)",
                        fontSize: 14,
                        color: "var(--slate)",
                        lineHeight: 1.6,
                      }}
                    >
                      <strong style={{ color: "var(--ink)" }}>¿Mientras tanto?</strong>{" "}
                      Explora las soluciones que verás en la sesión.
                    </div>
                    <Link
                      href="/soluciones"
                      className="btn-ghost btn-ghost--dark"
                      style={{ marginTop: "var(--space-4)", display: "inline-flex" }}
                    >
                      Ver soluciones <ArrowIcon />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: "var(--space-6)" }}>
                      <h3
                        style={{
                          color: "var(--ink)",
                          fontSize: 20,
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        Reserva tu sesión personalizada
                      </h3>
                      <p style={{ color: "var(--slate)", fontSize: 14 }}>
                        3 campos — menos de 30 segundos.
                      </p>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-5)",
                      }}
                    >
                      <div>
                        <label htmlFor="name" style={labelStyle}>
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="María García López"
                          onFocus={handleFormStarted}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          Email profesional
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="maria@despacho.com"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" style={labelStyle}>
                          Despacho / Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          placeholder="Nombre del despacho"
                          style={inputStyle}
                        />
                      </div>
                      {formError && (
                        <p style={{ fontSize: 13, color: "var(--error)", lineHeight: 1.4 }}>
                          {formError}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={sending}
                        style={{
                          width: "100%",
                          marginTop: "var(--space-2)",
                          padding: "16px 32px",
                          fontSize: 16,
                        }}
                      >
                        {sending ? "Reservando..." : "Ver Ulpiano en acción →"}
                      </button>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: 12,
                            color: "var(--fog)",
                          }}
                        >
                          <LockIcon />
                          <span>Sin compromiso · No pedimos datos de pago</span>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF — Testimonial ═══ */}
      <section
        style={{
          background: "var(--night)",
          padding: "var(--space-16) 0",
        }}
      >
        <div className="container">
          <div className="demo-testimonial-grid">
            <div className="reveal" style={stagger(0)}>
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
                    fontSize: 19,
                    color: "var(--white)",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;Desde que usamos Ulpiano, la preparación de un
                  expediente sucesorio nos lleva la mitad de tiempo. Y el
                  cliente entiende lo que paga.&rdquo;
                </p>
                <footer
                  style={{
                    fontSize: 14,
                    color: "var(--fog)",
                    marginTop: "var(--space-4)",
                  }}
                >
                  — Marta R., Abogada | Despacho en Girona
                </footer>
              </blockquote>
            </div>
            <div className="reveal" style={stagger(1)}>
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
                    fontSize: 19,
                    color: "var(--white)",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;La visualización del árbol familiar y las simulaciones
                  fiscales cambiaron la forma en que presentamos las herencias a
                  nuestros clientes.&rdquo;
                </p>
                <footer
                  style={{
                    fontSize: 14,
                    color: "var(--fog)",
                    marginTop: "var(--space-4)",
                  }}
                >
                  — Jordi P., Abogado Civilista | Barcelona
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ PASA DESPUÉS — Reduce uncertainty ═══ */}
      <section style={{ background: "var(--white)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              CÓMO FUNCIONA
            </p>
            <h2
              className="h2"
              style={{ color: "var(--ink)", marginTop: "var(--space-3)" }}
            >
              De formulario a sesión en 3 pasos
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-8)",
            }}
          >
            {nextSteps.map((s, i) => (
              <div
                key={s.step}
                className="reveal"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-5)",
                  ...stagger(i),
                }}
              >
                <StepNumberIcon n={s.step} />
                <div>
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: "var(--ink)",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--slate)",
                      lineHeight: 1.6,
                      marginTop: 4,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
            <a href="#reservar" className="btn-primary">
              Reservar mi sesión
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — Objection handling ═══ */}
      <section style={{ background: "var(--surface)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="reveal" style={{ marginBottom: "var(--space-8)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              PREGUNTAS FRECUENTES
            </p>
            <h2
              className="h2"
              style={{ color: "var(--ink)", marginTop: "var(--space-3)" }}
            >
              Antes de reservar
            </h2>
          </div>
          <div className="reveal" style={stagger(1)}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALTERNATIVA ═══ */}
      <section style={{ background: "var(--white)", padding: "var(--space-10) 0" }}>
        <div
          className="container reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-6)",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)" }}>
            ¿Prefieres probar por tu cuenta primero?
          </p>
          <Link href="/precios" className="btn-ghost btn-ghost--dark">
            Empieza gratis sin tarjeta <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="cta-final" style={{ padding: "var(--space-24) 0" }}>
        <div className="cta-final__orb" />
        <div className="cta-final__content container">
          <h2
            className="h2 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 680,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Tu próximo expediente sucesorio, resuelto en la mitad de tiempo
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
            Una sesión de 25 minutos. Un caso real. Cero presentaciones
            comerciales. Tú decides si encaja en tu despacho.
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
            <a href="#reservar" className="btn-primary btn-primary--large">
              Reservar mi sesión →
            </a>
          </div>
          <p
            className="reveal"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              marginTop: "var(--space-4)",
              textAlign: "center",
              ...stagger(3),
            }}
          >
            Sin compromiso · Respondemos en menos de 24h
          </p>
        </div>
      </section>

      <style>{`
        .demo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: start;
        }
        .demo-proof-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .demo-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-10);
        }
        @media (max-width: 899px) {
          .demo-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
          .demo-proof-strip {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
          .demo-testimonial-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Shared form styles ─── */

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: "var(--ink)",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  color: "var(--ink)",
  background: "var(--surface)",
  border: "1px solid var(--mist)",
  borderRadius: 8,
  outline: "none",
  transition: "border-color 200ms ease, box-shadow 200ms ease",
};
