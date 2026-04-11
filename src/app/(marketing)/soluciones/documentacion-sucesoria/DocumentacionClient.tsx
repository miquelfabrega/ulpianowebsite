"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FileText,
  ClipboardList,
  Stamp,
  Link2,
  FolderCheck,
  MousePointerClick,
  Search,
  Download,
  Calculator,
  Receipt,
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
   ANIMATED COUNTER
   ============================================= */

function AnimatedMetric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="mono"
        style={{
          fontSize: 56,
          fontWeight: 400,
          color: "var(--green-light)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {display}
        {suffix && (
          <span style={{ fontSize: 32 }}>{suffix}</span>
        )}
      </div>
      <div
        style={{
          width: 40,
          height: 2,
          background: "rgba(255,255,255,0.15)",
          margin: "var(--space-3) auto",
        }}
      />
      <div
        style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.7)",
          maxWidth: 240,
          margin: "0 auto",
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* =============================================
   CHECK ICON
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

/* =============================================
   WORD ICON (SVG)
   ============================================= */

function WordIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#2B579A" />
      <path
        d="M7 7l2.5 10L12 11l2.5 6L17 7"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* =============================================
   TAB PANEL COMPONENT
   ============================================= */

function TabPanel({
  claim,
  checks,
  mockupLabel,
}: {
  claim: string;
  checks: string[];
  mockupLabel: string;
}) {
  return (
    <div className="tab-panel-grid">
      <div>
        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "var(--ink)",
            lineHeight: 1.4,
            marginBottom: "var(--space-6)",
          }}
        >
          &ldquo;{claim}&rdquo;
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {checks.map((check) => (
            <li
              key={check}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                fontSize: 15,
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              <span style={{ flexShrink: 0, marginTop: 3 }}>
                <CheckIcon />
              </span>
              {check}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--mist)",
          height: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--fog)",
          fontSize: 15,
          fontWeight: 500,
        }}
      >
        {mockupLabel}
      </div>
    </div>
  );
}

/* =============================================
   DATA
   ============================================= */

const comparisonRows = [
  {
    before: "Copias nombres y NIFs del inventario al cuaderno particional",
    after: "Los datos del inventario se insertan automáticamente",
  },
  {
    before: "Trasladas cifras del cálculo fiscal al documento",
    after: "Las cifras vienen del motor ISD — coherentes por diseño",
  },
  {
    before: "Consultas la norma para citar artículos",
    after: "Las referencias legales se insertan según el derecho aplicable",
  },
  {
    before: "Revisas tres veces que todo coincida entre documentos",
    after: "Un dato se introduce una vez — aparece correcto en todos",
  },
  {
    before: "Mantienes 5 versiones del cuaderno particional en tu carpeta",
    after: "Un borrador versionado que se actualiza con el expediente",
  },
  {
    before: "Adaptas cláusulas a mano según el tipo de sucesión",
    after: "Las cláusulas se seleccionan según sucesión testada, intestada o pactada",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function DocumentacionClient() {
  const [activeTab, setActiveTab] = useState(0);
  const revealRef = useReveal();

  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* SECCIÓN 1: HERO */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-20)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orb */}
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
              "radial-gradient(circle, rgba(45,106,79,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div className="doc-hero-grid" style={{ alignItems: "center" }}>
            {/* Left — Copy */}
            <div>
              <div
                className="eyebrow reveal"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "var(--space-4)",
                }}
              >
                DOCUMENTACI&Oacute;N SUCESORIA
              </div>
              <h1
                className="h1 reveal"
                style={{
                  color: "var(--white)",
                  maxWidth: 600,
                  ...stagger(1),
                }}
              >
                El cuaderno particional, generado. Con tus datos, tu expediente
                y la norma aplicada.
              </h1>
              <p
                className="body-lg reveal"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 520,
                  marginTop: "var(--space-6)",
                  ...stagger(2),
                }}
              >
                Ulpiano toma el inventario patrimonial, el escenario sucesorio y
                el c&aacute;lculo fiscal del expediente y produce el borrador
                del cuaderno particional en Word. Con los nombres correctos, las
                cifras coherentes y las referencias legales citadas.
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
                <Link href="/demo" className="btn-primary">
                  Solicita tu demo gratuita
                </Link>
                <a href="#como-funciona" className="btn-ghost">
                  Ver un ejemplo de documento generado &rarr;
                </a>
              </div>
            </div>

            {/* Right — Mockup: Cuaderno Particional */}
            <div className="reveal doc-hero-mockup-wrap" style={stagger(2)}>
              <div style={{ position: "relative" }}>
                {/* Floating badge */}
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    right: -8,
                    zIndex: 10,
                    background: "var(--green-bg)",
                    color: "#2D6A4F",
                    fontSize: 12,
                    fontWeight: 500,
                    padding: "6px 12px",
                    borderRadius: 6,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  &#10003; Generado desde expediente
                </div>

                <div className="mockup-window" style={{ marginBottom: -40 }}>
                  <div className="mockup-titlebar">
                    <div className="mockup-dot" />
                    <div className="mockup-dot" />
                    <div className="mockup-dot" />
                    <span className="mockup-title">
                      Cuaderno Particional — Exp. 2024-0847
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "var(--space-6)",
                      background: "var(--white)",
                    }}
                  >
                    {/* Document header */}
                    <div style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-dm), 'DM Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: 16,
                          color: "var(--ink)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        CUADERNO PARTICIONAL
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "var(--slate)",
                          marginTop: 4,
                        }}
                      >
                        Herencia de D. Joan Puig i Ferrer
                      </div>
                    </div>

                    {/* Section 1: Inventario */}
                    <div style={{ marginBottom: "var(--space-4)" }}>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        PRIMERO.&mdash; INVENTARIO DE BIENES
                      </div>
                      {/* Simulated text lines */}
                      <div
                        style={{
                          height: 8,
                          background: "var(--surface)",
                          borderRadius: 4,
                          marginBottom: 6,
                          width: "100%",
                        }}
                      />
                      <div
                        style={{
                          height: 8,
                          background: "var(--surface)",
                          borderRadius: 4,
                          marginBottom: "var(--space-3)",
                          width: "80%",
                        }}
                      />
                    </div>

                    {/* Simulated table */}
                    <div
                      style={{
                        border: "1px solid var(--mist)",
                        borderRadius: 6,
                        overflow: "hidden",
                        marginBottom: "var(--space-4)",
                      }}
                    >
                      {[
                        { name: "Inmueble Girona", value: "€ 425.000", status: "Adjudicat" },
                        { name: "Cta. Bancària", value: "€ 87.340", status: "Adjudicat" },
                        { name: "Fons inversió", value: "€ 156.200", status: "Adjudicat" },
                      ].map((row, i) => (
                        <div
                          key={row.name}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr auto auto",
                            gap: "var(--space-3)",
                            padding: "8px 12px",
                            fontSize: 13,
                            alignItems: "center",
                            borderTop: i > 0 ? "1px solid var(--mist)" : "none",
                            background: "var(--white)",
                          }}
                        >
                          <span style={{ color: "var(--ink)" }}>{row.name}</span>
                          <span
                            className="mono"
                            style={{
                              color: "var(--ink)",
                              fontSize: 13,
                              textAlign: "right",
                            }}
                          >
                            {row.value}
                          </span>
                          <span
                            style={{
                              background: "var(--green-bg)",
                              color: "#2D6A4F",
                              fontSize: 11,
                              fontWeight: 500,
                              padding: "2px 8px",
                              borderRadius: 4,
                            }}
                          >
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Section 2: Legítima */}
                    <div style={{ marginBottom: "var(--space-4)" }}>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        SEGON.&mdash; LEG&Iacute;TIMA
                      </div>
                      <div
                        className="mono"
                        style={{
                          fontSize: 16,
                          color: "var(--ulpiano-green)",
                          fontWeight: 500,
                        }}
                      >
                        &euro; 167.135,00
                      </div>
                    </div>

                    {/* Footer: Export */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-2)",
                        paddingTop: "var(--space-3)",
                        borderTop: "1px solid var(--mist)",
                      }}
                    >
                      <WordIcon size={16} />
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--slate)",
                        }}
                      >
                        Exportar a Word
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EL PROBLEMA */}
      <section
        style={{ background: "var(--white)", padding: "var(--space-20) 0" }}
      >
        <div
          className="container"
          style={{ maxWidth: 720, textAlign: "center" }}
        >
          <div
            className="eyebrow reveal"
            style={{
              color: "var(--slate)",
              marginBottom: "var(--space-4)",
            }}
          >
            EL PROBLEMA
          </div>
          <h2 className="h2 reveal" style={stagger(1)}>
            Copiar datos del Excel al Word no es trabajo jur&iacute;dico
          </h2>
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-8)",
              textAlign: "left",
              ...stagger(2),
            }}
          >
            <p
              className="body-lg"
              style={{ color: "var(--slate)", lineHeight: 1.7 }}
            >
              El cuaderno particional es el documento que cierra el expediente
              sucesorio. Y su redacci&oacute;n, tal como se hace hoy, es un
              ejercicio de transcripci&oacute;n: copiar nombres y DNIs del
              inventario, trasladar cifras del c&aacute;lculo fiscal, insertar
              referencias normativas consultadas por separado, y revisar tres
              veces que todo cuadre entre los documentos.
            </p>
            <p
              className="body-lg"
              style={{
                color: "var(--slate)",
                lineHeight: 1.7,
                marginTop: "var(--space-6)",
              }}
            >
              Un despacho que gestiona 50 expedientes al a&ntilde;o dedica
              cientos de horas a un trabajo que no requiere criterio
              jur&iacute;dico &mdash; requiere que los datos no se pierdan entre
              un documento y otro. Cada transcripci&oacute;n manual es una
              oportunidad para el error: un NIF mal copiado, una cifra que no
              coincide con el Modelo 660, una referencia catastral de otro
              inmueble.
            </p>
            <p
              className="body-lg"
              style={{
                color: "var(--slate)",
                lineHeight: 1.7,
                marginTop: "var(--space-6)",
              }}
            >
              El problema no es que el documento sea complejo. Es que se redacta
              desconectado de los datos que lo alimentan.
            </p>
          </div>

          {/* Visual: broken flow diagram */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              ...stagger(3),
            }}
          >
            <div className="doc-broken-flow">
              {[
                { label: "Excel", icon: "📊" },
                { label: "Word", icon: "📄" },
                { label: "Word v2", icon: "📄" },
                { label: "Word v3", icon: "📄" },
              ].map((item, i) => (
                <div key={item.label} className="doc-broken-flow__item">
                  {i > 0 && (
                    <div className="doc-broken-flow__arrow">
                      <span
                        style={{
                          fontSize: 11,
                          color: "var(--fog)",
                          fontWeight: 500,
                        }}
                      >
                        copiar
                      </span>
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        border: "1px dashed var(--mist)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--fog)",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: QUÉ PRODUCE — LOS 4 OUTPUTS */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-20) 0",
        }}
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
              RESULTADOS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Los documentos que salen del expediente
            </h2>
            <p
              className="body-lg reveal"
              style={{
                color: "var(--slate)",
                marginTop: "var(--space-4)",
                ...stagger(2),
              }}
            >
              Cada documento se genera a partir de datos ya validados en
              Ulpiano. Sin copiar. Sin transcribir. Sin rehacer tablas.
            </p>
          </div>

          <div className="doc-outputs-grid">
            {/* Card 1: Cuaderno particional */}
            <div className="card reveal" style={stagger(0)}>
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
                <FileText size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                El borrador del cuaderno particional, en Word
              </h3>
              <p
                className="body-sm"
                style={{
                  color: "var(--slate)",
                  marginBottom: "var(--space-5)",
                }}
              >
                El documento central de la herencia, generado desde los datos
                del expediente: identificaci&oacute;n de causante y herederos,
                inventario de bienes con valoraciones, c&aacute;lculo de
                leg&iacute;timas, adjudicaci&oacute;n por lotes y
                liquidaci&oacute;n fiscal por beneficiario. En formato Word
                editable, con estructura profesional y referencias legales
                citadas. Tu trabajo es revisar y ajustar, no redactar desde
                cero.
              </p>
              <div
                className="badge"
                style={{ marginBottom: "var(--space-5)" }}
              >
                Word editable &middot; Datos del expediente
              </div>
              {/* File preview block */}
              <div
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-sm)",
                  padding: "var(--space-4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                }}
              >
                <WordIcon size={20} />
                <span
                  className="mono"
                  style={{ fontSize: 13, color: "var(--slate)" }}
                >
                  cuaderno_particional_exp2024-0847.docx
                </span>
              </div>
            </div>

            {/* Card 2: Inventario formal */}
            <div className="card reveal" style={stagger(1)}>
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
                <ClipboardList size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                El inventario patrimonial como documento, no como tabla
              </h3>
              <p
                className="body-sm"
                style={{
                  color: "var(--slate)",
                  marginBottom: "var(--space-5)",
                }}
              >
                El inventario que registraste en el Planificador de Herencias se
                convierte en un documento formal: activos clasificados por
                categor&iacute;a, valoraciones a fecha de devengo, pasivos
                deducibles, y caudal relicto neto resultante. Listo para
                incorporar al expediente notarial o presentar ante la
                administraci&oacute;n.
              </p>
              <div className="badge">Formato oficial &middot; Exportable</div>
            </div>

            {/* Card 3: Escritura de partición */}
            <div className="card reveal" style={stagger(2)}>
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
                <Stamp size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                La escritura, con los datos que ya tienes
              </h3>
              <p
                className="body-sm"
                style={{
                  color: "var(--slate)",
                  marginBottom: "var(--space-5)",
                }}
              >
                Borrador de la escritura de aceptaci&oacute;n y partici&oacute;n
                de herencia con los datos de todos los intervinientes, la
                descripci&oacute;n de bienes adjudicados, las cargas asumidas y
                las referencias registrales. El sistema inserta
                autom&aacute;ticamente las cl&aacute;usulas procedentes
                seg&uacute;n el tipo de sucesi&oacute;n (testada, intestada, con
                pacto sucesorio) y el derecho aplicable.
              </p>
              <div className="badge">
                Adaptado al tipo de sucesi&oacute;n
              </div>
            </div>

            {/* Card 4: Coherencia documental */}
            <div className="card reveal" style={stagger(3)}>
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
                <Link2 size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Un dato se introduce una vez. Aparece correcto en todos los
                documentos.
              </h3>
              <p
                className="body-sm"
                style={{
                  color: "var(--slate)",
                  marginBottom: "var(--space-5)",
                }}
              >
                El NIF de un heredero, el valor de un inmueble, la cuota del
                ISD: cada dato existe una sola vez en el expediente y se propaga
                a todos los documentos generados. Si corriges una
                valoraci&oacute;n en el inventario, se actualiza en el cuaderno
                particional y en la escritura. Sin versiones contradictorias. Sin
                errores de transcripci&oacute;n.
              </p>
              <div className="badge badge--info">
                Dato &uacute;nico &middot; Propagaci&oacute;n autom&aacute;tica
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CÓMO FUNCIONA */}
      <section
        id="como-funciona"
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
              PROCESO
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Del expediente al documento, sin copiar nada
            </h2>
          </div>

          <div className="doc-steps-grid">
            {[
              {
                num: "01",
                icon: <FolderCheck size={24} />,
                title: "Completa el expediente",
                desc: "El inventario patrimonial, el escenario sucesorio y el cálculo fiscal ya están en Ulpiano. Si utilizas el Planificador de Herencias y el Motor Fiscal, los datos están listos.",
                link: "/soluciones/planificacion-sucesoria",
              },
              {
                num: "02",
                icon: <MousePointerClick size={24} />,
                title: "Selecciona el documento",
                desc: "Cuaderno particional, inventario formal, escritura de partición. Cada plantilla sabe qué datos necesita del expediente y los obtiene automáticamente.",
              },
              {
                num: "03",
                icon: <Search size={24} />,
                title: "Revisa el borrador",
                desc: "El documento se genera en Word con estructura profesional, cifras coherentes y referencias legales. Tú revisas, ajustas las cláusulas que requieran tu criterio jurídico, y validas.",
              },
              {
                num: "04",
                icon: <Download size={24} />,
                title: "Exporta y presenta",
                desc: "Descarga el documento definitivo en Word o PDF. Listo para firma, para el protocolo notarial o para la presentación ante la administración tributaria.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="reveal doc-step-item"
                style={{ position: "relative", ...stagger(i) }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -8,
                    left: 0,
                    fontFamily:
                      "var(--font-dm), 'DM Sans', sans-serif",
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
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border: "2px solid var(--ulpiano-green)",
                      background: "var(--white)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--ulpiano-green)",
                      marginBottom: "var(--space-3)",
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CATÁLOGO DE DOCUMENTOS */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-20) 0",
        }}
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
              DOCUMENTOS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Cada documento del expediente, generado desde los mismos datos
            </h2>
          </div>

          <div className="doc-catalog-grid">
            {/* Cuaderno particional */}
            <div
              className="reveal"
              style={{
                border: "1px solid var(--mist)",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-6)",
                background: "var(--white)",
                ...stagger(0),
              }}
            >
              <div
                style={{
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-3)",
                }}
              >
                <FileText size={20} />
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Cuaderno particional
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--slate)",
                  lineHeight: 1.6,
                }}
              >
                Identificaci&oacute;n de intervinientes, inventario valorado,
                leg&iacute;timas, formaci&oacute;n de lotes,
                adjudicaci&oacute;n y liquidaci&oacute;n fiscal.
              </p>
              <div
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--slate)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                DOCUMENTO CENTRAL
              </div>
            </div>

            {/* Inventario formal */}
            <div
              className="reveal"
              style={{
                border: "1px solid var(--mist)",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-6)",
                background: "var(--white)",
                ...stagger(1),
              }}
            >
              <div
                style={{
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-3)",
                }}
              >
                <ClipboardList size={20} />
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Inventario formal de bienes
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--slate)",
                  lineHeight: 1.6,
                }}
              >
                Activos clasificados, valoraciones a fecha de devengo, pasivos
                deducibles, caudal relicto neto. Apto para acta notarial.
              </p>
              <div
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--slate)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                INVENTARIO
              </div>
            </div>

            {/* Escritura de partición */}
            <div
              className="reveal"
              style={{
                border: "1px solid var(--mist)",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-6)",
                background: "var(--white)",
                ...stagger(2),
              }}
            >
              <div
                style={{
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-3)",
                }}
              >
                <Stamp size={20} />
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Escritura de partici&oacute;n
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--slate)",
                  lineHeight: 1.6,
                }}
              >
                Otorgantes, bienes adjudicados, cargas, referencias registrales.
                Cl&aacute;usulas seg&uacute;n tipo de sucesi&oacute;n.
              </p>
              <div
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--slate)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                ESCRITURA
              </div>
            </div>

            {/* Modelo 660 */}
            <div
              className="reveal"
              style={{
                border: "1px solid var(--mist)",
                borderLeft: "3px solid var(--ulpiano-green)",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-6)",
                background: "var(--white)",
                position: "relative",
                overflow: "hidden",
                ...stagger(3),
              }}
            >
              <div
                className="mono"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -4,
                  right: 16,
                  fontSize: 28,
                  color: "var(--mist)",
                  lineHeight: 1,
                }}
              >
                660
              </div>
              <div
                style={{
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-3)",
                }}
              >
                <Calculator size={20} />
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Modelo 660
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--slate)",
                  lineHeight: 1.6,
                }}
              >
                Inventario de bienes y derechos en formato oficial. Generado
                desde el expediente.
              </p>
              <div
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--slate)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                MODELO FISCAL
              </div>
            </div>

            {/* Modelo 650 */}
            <div
              className="reveal"
              style={{
                border: "1px solid var(--mist)",
                borderLeft: "3px solid var(--ulpiano-green)",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-6)",
                background: "var(--white)",
                position: "relative",
                overflow: "hidden",
                ...stagger(4),
              }}
            >
              <div
                className="mono"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -4,
                  right: 16,
                  fontSize: 28,
                  color: "var(--mist)",
                  lineHeight: 1,
                }}
              >
                650
              </div>
              <div
                style={{
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-3)",
                }}
              >
                <Receipt size={20} />
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Modelo 650
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--slate)",
                  lineHeight: 1.6,
                }}
              >
                Autoliquidaci&oacute;n individual por heredero. Base,
                reducciones, tarifa, bonificaci&oacute;n, cuota a ingresar.
              </p>
              <div
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--slate)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                MODELO FISCAL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: PARA QUIÉN */}
      <section
        style={{ background: "var(--white)", padding: "var(--space-20) 0" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--space-10)",
            }}
          >
            <div
              className="eyebrow reveal"
              style={{
                color: "var(--slate)",
                marginBottom: "var(--space-4)",
              }}
            >
              SEGMENTOS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Documentos profesionales para quien los necesita profesionales
            </h2>
          </div>

          {/* Tabs */}
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-3)",
              justifyContent: "center",
              marginBottom: "var(--space-10)",
              flexWrap: "wrap",
              ...stagger(2),
            }}
          >
            {[
              "Despachos de abogados",
              "Asesorías fiscales",
              "Notarías",
            ].map((label, i) => (
              <button
                key={label}
                className={`tab-btn ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
                role="tab"
                aria-selected={activeTab === i}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div className="reveal" style={stagger(3)}>
            {activeTab === 0 && (
              <TabPanel
                claim="El cuaderno particional que os costó tres días, listo en 20 minutos."
                checks={[
                  "El borrador se genera con los datos del expediente — tú revisas y ajustas",
                  "Cada cifra del documento tiene trazabilidad al cálculo original",
                  "Formato Word editable con estructura profesional estándar",
                ]}
                mockupLabel="Vista del Cuaderno Particional"
              />
            )}
            {activeTab === 1 && (
              <TabPanel
                claim="El Modelo 650 de tu cliente, coherente con el inventario y el cálculo. Sin transcribir nada."
                checks={[
                  "Modelos 650 y 660 generados automáticamente desde el expediente",
                  "Datos fiscales trazables: base imponible, reducciones, bonificaciones",
                  "Actualización automática si cambia el reparto o la normativa",
                ]}
                mockupLabel="Vista del Modelo 650"
              />
            )}
            {activeTab === 2 && (
              <TabPanel
                claim="La escritura de partición con los datos ya verificados. Lista para el protocolo."
                checks={[
                  "Borrador de escritura con datos de otorgantes, bienes y referencias registrales",
                  "Cláusulas adaptadas al tipo de sucesión y al derecho aplicable",
                  "Integración con el inventario y el árbol familiar del expediente",
                ]}
                mockupLabel="Vista de la Escritura"
              />
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: COMPARATIVA */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-20) 0",
        }}
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
              DIFERENCIADORES
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Lo que cambia cuando el documento se genera desde el expediente
            </h2>
          </div>

          {/* Desktop table */}
          <div
            className="reveal doc-comparison-desktop"
            style={stagger(2)}
          >
            <table className="comparison-table" style={{ maxWidth: 900, margin: "0 auto" }}>
              <thead>
                <tr>
                  <th style={{ background: "var(--surface)", color: "var(--slate)" }}>
                    Redacci&oacute;n manual
                  </th>
                  <th
                    style={{
                      background: "rgba(45, 106, 79, 0.08)",
                      color: "var(--ulpiano-green)",
                    }}
                  >
                    Con Ulpiano
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ color: "var(--slate)" }}>{row.before}</td>
                    <td style={{ color: "var(--ink)", fontWeight: 500 }}>
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="doc-comparison-mobile">
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="card reveal"
                style={{
                  marginBottom: "var(--space-4)",
                  ...stagger(i),
                }}
              >
                <div style={{ marginBottom: "var(--space-3)" }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--slate)",
                    }}
                  >
                    Hoy:
                  </span>
                  <p
                    className="body-sm"
                    style={{ color: "var(--slate)", marginTop: 4 }}
                  >
                    {row.before}
                  </p>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--ulpiano-green)",
                    }}
                  >
                    Con Ulpiano:
                  </span>
                  <p
                    className="body-sm"
                    style={{
                      color: "var(--ink)",
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {row.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: MÉTRICAS + TESTIMONIO */}
      <section
        style={{
          background: "var(--night)",
          padding: "var(--space-24) 0",
        }}
      >
        <div className="container">
          <div className="doc-metrics-grid">
            <AnimatedMetric
              value={20}
              suffix=" min"
              label="Tiempo medio de generación del cuaderno particional"
            />
            <AnimatedMetric
              value={0}
              suffix=""
              label="Errores de transcripción entre expediente y documento"
            />
            <AnimatedMetric
              value={100}
              suffix="%"
              label="Coherencia entre inventario, cálculo fiscal y documentación"
            />
          </div>

          {/* Testimonial */}
          <div
            className="reveal"
            style={{
              maxWidth: 720,
              margin: "var(--space-16) auto 0",
              paddingLeft: "var(--space-6)",
              borderLeft: "3px solid var(--ulpiano-green)",
            }}
          >
            <blockquote
              style={{
                fontFamily:
                  "var(--font-inter), 'Inter', sans-serif",
                fontStyle: "italic",
                fontSize: 22,
                lineHeight: 1.5,
                color: "var(--white)",
                margin: 0,
              }}
              className="doc-testimonial-quote"
            >
              &ldquo;Antes dedic&aacute;bamos dos o tres d&iacute;as a redactar
              el cuaderno particional de un expediente complejo. Ahora el
              borrador sale en minutos y nuestro trabajo es el que debe ser:
              revisar, ajustar y validar con criterio jur&iacute;dico.&rdquo;
            </blockquote>
            <p
              style={{
                marginTop: "var(--space-4)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--fog)",
              }}
            >
              &mdash; Abogado, despacho de derecho sucesorio, Barcelona
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 9: CTA FINAL */}
      <section
        id="solicita-demo"
        style={{
          background:
            "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="h2 reveal doc-cta-h2"
          >
            Tu criterio jur&iacute;dico es el centro. Ulpiano se encarga de que
            los datos lleguen correctos al documento.
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
            Solicita una demo y comprueba c&oacute;mo Ulpiano genera el cuaderno
            particional, los modelos fiscales y la escritura de partici&oacute;n
            a partir de los datos del expediente.
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
              Solicita tu demo gratuita
            </Link>
            <a href="#" className="btn-ghost">
              Crea tu cuenta gratuita &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style>{`
        .doc-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }
        .doc-outputs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .doc-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }
        .doc-step-item:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 36px;
          right: calc(-1 * var(--space-4));
          width: calc(var(--space-8));
          border-top: 2px dashed var(--mist);
        }
        .doc-catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .doc-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .doc-comparison-mobile {
          display: none;
        }
        .doc-testimonial-quote {
          font-size: 22px;
        }
        .doc-broken-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }
        .doc-broken-flow__item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        .doc-broken-flow__arrow {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          padding: 0 var(--space-2);
          border-top: 2px dashed var(--mist);
          width: 60px;
          justify-content: center;
          position: relative;
        }
        .doc-broken-flow__arrow span {
          position: absolute;
          top: -18px;
        }
        .tab-panel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-10);
          align-items: center;
        }
        .doc-cta-h2 {
          color: var(--white);
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .doc-hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
          .doc-hero-mockup-wrap {
            max-width: 540px;
            margin: 0 auto;
          }
          .doc-outputs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .doc-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }
          .doc-step-item::after {
            display: none !important;
          }
          .doc-catalog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .doc-hero-grid {
            grid-template-columns: 1fr;
          }
          .doc-outputs-grid {
            grid-template-columns: 1fr;
          }
          .doc-steps-grid {
            grid-template-columns: 1fr;
          }
          .doc-catalog-grid {
            grid-template-columns: 1fr;
          }
          .doc-metrics-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
          .doc-comparison-desktop {
            display: none;
          }
          .doc-comparison-mobile {
            display: block;
          }
          .doc-testimonial-quote {
            font-size: 18px !important;
          }
          .doc-cta-h2 {
            font-size: 28px;
          }
          .tab-panel-grid {
            grid-template-columns: 1fr;
          }
          .doc-broken-flow {
            flex-direction: column;
          }
          .doc-broken-flow__arrow {
            width: 2px;
            height: 30px;
            border-top: none;
            border-left: 2px dashed var(--mist);
          }
          .doc-broken-flow__arrow span {
            top: auto;
            left: 12px;
          }
        }
      `}</style>
    </div>
  );
}
