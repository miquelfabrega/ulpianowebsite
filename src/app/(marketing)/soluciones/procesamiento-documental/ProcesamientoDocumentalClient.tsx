"use client";

import { useEffect, useRef } from "react";

/* =============================================
   SVG ICONS (inline, no raster images)
   ============================================= */

function ScanIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4 4 4 0 0 0 3 3.87V17a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2.13A4 4 0 0 0 20 11a4 4 0 0 0-4-4V6a4 4 0 0 0-4-4z" />
      <path d="M12 2v20" />
      <path d="M8 7h0" />
      <path d="M16 7h0" />
      <path d="M6 11h0" />
      <path d="M18 11h0" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CheckSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

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
   MAIN COMPONENT
   ============================================= */

export function ProcesamientoDocumentalClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* ——————————————— SECCIÓN 1: HERO ——————————————— */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-20)",
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
            background: "radial-gradient(circle, rgba(45,106,79,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div className="pd-hero-grid" style={{ alignItems: "center" }}>
            {/* Left — Copy */}
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}
              >
                PROCESAMIENTO INTELIGENTE DE DOCUMENTOS
              </div>
              <h1
                className="h1 reveal"
                style={{ color: "var(--white)", maxWidth: 580, ...stagger(1) }}
              >
                Digitaliza y Simplifica la Gesti&oacute;n de Documentos Sucesorios
              </h1>
              <p
                className="body-lg reveal"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 500,
                  marginTop: "var(--space-6)",
                  ...stagger(2),
                }}
              >
                Agiliza el proceso de herencia con tecnolog&iacute;a de Inteligencia Artificial que
                extrae y organiza la informaci&oacute;n clave de cada documento, ahorrando tiempo y
                minimizando errores.
              </p>
              <div
                className="reveal"
                style={{
                  display: "flex",
                  gap: "var(--space-4)",
                  marginTop: "var(--space-8)",
                  flexWrap: "wrap",
                  ...stagger(3),
                }}
              >
                <a href="#solicita-demo" className="btn-primary">
                  Comienza Ahora
                </a>
                <a href="#como-funciona" className="btn-ghost">
                  Solicita una Demo &rarr;
                </a>
              </div>
            </div>

            {/* Right — Mockup */}
            <div className="reveal pd-hero-mockup-wrap" style={{ ...stagger(2) }}>
              <div className="mockup-window" style={{ marginBottom: -40 }}>
                <div className="mockup-titlebar">
                  <div className="mockup-dot" />
                  <div className="mockup-dot" />
                  <div className="mockup-dot" />
                  <span className="mockup-title">Procesamiento Documental</span>
                </div>
                <div style={{ padding: "var(--space-4)" }}>
                  {/* Upload area */}
                  <div
                    style={{
                      border: "2px dashed var(--mist)",
                      borderRadius: "var(--radius-sm)",
                      padding: "var(--space-6)",
                      textAlign: "center",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    <div style={{ color: "var(--fog)", marginBottom: "var(--space-2)" }}>
                      <UploadIcon />
                    </div>
                    <div style={{ fontSize: 13, color: "var(--slate)" }}>
                      Arrastra documentos aqu&iacute;
                    </div>
                    <div style={{ fontSize: 11, color: "var(--fog)", marginTop: 4 }}>
                      PDF, escaneados, im&aacute;genes
                    </div>
                  </div>
                  {/* Document list */}
                  {[
                    { name: "Certificado de Defunción", status: "Procesado", statusColor: "green" },
                    { name: "Testamento Original", status: "Procesado", statusColor: "green" },
                    { name: "DNI del Causante", status: "Procesado", statusColor: "green" },
                    { name: "Escritura de Propiedad", status: "Analizando…", statusColor: "amber" },
                    { name: "Póliza de Seguro", status: "En cola", statusColor: "blue" },
                  ].map((doc) => (
                    <div
                      key={doc.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 12px",
                        fontSize: 13,
                        borderBottom: "1px solid rgba(203,213,225,0.4)",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink)" }}>
                        <FileTextIcon />
                        {doc.name}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: 6,
                          background:
                            doc.statusColor === "green"
                              ? "var(--green-bg)"
                              : doc.statusColor === "amber"
                                ? "var(--warning-bg)"
                                : "var(--info-bg)",
                          color:
                            doc.statusColor === "green"
                              ? "var(--ulpiano-green)"
                              : doc.statusColor === "amber"
                                ? "var(--warning)"
                                : "var(--info)",
                        }}
                      >
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 2: EL PROBLEMA / INTRODUCCIÓN ——————————————— */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            EL RETO
          </div>
          <h2 className="h2 reveal" style={stagger(1)}>
            Elimina la Complejidad en la Tramitaci&oacute;n de Herencias
          </h2>
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-8)",
              textAlign: "left",
              ...stagger(2),
            }}
          >
            <p className="body-lg" style={{ color: "var(--slate)", lineHeight: 1.7 }}>
              En el proceso de herencia se requieren m&uacute;ltiples documentos: certificados de
              defunci&oacute;n, testamentos, escrituras, certificados de nacimiento, DNI de
              beneficiarios, t&iacute;tulos de propiedad y m&aacute;s. Con nuestro Procesamiento
              Inteligente de Documentos:
            </p>
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "var(--space-8)",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "var(--space-4)",
              textAlign: "left",
              ...stagger(3),
            }}
          >
            {[
              "Digitaliza y clasifica automáticamente cada archivo.",
              "Extrae información clave (cargos, títulos sucesorios, datos del causante, etc.).",
              "Evita errores humanos y reduce los plazos de gestión.",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-3)",
                  fontSize: 16,
                  color: "var(--ink)",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ flexShrink: 0, marginTop: 3 }}>
                  <CheckSmallIcon />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 3: CÓMO FUNCIONA ——————————————— */}
      <section
        id="como-funciona"
        style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              PROCESO
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              C&oacute;mo Funciona
            </h2>
          </div>

          <div className="pd-steps-grid">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal pd-step-item"
                style={{ position: "relative", ...stagger(i) }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -8,
                    left: 0,
                    fontFamily: "var(--font-dm), 'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 72,
                    color: "var(--mist)",
                    opacity: 0.5,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {step.num}
                </div>
                <div style={{ position: "relative", paddingTop: 56 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "var(--green-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--ulpiano-green)",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="body-sm" style={{ color: "var(--slate)" }}>
                    {step.desc}
                  </p>
                  {step.details && (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "var(--space-3)" }}>
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--space-2)",
                            fontSize: 13,
                            color: "var(--slate)",
                            lineHeight: 1.5,
                            marginBottom: "var(--space-2)",
                          }}
                        >
                          <span style={{ flexShrink: 0, marginTop: 2 }}>
                            <CheckSmallIcon />
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 4: QUÉ EXTRAE LA IA — MOCKUP ——————————————— */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              RECONOCIMIENTO INTELIGENTE
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              La IA detecta autom&aacute;ticamente campos clave
            </h2>
            <p
              className="body-lg reveal"
              style={{ color: "var(--slate)", marginTop: "var(--space-4)", maxWidth: 600, margin: "var(--space-4) auto 0", ...stagger(2) }}
            >
              Nuestra tecnolog&iacute;a de OCR e Inteligencia Artificial identifica y estructura la
              informaci&oacute;n relevante de cada documento.
            </p>
          </div>

          <div className="pd-extraction-grid">
            {extractionCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="card reveal"
                style={stagger(i)}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--green-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ulpiano-green)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                  {cat.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cat.fields.map((field) => (
                    <li
                      key={field}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "var(--space-2)",
                        fontSize: 14,
                        color: "var(--slate)",
                        lineHeight: 1.6,
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      <span style={{ flexShrink: 0, marginTop: 3 }}>
                        <CheckSmallIcon />
                      </span>
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 5: BENEFICIOS CLAVE ——————————————— */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              BENEFICIOS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Beneficios Clave
            </h2>
          </div>

          <div className="pd-benefits-grid">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="card reveal"
                style={stagger(i)}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
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
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                  {benefit.title}
                </h3>
                <p className="body-sm" style={{ color: "var(--slate)" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 6: TIPOS DE DOCUMENTOS ——————————————— */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              COBERTURA DOCUMENTAL
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Documentos que procesamos
            </h2>
            <p
              className="body-lg reveal"
              style={{ color: "var(--slate)", marginTop: "var(--space-4)", maxWidth: 600, margin: "var(--space-4) auto 0", ...stagger(2) }}
            >
              El sistema acepta formatos m&uacute;ltiples y asegura la confidencialidad con cifrado avanzado.
            </p>
          </div>

          <div className="pd-docs-grid reveal" style={stagger(3)}>
            {documentTypes.map((doc) => (
              <div
                key={doc}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  padding: "var(--space-4) var(--space-5)",
                  border: "1px solid var(--mist)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--white)",
                  fontSize: 15,
                  color: "var(--ink)",
                  fontWeight: 500,
                  transition: "box-shadow 300ms ease, transform 300ms ease",
                }}
                className="pd-doc-chip"
              >
                <span style={{ color: "var(--ulpiano-green)" }}>
                  <FileTextIcon />
                </span>
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 7: INTEGRACIÓN Y VALIDACIÓN ——————————————— */}
      <section style={{ background: "var(--night)", padding: "var(--space-24) 0" }}>
        <div className="container">
          <div
            className="pd-integration-grid"
            style={{ alignItems: "center" }}
          >
            <div>
              <div className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}>
                INTEGRACI&Oacute;N
              </div>
              <h2 className="h2 reveal" style={{ color: "var(--white)", ...stagger(1) }}>
                Toda la informaci&oacute;n, integrada y validada
              </h2>
              <p
                className="body-lg reveal"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  marginTop: "var(--space-6)",
                  maxWidth: 500,
                  ...stagger(2),
                }}
              >
                Los datos extra&iacute;dos se integran autom&aacute;ticamente en la planificaci&oacute;n
                sucesoria y en el expediente digital de la herencia. Los despachos de abogados,
                notar&iacute;as o asesores pueden validar y editar los datos antes de continuar con la
                tramitaci&oacute;n.
              </p>
              <ul
                className="reveal"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  marginTop: "var(--space-6)",
                  ...stagger(3),
                }}
              >
                {[
                  "Integración automática con el expediente digital",
                  "Validación y edición por profesionales antes de continuar",
                  "Trazabilidad completa de cada dato extraído",
                  "Sin copiar datos entre herramientas",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--space-3)",
                      marginBottom: "var(--space-4)",
                      fontSize: 15,
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: 3 }}>
                      <CheckSmallIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Flow visual */}
            <div className="reveal" style={stagger(2)}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "var(--space-8)",
                }}
              >
                {[
                  { label: "Documentos subidos", value: "12 archivos", color: "var(--info)" },
                  { label: "Datos extraídos", value: "87 campos", color: "var(--ulpiano-green)" },
                  { label: "Validados por profesional", value: "100%", color: "var(--green-light)" },
                  { label: "Integrados al expediente", value: "Automático", color: "var(--ulpiano-green)" },
                ].map((metric, i) => (
                  <div
                    key={metric.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "var(--space-4) 0",
                      borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                      {metric.label}
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: 16, fontWeight: 600, color: metric.color }}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 8: CTA FINAL ——————————————— */}
      <section
        id="solicita-demo"
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="h2 reveal"
            style={{
              color: "var(--white)",
              fontSize: 36,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Optimiza la Gesti&oacute;n Documental de Tu Herencia con un Solo Clic
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
            Empieza hoy a digitalizar tus documentos y agiliza la tramitaci&oacute;n sucesoria de
            principio a fin.
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
            <a href="#solicita-demo" className="btn-primary">
              Crear Cuenta Gratis
            </a>
            <a href="/demo" className="btn-ghost">
              Reserva una Demo &rarr;
            </a>
          </div>
          <p
            className="reveal"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
              marginTop: "var(--space-8)",
              fontStyle: "italic",
              ...stagger(3),
            }}
          >
            &ldquo;Procesamiento Inteligente de Documentos: la clave para una herencia &aacute;gil y
            sin complicaciones.&rdquo;
          </p>
        </div>
      </section>

      {/* ——————————————— RESPONSIVE STYLES ——————————————— */}
      <style>{`
        .pd-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
        }
        .pd-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }
        .pd-step-item:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 36px;
          right: calc(-1 * var(--space-4));
          width: calc(var(--space-8));
          border-top: 2px dashed var(--mist);
        }
        .pd-extraction-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .pd-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .pd-docs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
        }
        .pd-doc-chip:hover {
          box-shadow: 0 4px 8px rgba(15,31,61,0.06), 0 12px 28px rgba(15,31,61,0.10);
          transform: translateY(-2px);
        }
        .pd-integration-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
        }

        @media (max-width: 1024px) {
          .pd-hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
          .pd-hero-mockup-wrap {
            max-width: 540px;
            margin: 0 auto;
          }
          .pd-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }
          .pd-step-item::after {
            display: none !important;
          }
          .pd-extraction-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pd-integration-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
        }

        @media (max-width: 768px) {
          .pd-hero-grid {
            grid-template-columns: 1fr;
          }
          .pd-steps-grid {
            grid-template-columns: 1fr;
          }
          .pd-extraction-grid {
            grid-template-columns: 1fr;
          }
          .pd-benefits-grid {
            grid-template-columns: 1fr;
          }
          .pd-docs-grid {
            grid-template-columns: 1fr;
          }
          .pd-integration-grid {
            grid-template-columns: 1fr;
          }
          section#solicita-demo .h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}

/* =============================================
   DATA
   ============================================= */

const steps = [
  {
    num: "01",
    icon: <UploadIcon />,
    title: "Carga de Documentos",
    desc: "Sube archivos escaneados o en PDF. El sistema acepta formatos múltiples y asegura la confidencialidad con cifrado avanzado.",
    details: [
      "Certificado de Defunción",
      "Testamento Original",
      "DNI del Causante y Beneficiarios",
      "Escrituras y Títulos de Propiedad",
    ],
  },
  {
    num: "02",
    icon: <BrainIcon />,
    title: "Reconocimiento Óptico e IA",
    desc: "Nuestra tecnología de OCR e Inteligencia Artificial detecta automáticamente campos clave de cada documento.",
    details: [
      "Datos personales (nombre, DNI, fecha de nacimiento)",
      "Información legal (títulos sucesorios, escrituras)",
      "Detalles financieros (saldos, pólizas de seguro)",
    ],
  },
  {
    num: "03",
    icon: <TagIcon />,
    title: "Clasificación y Extracción",
    desc: "Los documentos se etiquetan y clasifican según su tipo. El sistema identifica y extrae la información relevante para su uso en la plataforma.",
    details: null,
  },
  {
    num: "04",
    icon: <CheckCircleIcon />,
    title: "Integración y Validación",
    desc: "Toda la información extraída se integra automáticamente en la planificación sucesoria y en el expediente digital de la herencia.",
    details: null,
  },
];

const extractionCategories = [
  {
    icon: <ScanIcon />,
    title: "Datos Personales",
    fields: [
      "Nombre completo del causante y beneficiarios",
      "DNI / NIF / NIE",
      "Fecha y lugar de nacimiento",
      "Estado civil y domicilio",
    ],
  },
  {
    icon: <TagIcon />,
    title: "Información Legal",
    fields: [
      "Títulos sucesorios",
      "Referencias de escrituras",
      "Referencias catastrales",
      "Disposiciones testamentarias",
    ],
  },
  {
    icon: <BrainIcon />,
    title: "Detalles Financieros",
    fields: [
      "Saldos bancarios a fecha de devengo",
      "Pólizas de seguro y coberturas",
      "Valoraciones de inmuebles",
      "Deudas y cargas hipotecarias",
    ],
  },
];

const benefits = [
  {
    icon: <ClockIcon />,
    title: "Ahorro de Tiempo y Costes",
    desc: "Automatiza la revisión de decenas de documentos, reduciendo el trabajo manual y las posibles demoras. Lo que antes tomaba horas de transcripción, ahora se procesa en minutos.",
  },
  {
    icon: <ShieldIcon />,
    title: "Menos Errores, Mayor Fiabilidad",
    desc: "El sistema de IA minimiza los errores en la transcripción de datos, garantizando mayor exactitud en el proceso sucesorio. Cada dato es verificable y trazable.",
  },
  {
    icon: <ZapIcon />,
    title: "Flujo de Trabajo Optimizado",
    desc: "Integra los datos extraídos en un solo entorno digital, facilitando la colaboración entre abogados, notarios y demás profesionales involucrados en la herencia.",
  },
  {
    icon: <UsersIcon />,
    title: "Cumplimiento Legal y Seguridad",
    desc: "Mantenemos altos estándares de cifrado y protocolos de privacidad para cumplir con la normativa vigente (RGPD, LOPDGDD, etc.). Tus documentos están siempre protegidos.",
  },
];

const documentTypes = [
  "Certificado de Defunción",
  "Testamento Original",
  "DNI del Causante",
  "DNI de Beneficiarios",
  "Escrituras de Propiedad",
  "Certificado de Nacimiento",
  "Títulos de Propiedad",
  "Certificado de Últimas Voluntades",
  "Pólizas de Seguro",
  "Certificados Bancarios",
  "Notas Simples del Registro",
  "Certificado de Matrimonio",
];
