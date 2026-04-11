"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Brain,
  Scale,
  RefreshCw,
  Headset,
  ClipboardList,
  SlidersHorizontal,
  FileCheck,
  Receipt,
  AlertTriangle,
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
        {suffix && <span style={{ fontSize: 32 }}>{suffix}</span>}
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
    <div className="fisc-tab-panel-grid">
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
    before: "Calculas bases imponibles a mano con normativa dispersa",
    after: "El motor fiscal aplica la normativa estatal y autonómica automáticamente",
  },
  {
    before: "Revisas bonificaciones y reducciones en cada expediente",
    after: "El sistema identifica y aplica todas las ventajas fiscales procedentes",
  },
  {
    before: "Rellenas modelos 650, 660 y 651 en formularios PDF",
    after: "Los modelos se autocompletan desde los datos del expediente",
  },
  {
    before: "Recalculas si cambia el reparto o la valoración",
    after: "Los cálculos se actualizan en tiempo real con cada modificación",
  },
  {
    before: "Consultas la normativa autonómica para cada Comunidad",
    after: "La plataforma se adapta a la CA del causante automáticamente",
  },
  {
    before: "Un error de transcripción puede derivar en sanción",
    after: "Dato único propagado a todos los modelos — sin errores de transcripción",
  },
];

const models = [
  {
    number: "650",
    title: "Autoliquidaci\u00f3n de sucesiones",
    desc: "Cuota individual por heredero: base imponible, reducciones, tarifa, bonificaciones y cuota a ingresar.",
    tag: "SUCESIONES",
  },
  {
    number: "651",
    title: "Autoliquidaci\u00f3n de donaciones",
    desc: "Liquidaci\u00f3n del Impuesto sobre Donaciones inter vivos, con base, reducciones y cuota por donatario.",
    tag: "DONACIONES",
  },
  {
    number: "652",
    title: "Autoliquidaci\u00f3n de seguros de vida",
    desc: "Tributaci\u00f3n de percepciones por seguros de vida vinculados al hecho sucesorio.",
    tag: "SEGUROS",
  },
  {
    number: "653",
    title: "Autoliquidaci\u00f3n de consolidaciones de dominio",
    desc: "Liquidaci\u00f3n complementaria cuando se consolida la plena propiedad (extinci\u00f3n de usufructo).",
    tag: "CONSOLIDACI\u00d3N",
  },
  {
    number: "660",
    title: "Declaraci\u00f3n de sucesiones",
    desc: "Inventario oficial de bienes, derechos y herederos del causante ante la administraci\u00f3n tributaria.",
    tag: "DECLARACI\u00d3N",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function FiscalidadClient() {
  const [activeTab, setActiveTab] = useState(0);
  const revealRef = useReveal();

  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* SECCI\u00d3N 1: HERO */}
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
            background:
              "radial-gradient(circle, rgba(45,106,79,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div className="fisc-hero-grid" style={{ alignItems: "center" }}>
            {/* Left — Copy */}
            <div>
              <div
                className="eyebrow reveal"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "var(--space-4)",
                }}
              >
                FISCALIDAD SUCESORIA
              </div>
              <h1
                className="h1 reveal"
                style={{
                  color: "var(--white)",
                  maxWidth: 600,
                  ...stagger(1),
                }}
              >
                Calcula, presenta y liquida los impuestos sucesorios de tus
                clientes sin complicaciones.
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
                Olvídate del papeleo y las sorpresas con Hacienda. La
                autoliquidación de modelos clave se realiza de manera
                automatizada, adaptándose a la normativa estatal y autonómica.
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
                <Link href="/registro" className="btn-primary">
                  Crear Cuenta Gratis
                </Link>
                <Link href="/demo" className="btn-ghost">
                  Reserva una Demo &rarr;
                </Link>
              </div>
            </div>

            {/* Right — Mockup: Modelo 650 */}
            <div className="reveal fisc-hero-mockup-wrap" style={stagger(2)}>
              <div style={{ position: "relative" }}>
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
                  &#10003; Normativa actualizada
                </div>

                <div className="mockup-window" style={{ marginBottom: -40 }}>
                  <div className="mockup-titlebar">
                    <div className="mockup-dot" />
                    <div className="mockup-dot" />
                    <div className="mockup-dot" />
                    <span className="mockup-title">
                      Modelo 650 &mdash; Heredero 1 de 3
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "var(--space-6)",
                      background: "var(--white)",
                    }}
                  >
                    {/* Header */}
                    <div
                      style={{
                        textAlign: "center",
                        marginBottom: "var(--space-5)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily:
                            "var(--font-dm), 'DM Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: 16,
                          color: "var(--ink)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        MODELO 650
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--slate)",
                          marginTop: 4,
                        }}
                      >
                        Impuesto sobre Sucesiones &mdash; Autoliquidaci&oacute;n
                      </div>
                    </div>

                    {/* Simulated rows */}
                    {[
                      {
                        label: "Base imponible",
                        value: "\u20ac 334.200,00",
                        highlight: false,
                      },
                      {
                        label: "Reducciones aplicadas",
                        value: "\u2212 \u20ac 100.000,00",
                        highlight: false,
                      },
                      {
                        label: "Base liquidable",
                        value: "\u20ac 234.200,00",
                        highlight: false,
                      },
                      {
                        label: "Cuota \u00edntegra",
                        value: "\u20ac 28.104,00",
                        highlight: false,
                      },
                      {
                        label: "Bonificaci\u00f3n CA (99%)",
                        value: "\u2212 \u20ac 27.822,96",
                        highlight: false,
                      },
                    ].map((row, i) => (
                      <div
                        key={row.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "8px 0",
                          fontSize: 13,
                          borderTop:
                            i > 0 ? "1px solid var(--mist)" : "none",
                        }}
                      >
                        <span style={{ color: "var(--slate)" }}>
                          {row.label}
                        </span>
                        <span
                          className="mono"
                          style={{
                            color: "var(--ink)",
                            fontSize: 13,
                          }}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}

                    {/* Total */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 0 0",
                        borderTop: "2px solid var(--ulpiano-green)",
                        marginTop: "var(--space-2)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "var(--ink)",
                        }}
                      >
                        Cuota a ingresar
                      </span>
                      <span
                        className="mono"
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: "var(--ulpiano-green)",
                        }}
                      >
                        &euro; 281,04
                      </span>
                    </div>

                    {/* Badge */}
                    <div
                      style={{
                        marginTop: "var(--space-4)",
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-2)",
                      }}
                    >
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
                        Bonificaci&oacute;n Grupo II &middot; Catalunya
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 2: EL PROBLEMA */}
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
            Calcular impuestos sucesorios no deber&iacute;a ser un ejercicio de
            riesgo
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
              Normativa estatal y auton&oacute;mica que cambia cada a&ntilde;o.
              Bonificaciones que dependen del parentesco, la Comunidad
              Aut&oacute;noma y el tipo de bien. Reducciones que se aplican en
              un orden espec&iacute;fico. Y formularios oficiales que exigen
              que cada cifra cuadre con las dem&aacute;s.
            </p>
            <p
              className="body-lg"
              style={{
                color: "var(--slate)",
                lineHeight: 1.7,
                marginTop: "var(--space-6)",
              }}
            >
              El profesional que gestiona la fiscalidad sucesoria hoy dedica
              horas a verificar c&aacute;lculos, consultar normativa dispersa y
              rellenar modelos a mano. Un error en la base imponible, una
              reducci&oacute;n no aplicada o un plazo incumplido pueden derivar
              en sanciones, recargos e intereses de demora.
            </p>
            <p
              className="body-lg"
              style={{
                color: "var(--slate)",
                lineHeight: 1.7,
                marginTop: "var(--space-6)",
              }}
            >
              El problema no es la complejidad de la norma. Es que el
              c&aacute;lculo fiscal se realiza desconectado de los datos del
              expediente.
            </p>
          </div>

          {/* Visual: warning indicators */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              flexWrap: "wrap",
              ...stagger(3),
            }}
          >
            {[
              "Normativa dispersa",
              "C\u00e1lculos manuales",
              "Riesgo de sanci\u00f3n",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "1px dashed var(--mist)",
                  fontSize: 14,
                  color: "var(--slate)",
                }}
              >
                <AlertTriangle size={16} style={{ color: "var(--warning)" }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 3: POR QU\u00c9 ELEGIR — LAS 5 VENTAJAS */}
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
              VENTAJAS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              &iquest;Por qu&eacute; elegir Optimizaci&oacute;n Fiscal
              Sucesoria?
            </h2>
            <p
              className="body-lg reveal"
              style={{
                color: "var(--slate)",
                marginTop: "var(--space-4)",
                ...stagger(2),
              }}
            >
              C&aacute;lculos precisos, bonificaciones identificadas y modelos
              cumplimentados. Todo desde un &uacute;nico entorno digital.
            </p>
          </div>

          <div className="fisc-features-grid">
            {/* Automatización Total */}
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
                <Calculator size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Automatizaci&oacute;n Total
              </h3>
              <p
                className="body-sm"
                style={{ color: "var(--slate)" }}
              >
                Registra la informaci&oacute;n del patrimonio y deja que el
                sistema determine las bases imponibles, cuotas y ventajas
                fiscales aplicables. Sin c&aacute;lculos manuales.
              </p>
            </div>

            {/* Consejos con IA */}
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
                <Brain size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Consejos Personalizados con IA
              </h3>
              <p
                className="body-sm"
                style={{ color: "var(--slate)" }}
              >
                A partir de la configuraci&oacute;n patrimonial, la
                inteligencia artificial ofrece recomendaciones
                estrat&eacute;gicas para optimizar la carga fiscal y ajustar el
                reparto seg&uacute;n la normativa vigente.
              </p>
            </div>

            {/* Enfoque en herencias */}
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
                <Scale size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Enfoque Exclusivo en Herencias
              </h3>
              <p
                className="body-sm"
                style={{ color: "var(--slate)" }}
              >
                Dise&ntilde;ado espec&iacute;ficamente para el Impuesto de
                Sucesiones y Donaciones. El m&oacute;dulo se centra en los
                detalles y particularidades de la tramitaci&oacute;n fiscal
                sucesoria.
              </p>
            </div>

            {/* Actualizaciones normativas */}
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
                <RefreshCw size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Actualizaciones Normativas Continuas
              </h3>
              <p
                className="body-sm"
                style={{ color: "var(--slate)" }}
              >
                La plataforma se adapta de forma autom&aacute;tica a las
                &uacute;ltimas regulaciones, garantizando que siempre
                est&eacute;s al d&iacute;a con la legislaci&oacute;n vigente
                &mdash; estatal y auton&oacute;mica.
              </p>
            </div>

            {/* Soporte especializado */}
            <div className="card reveal" style={stagger(4)}>
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
                <Headset size={24} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Soporte Especializado
              </h3>
              <p
                className="body-sm"
                style={{ color: "var(--slate)" }}
              >
                Un equipo de expertos en derecho sucesorio y fiscalidad,
                disponible para asesorar y resolver cualquier duda durante el
                proceso de liquidaci&oacute;n.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 4: C\u00d3MO FUNCIONA */}
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
              C&oacute;mo Funciona
            </h2>
          </div>

          <div className="fisc-steps-grid">
            {[
              {
                num: "01",
                icon: <ClipboardList size={24} />,
                title: "Planificador de herencias",
                desc: "La base de la Optimización Fiscal se genera a partir del registro de los bienes, derechos y deudas del causante en el planificador de herencias. Con los datos de los beneficiarios y la Comunidad Autónoma correspondiente.",
              },
              {
                num: "02",
                icon: <SlidersHorizontal size={24} />,
                title: "Cálculo y Simulación Automática",
                desc: "La plataforma procesa la información para determinar la base imponible, aplicando bonificaciones y reducciones fiscales según la normativa y simulando distintos escenarios de reparto.",
              },
              {
                num: "03",
                icon: <FileCheck size={24} />,
                title: "Completa y Presenta",
                desc: "Ulpiano autocompleta los formularios oficiales (modelos 650, 651, 652, 653, 660), permitiendo la autoliquidación de forma sencilla, todo desde un único entorno digital.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="reveal fisc-step-item"
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

      {/* SECCI\u00d3N 5: MODELOS CUBIERTOS */}
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
              MODELOS FISCALES
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Todos los modelos del Impuesto de Sucesiones y Donaciones
            </h2>
          </div>

          <div className="fisc-models-grid">
            {models.map((model, i) => (
              <div
                key={model.number}
                className="reveal"
                style={{
                  border: "1px solid var(--mist)",
                  borderLeft: "3px solid var(--ulpiano-green)",
                  borderRadius: "var(--radius-sm)",
                  padding: "var(--space-6)",
                  background: "var(--white)",
                  position: "relative",
                  overflow: "hidden",
                  ...stagger(i),
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
                  {model.number}
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
                  Modelo {model.number}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--slate)",
                    lineHeight: 1.6,
                  }}
                >
                  {model.desc}
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
                  {model.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 6: PARA QUI\u00c9N */}
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
              Liquidaci&oacute;n fiscal sin fricci&oacute;n, para cada perfil
              profesional
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
              "Asesor\u00edas fiscales",
              "Notar\u00edas",
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
                claim="La liquidación fiscal que os costaba media jornada, resuelta en minutos con los datos del expediente."
                checks={[
                  "Modelos 650 y 660 generados desde el inventario patrimonial del expediente",
                  "Reducciones y bonificaciones identificadas automáticamente según parentesco y CA",
                  "Simulación de escenarios de reparto con impacto fiscal comparado",
                ]}
                mockupLabel="Vista del Modelo 650"
              />
            )}
            {activeTab === 1 && (
              <TabPanel
                claim="La base imponible de tu cliente, calculada con la normativa autonómica correcta. Sin consultar BOE."
                checks={[
                  "Motor fiscal actualizado con normativa estatal y de las 17 Comunidades Autónomas",
                  "Cálculo automático de base, reducciones, tarifa y bonificaciones",
                  "Trazabilidad completa: cada cifra enlaza con el dato original del expediente",
                ]}
                mockupLabel="Vista del Cálculo Fiscal"
              />
            )}
            {activeTab === 2 && (
              <TabPanel
                claim="Los datos fiscales del expediente, listos para el protocolo. Coherentes con el cuaderno particional."
                checks={[
                  "Liquidación fiscal integrada con el inventario y la documentación sucesoria",
                  "Datos de sujetos pasivos, bienes y cuotas en un único flujo",
                  "Exportación directa de modelos cumplimentados para presentación",
                ]}
                mockupLabel="Vista de Liquidación"
              />
            )}
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 7: COMPARATIVA */}
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
              Lo que cambia cuando el c&aacute;lculo fiscal se conecta al
              expediente
            </h2>
          </div>

          {/* Desktop table */}
          <div
            className="reveal fisc-comparison-desktop"
            style={stagger(2)}
          >
            <table
              className="comparison-table"
              style={{ maxWidth: 900, margin: "0 auto" }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      background: "var(--surface)",
                      color: "var(--slate)",
                    }}
                  >
                    C&aacute;lculo manual
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
          <div className="fisc-comparison-mobile">
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

      {/* SECCI\u00d3N 8: M\u00c9TRICAS + TESTIMONIO */}
      <section
        style={{
          background: "var(--night)",
          padding: "var(--space-24) 0",
        }}
      >
        <div className="container">
          <div className="fisc-metrics-grid">
            <AnimatedMetric
              value={17}
              suffix=""
              label="Comunidades Aut\u00f3nomas con normativa integrada"
            />
            <AnimatedMetric
              value={5}
              suffix=""
              label="Modelos fiscales autocumplimentados desde el expediente"
            />
            <AnimatedMetric
              value={100}
              suffix="%"
              label="Coherencia entre inventario, c\u00e1lculo fiscal y modelos"
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
              className="fisc-testimonial-quote"
              style={{
                fontFamily:
                  "var(--font-inter), 'Inter', sans-serif",
                fontStyle: "italic",
                fontSize: 22,
                lineHeight: 1.5,
                color: "var(--white)",
                margin: 0,
              }}
            >
              &ldquo;Antes revis&aacute;bamos cada modelo tres veces porque un
              error en la base imponible pod&iacute;a costarnos un
              requerimiento. Ahora las cifras salen del expediente, las
              bonificaciones se aplican solas y nosotros nos dedicamos a lo que
              importa: asesorar al cliente.&rdquo;
            </blockquote>
            <p
              style={{
                marginTop: "var(--space-4)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--fog)",
              }}
            >
              &mdash; Asesor fiscal, despacho especializado en sucesiones,
              Madrid
            </p>
          </div>
        </div>
      </section>

      {/* SECCI\u00d3N 9: CTA FINAL */}
      <section
        id="solicita-demo"
        style={{
          background:
            "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2 reveal fisc-cta-h2">
            Simplifica y Optimiza la liquidaci&oacute;n del Impuesto de
            Sucesiones
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
            Empieza hoy a gestionar las obligaciones fiscales de tus clientes
            con la tranquilidad de contar con una soluci&oacute;n automatizada y
            un equipo experto respald&aacute;ndote.
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
            <Link href="/registro" className="btn-primary">
              Crear Cuenta Gratis
            </Link>
            <Link href="/demo" className="btn-ghost">
              Reserva una Demo &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style>{`
        .fisc-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }
        .fisc-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .fisc-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .fisc-step-item:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 36px;
          right: calc(-1 * var(--space-4));
          width: calc(var(--space-8));
          border-top: 2px dashed var(--mist);
        }
        .fisc-models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .fisc-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .fisc-tab-panel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-10);
          align-items: center;
        }
        .fisc-comparison-mobile {
          display: none;
        }
        .fisc-testimonial-quote {
          font-size: 22px;
        }
        .fisc-cta-h2 {
          color: var(--white);
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .fisc-hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
          .fisc-hero-mockup-wrap {
            max-width: 540px;
            margin: 0 auto;
          }
          .fisc-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fisc-steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .fisc-step-item::after {
            display: none !important;
          }
          .fisc-models-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .fisc-hero-grid {
            grid-template-columns: 1fr;
          }
          .fisc-features-grid {
            grid-template-columns: 1fr;
          }
          .fisc-steps-grid {
            grid-template-columns: 1fr;
          }
          .fisc-models-grid {
            grid-template-columns: 1fr;
          }
          .fisc-metrics-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
          .fisc-tab-panel-grid {
            grid-template-columns: 1fr;
          }
          .fisc-comparison-desktop {
            display: none;
          }
          .fisc-comparison-mobile {
            display: block;
          }
          .fisc-testimonial-quote {
            font-size: 18px !important;
          }
          .fisc-cta-h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
