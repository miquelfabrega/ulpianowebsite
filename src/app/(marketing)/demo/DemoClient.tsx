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

/* ─── Data ─── */

const demoTopics = [
  "Cómo se inventaría un patrimonio completo — inmuebles, financieros, participaciones — en un panel estructurado",
  "Cómo se calcula automáticamente la cuota del ISD de cada heredero con la Llei 19/2010 citada",
  "Cómo se genera el cuaderno particional en Word a partir de los datos del expediente",
  "Cómo se comparan escenarios fiscales en paralelo — herencia directa vs. donación vs. usufructo",
];

const stats = [
  { number: "25", unit: "min", label: "Duración de la sesión" },
  { number: "35%", unit: "", label: "Reducción media en tiempo por expediente" },
  { number: "100%", unit: "", label: "Normativa catalana integrada" },
];

/* ─── Main ─── */

export function DemoClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
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
            background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="eyebrow reveal"
            style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}
          >
            SOLICITA TU DEMO
          </p>
          <h1
            className="h1 reveal"
            style={{ color: "var(--white)", maxWidth: 780, margin: "0 auto", ...stagger(1) }}
          >
            25 minutos sobre el producto real. Sin presentación comercial.
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
            Verás cómo se inventaría un patrimonio, cómo se calcula el ISD con
            la norma citada, y cómo se genera el cuaderno particional. Con datos
            reales de un caso del sector.
          </p>

          {/* Metrics strip */}
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-8)",
              justifyContent: "center",
              marginTop: "var(--space-10)",
              flexWrap: "wrap",
              ...stagger(3),
            }}
          >
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 32,
                    color: "var(--green-light)",
                    lineHeight: 1,
                  }}
                >
                  {s.number}
                  {s.unit && (
                    <span style={{ fontSize: 18, marginLeft: 2 }}>{s.unit}</span>
                  )}
                </span>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.6)",
                    marginTop: "var(--space-2)",
                    maxWidth: 140,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM + CONTENT GRID ═══ */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="demo-grid">
            {/* Left: what you'll see */}
            <div className="reveal" style={stagger(0)}>
              <p className="eyebrow" style={{ color: "var(--slate)" }}>
                QUÉ VERÁS EN LA DEMO
              </p>
              <h2
                className="h2"
                style={{ color: "var(--ink)", marginTop: "var(--space-3)", maxWidth: 480 }}
              >
                Directamente sobre el producto con un caso real
              </h2>
              <p
                className="body-sm"
                style={{ color: "var(--slate)", marginTop: "var(--space-4)", maxWidth: 460 }}
              >
                No hay diapositivas. Desde el primer minuto, trabajamos sobre la
                plataforma con un expediente real del sector sucesorio catalán.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-5)",
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
                    <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.6 }}>
                      {topic}
                    </p>
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
                  { icon: <CalendarIcon />, text: "Elige fecha y hora" },
                  { icon: <MonitorIcon />, text: "Sesión por videoconferencia" },
                  { icon: <ClockIcon />, text: "25 minutos, sin compromiso" },
                ].map((step) => (
                  <div
                    key={step.text}
                    className="reveal"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                    }}
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

            {/* Right: form */}
            <div className="reveal" style={stagger(2)}>
              <div
                className="card"
                style={{ padding: "var(--space-8)", position: "sticky", top: 96 }}
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
                      Solicitud recibida
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
                      Te contactaremos en menos de 24 horas para confirmar la
                      fecha y hora de tu sesión.
                    </p>
                    <Link
                      href="/"
                      className="btn-ghost btn-ghost--dark"
                      style={{ marginTop: "var(--space-6)", display: "inline-flex" }}
                    >
                      Volver al inicio <ArrowIcon />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 style={{ color: "var(--ink)", fontSize: 20, marginBottom: "var(--space-2)" }}>
                      Reserva tu sesión
                    </h3>
                    <p style={{ color: "var(--slate)", fontSize: 14, marginBottom: "var(--space-6)" }}>
                      Completa el formulario y te enviaremos el enlace para
                      agendar la sesión.
                    </p>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                      <div>
                        <label htmlFor="name" style={labelStyle}>
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="María García López"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          Email profesional *
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
                          Despacho / Empresa *
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
                      <div>
                        <label htmlFor="role" style={labelStyle}>
                          Cargo
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          placeholder="Abogada civilista, socia..."
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="volume" style={labelStyle}>
                          Expedientes sucesorios al año
                        </label>
                        <select id="volume" name="volume" style={inputStyle}>
                          <option value="">Selecciona un rango</option>
                          <option value="1-10">1 – 10</option>
                          <option value="11-30">11 – 30</option>
                          <option value="31-60">31 – 60</option>
                          <option value="61-100">61 – 100</option>
                          <option value="100+">Más de 100</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={sending}
                        style={{ width: "100%", marginTop: "var(--space-2)" }}
                      >
                        {sending ? "Enviando..." : "Solicitar Demo"}
                      </button>
                      <p
                        style={{
                          fontSize: 12,
                          color: "var(--fog)",
                          textAlign: "center",
                          lineHeight: 1.5,
                        }}
                      >
                        Sin compromiso. Te responderemos en menos de 24h.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ALTERNATIVA ═══ */}
      <section style={{ background: "var(--surface)", padding: "var(--space-12) 0" }}>
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
            ¿Prefieres probar tú primero?
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
              maxWidth: 640,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Tu próximo expediente, resuelto en la mitad de tiempo
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
            25 minutos de sesión. Un caso real del sector sucesorio.
            Sin presentación comercial.
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
            <a href="#top" className="btn-primary">
              Reserva tu Demo
            </a>
            <Link href="/contacto" className="btn-ghost">
              Contactar <ArrowIcon />
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
            ulpiano.es – El sistema operativo de las herencias
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
        @media (max-width: 899px) {
          .demo-grid {
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
