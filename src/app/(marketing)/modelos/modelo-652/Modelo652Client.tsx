"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Shield,
  Heart,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  FileText,
  Layers,
  ClipboardList,
  Users,
  XCircle,
} from "lucide-react";

/* ─── Hooks ─── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    node.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Shared sub-components ─── */

function ModelNav({ active }: { active: string }) {
  const items = [
    { id: "650", label: "Sucesiones", href: "/modelos/modelo-650" },
    { id: "651", label: "Donaciones", href: "/modelos/modelo-651" },
    { id: "652", label: "Seguros", href: "/modelos/modelo-652" },
    { id: "653", label: "Consolidación", href: "/modelos/modelo-653" },
    { id: "660", label: "Inventario", href: "/modelos/modelo-660" },
  ];
  return (
    <nav className="mod-nav" aria-label="Modelos fiscales">
      {items.map((m) => (
        <Link
          key={m.id}
          href={m.href}
          className={`mod-nav__item ${m.id === active ? "mod-nav__item--active" : ""}`}
        >
          <span className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
            {m.id}
          </span>{" "}
          {m.label}
        </Link>
      ))}
    </nav>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid var(--mist)",
        padding: "var(--space-4) 0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: 0,
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: 16,
          color: "var(--ink)",
          lineHeight: 1.4,
          gap: "var(--space-4)",
        }}
        aria-expanded={open}
      >
        {q}
        <ChevronDown
          size={18}
          style={{
            flexShrink: 0,
            color: "var(--slate)",
            transition: "transform 200ms ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? 600 : 0,
          overflow: "hidden",
          transition: "max-height 300ms ease",
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: "var(--slate)",
            lineHeight: 1.7,
            marginTop: "var(--space-3)",
            paddingBottom: "var(--space-2)",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─── Data ─── */

const funnelRows = [
  { label: "Capital del seguro percibido", value: "€ 150.000,00", note: "Prestación por fallecimiento", indent: false },
  { label: "Reducción parentesco", value: "−€ 100.000,00", note: "Art. 2 Llei 19/2010 (Cónyuge, Grupo II)", indent: true },
  { label: "Reducción seguros de vida", value: "−€ 9.195,49", note: "Art. 10 Llei 19/2010 (100%, máx. 9.195,49€)", indent: true },
  { label: "Base liquidable", value: "€ 40.804,51", note: "", indent: false },
  { label: "Tarifa progresiva", value: "€ 3.265,45", note: "Escala autonómica", indent: false },
  { label: "Coeficiente multiplicador", value: "× 1,0000", note: "Grupo II, patrimonio < 500.000€", indent: false },
  { label: "Cuota íntegra", value: "€ 3.265,45", note: "", indent: false },
  { label: "Bonificación cónyuge", value: "−€ 3.232,80", note: "Art. 12 Llei 19/2010 (99%)", indent: true },
];

const summaryTable = [
  { field: "Denominación oficial", value: "Autoliquidación del ISD — Seguros de Vida" },
  { field: "Base legal estatal", value: "Art. 9.c) Ley 29/1987 (LISD) + Art. 39 RD 1629/1991 (RISD)" },
  { field: "Base legal autonómica", value: "Llei 19/2010, del 7 de juny (reducciones y bonificaciones)" },
  { field: "Hecho imponible", value: "Percepción de cantidades por seguros de vida cuando el beneficiario es persona distinta del tomador" },
  { field: "Sujeto pasivo", value: "El beneficiario del seguro de vida" },
  { field: "Plazo", value: "6 meses desde la fecha de fallecimiento del asegurado" },
  { field: "Administración competente", value: "CA de residencia habitual del causante (ATC en Catalunya)" },
  { field: "Relación con otros modelos", value: "Se presenta junto al Modelo 660 cuando forma parte de un expediente sucesorio" },
];

const faqs = [
  {
    q: "¿Cuándo se presenta un Modelo 652 en lugar de incluir el seguro en el Modelo 650?",
    a: "El Modelo 652 se presenta cuando el beneficiario del seguro de vida es una persona distinta del tomador de la póliza y la percepción se produce por causa de muerte. Si el beneficiario es también heredero, puede tributar por el 650 y el 652 simultáneamente: por el 650 como heredero de los bienes del causante y por el 652 como beneficiario del seguro. En la práctica, cuando el expediente incluye seguro y herencia, Ulpiano genera ambos modelos conectados.",
  },
  {
    q: "¿Qué reducción específica existe para seguros de vida en Catalunya?",
    a: "El Art. 10 de la Llei 19/2010 establece una reducción del 100% del capital percibido por seguros de vida con un límite de 9.195,49€. Esta reducción es compatible con la reducción por parentesco. Además, se aplican las bonificaciones en cuota del Art. 12 (hasta el 99% para cónyuge y Grupos I y II).",
  },
  {
    q: "¿Qué plazo hay para presentar el Modelo 652?",
    a: "El plazo es de 6 meses desde la fecha de fallecimiento del asegurado, el mismo que rige para el Modelo 650. Se puede solicitar una prórroga de 6 meses adicionales dentro de los primeros 5 meses (Art. 68 RISD), que conlleva intereses de demora.",
  },
  {
    q: "¿El Modelo 652 requiere acompañar un Modelo 660?",
    a: "Cuando el seguro de vida forma parte de un expediente sucesorio (lo habitual), el capital del seguro se incluye en el inventario del Modelo 660 como bien del caudal relicto. Si el beneficiario solo percibe el seguro y no hereda bienes, puede no ser necesario un 660 independiente, pero la práctica habitual es incluirlo en el inventario del expediente.",
  },
  {
    q: "¿Puede Ulpiano generar el Modelo 652 automáticamente?",
    a: "Sí. Ulpiano incorpora los seguros de vida como categoría dentro del inventario patrimonial. Cuando se registra una póliza con beneficiario distinto del tomador, el motor fiscal genera automáticamente el Modelo 652 con la cuota calculada, las reducciones aplicadas y la normativa citada, conectado con el resto de modelos del expediente.",
  },
];

const relatedModels = [
  { number: "650", name: "Sucesiones", relation: "Si el beneficiario también hereda bienes del causante", href: "/modelos/modelo-650", icon: Users },
  { number: "660", name: "Declaración / Inventario", relation: "El seguro se incluye en el inventario del expediente", href: "/modelos/modelo-660", icon: ClipboardList },
  { number: "653", name: "Consolidación de Dominio", relation: "Cuando se extingue el usufructo constituido en la sucesión", href: "/modelos/modelo-653", icon: Layers },
];

/* ─── Main Component ─── */

export function Modelo652Client() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* HERO */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Number decoration */}
        <div
          aria-hidden="true"
          className="mono"
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            fontSize: 160,
            fontWeight: 700,
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          652
        </div>

        <div className="container">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="reveal"
            style={{ marginBottom: "var(--space-3)" }}
          >
            <ol
              style={{
                listStyle: "none",
                display: "flex",
                gap: 8,
                padding: 0,
                margin: 0,
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/modelos" style={{ color: "inherit", textDecoration: "none" }}>Modelos</Link></li>
              <li aria-hidden="true">›</li>
              <li style={{ color: "rgba(255,255,255,0.8)" }}>Modelo 652</li>
            </ol>
          </nav>

          {/* Model Nav */}
          <div className="reveal" style={stagger(0)}>
            <ModelNav active="652" />
          </div>

          <div className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.5)", marginTop: "var(--space-8)", ...stagger(1) }}>
            MODELO FISCAL
          </div>
          <h1 className="h1 reveal" style={{ color: "var(--white)", maxWidth: 720, marginTop: "var(--space-4)", ...stagger(2) }}>
            Modelo 652: Autoliquidación de Seguros de Vida
          </h1>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginTop: "var(--space-6)", ...stagger(3) }}>
            El Modelo 652 es el formulario de autoliquidación del Impuesto sobre
            Sucesiones y Donaciones (ISD) para la tributación del capital percibido
            por seguros de vida cuando el beneficiario es persona distinta del
            tomador de la póliza, y la percepción se produce por causa de muerte.
          </p>
          <div className="reveal" style={{ marginTop: "var(--space-4)", ...stagger(4) }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(45,106,79,0.15)",
                color: "var(--green-light)",
                fontSize: 13,
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 6,
              }}
            >
              Base legal: Art. 9.c) LISD · Art. 39 RISD · Llei 19/2010 (Catalunya)
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: QUÉ ES */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>DEFINICIÓN</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            ¿Qué es el Modelo 652?
          </h2>

          <div className="reveal" style={{ maxWidth: 720, marginTop: "var(--space-8)", fontSize: 16, color: "var(--slate)", lineHeight: 1.7, ...stagger(2) }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              El Modelo 652 es el documento de autoliquidación del ISD específico para
              las cantidades percibidas por seguros de vida cuando concurren dos requisitos:
              el beneficiario es una persona distinta del tomador de la póliza y el hecho
              generador es el fallecimiento del asegurado.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              La tributación de los seguros de vida por causa de muerte está regulada en
              el Art. 9.c) de la LISD y el Art. 39 del RISD. En Catalunya, la Llei 19/2010
              establece una reducción específica del 100% del capital percibido con un límite
              de 9.195,49€ (Art. 10), además de las reducciones por parentesco y las
              bonificaciones en cuota aplicables.
            </p>
            <p>
              Cuando el beneficiario del seguro es además heredero del causante, presenta
              simultáneamente el Modelo 650 (por la herencia) y el Modelo 652 (por el
              seguro). Ambos comparten el mismo expediente sucesorio.
            </p>
          </div>

          {/* Summary table */}
          <div className="reveal" style={{ marginTop: "var(--space-10)", ...stagger(3) }}>
            <div style={{ background: "var(--surface)", borderRadius: 12, overflow: "hidden", border: "1px solid var(--mist)" }}>
              {summaryTable.map((row, i) => (
                <div
                  key={row.field}
                  className="mod-summary-row"
                  style={{ borderTop: i > 0 ? "1px solid var(--mist)" : "none" }}
                >
                  <div className="mod-summary-field">{row.field}</div>
                  <div className="mod-summary-value">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: CUÁNDO SÍ / CUÁNDO NO */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>SUPUESTOS</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            ¿Cuándo se presenta el Modelo 652?
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 720, marginTop: "var(--space-6)", ...stagger(2) }}>
            No todo seguro de vida tributa por el Modelo 652. La clave está en la
            relación entre tomador, asegurado y beneficiario, y en la causa que
            genera la prestación.
          </p>

          <div className="mod-cuando-grid" style={{ marginTop: "var(--space-10)" }}>
            {/* SÍ se presenta */}
            <div
              className="reveal"
              style={{
                background: "var(--white)",
                borderRadius: 12,
                border: "1px solid var(--mist)",
                borderLeft: "4px solid var(--ulpiano-green)",
                padding: "var(--space-6)",
                ...stagger(3),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
                <CheckCircle size={22} color="var(--ulpiano-green)" />
                <h3 style={{ margin: 0, fontSize: 18, color: "var(--ink)" }}>Sí se presenta el 652</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {[
                  "Seguro de vida por fallecimiento donde el beneficiario ≠ tomador de la póliza",
                  "Seguro colectivo o de grupo con prestación por muerte a favor de un tercero",
                  "Capital percibido por el cónyuge viudo como beneficiario designado en póliza",
                  "Seguro de vida vinculado a préstamo hipotecario donde el beneficiario es el heredero (no la entidad financiera)",
                  "Pluralidad de beneficiarios: cada uno presenta su propio Modelo 652",
                ].map((text) => (
                  <li key={text} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <CheckCircle size={16} color="var(--ulpiano-green)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.6 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NO se presenta */}
            <div
              className="reveal"
              style={{
                background: "var(--white)",
                borderRadius: 12,
                border: "1px solid var(--mist)",
                borderLeft: "4px solid var(--danger)",
                padding: "var(--space-6)",
                ...stagger(4),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
                <XCircle size={22} color="var(--danger)" />
                <h3 style={{ margin: 0, fontSize: 18, color: "var(--ink)" }}>No se presenta el 652</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {[
                  "Seguro donde el beneficiario es el propio tomador (tributa por IRPF, no por ISD)",
                  "Seguro de vida-ahorro que se rescata en vida del asegurado (rendimiento del capital mobiliario)",
                  "Indemnización por seguro de accidentes o responsabilidad civil (no es seguro de vida)",
                  "Seguro cuyo beneficiario es una persona jurídica (tributa por Impuesto sobre Sociedades)",
                  "Prestación de planes de pensiones o PPA (tributan como rendimiento del trabajo en IRPF)",
                ].map((text) => (
                  <li key={text} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <XCircle size={16} color="var(--danger)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.6 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alerta de plazo */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              background: "var(--warning-bg)",
              border: "1px solid rgba(180,83,9,0.2)",
              borderRadius: 12,
              padding: "var(--space-6)",
              ...stagger(5),
            }}
          >
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--warning)", marginBottom: "var(--space-2)" }}>
                  PLAZO: 6 MESES DESDE EL FALLECIMIENTO
                </div>
                <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
                  El plazo de presentación del Modelo 652 es de 6 meses desde la fecha
                  de fallecimiento del asegurado — el mismo que rige para el Modelo 650.
                  Fuera de plazo se aplican los recargos del Art. 27 LGT:
                </p>
                <ul style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Hasta 3 meses de retraso: 5% (sin intereses ni sanción)</li>
                  <li>De 3 a 6 meses: 10%</li>
                  <li>De 6 a 12 meses: 15%</li>
                  <li>Más de 12 meses: 20% + intereses de demora</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: EMBUDO FISCAL */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>CÁLCULO</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            Cómo se calcula la cuota del Modelo 652
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Ejemplo práctico: cónyuge beneficiario de un seguro de vida de 150.000€
            en Catalunya. El embudo de liquidación muestra cada paso.
          </p>

          {/* Visual funnel */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              background: "var(--surface)",
              borderRadius: 12,
              border: "1px solid var(--mist)",
              padding: "var(--space-6)",
              maxWidth: 720,
              overflowX: "auto",
              ...stagger(3),
            }}
          >
            {funnelRows.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "10px 0",
                  borderTop: i > 0 ? "1px dashed var(--mist)" : "none",
                  paddingLeft: row.indent ? "var(--space-4)" : 0,
                }}
              >
                <span style={{ fontSize: 14, color: row.indent ? "var(--slate)" : "var(--ink)", fontWeight: row.indent ? 400 : 500 }}>
                  {row.indent ? "−" : ""} {row.label}
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)", flexShrink: 0 }}>
                  <span className="mono" style={{ fontSize: 15, color: "var(--ink)", fontWeight: 500 }}>
                    {row.value}
                  </span>
                  {row.note && (
                    <span style={{ fontSize: 12, color: "var(--fog)", whiteSpace: "nowrap" }}>
                      {row.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {/* Final result */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "14px 0 4px",
                borderTop: "2px solid var(--mist)",
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>
                CUOTA A INGRESAR
              </span>
              <span className="mono" style={{ fontSize: 20, fontWeight: 700, color: "var(--ulpiano-green)" }}>
                € 32,65
              </span>
            </div>
          </div>

          {/* Insurance-specific reductions */}
          <div className="reveal" style={{ marginTop: "var(--space-12)", ...stagger(4) }}>
            <h3 style={{ marginBottom: "var(--space-6)" }}>Reducciones aplicables al seguro de vida (Catalunya)</h3>
            <div style={{ overflowX: "auto" }}>
              <table className="mod-table">
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th>Base legal</th>
                    <th>Importe / Porcentaje</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { concept: "Reducción seguros de vida", law: "Art. 10 Llei 19/2010", amount: "100% del capital, máx. 9.195,49€" },
                    { concept: "Reducción parentesco Grupo I", law: "Art. 2.1", amount: "100.000€ + 12.000€/año < 21, máx. 196.000€" },
                    { concept: "Reducción parentesco Grupo II", law: "Art. 2.2", amount: "100.000€" },
                    { concept: "Reducción parentesco Grupo III", law: "Art. 2.3", amount: "50.000€" },
                    { concept: "Discapacidad ≥ 33%", law: "Art. 3", amount: "275.000€" },
                    { concept: "Discapacidad ≥ 65%", law: "Art. 3", amount: "650.000€" },
                    { concept: "Bonificación Grupos I y II", law: "Art. 12", amount: "Hasta 99% de la cuota" },
                  ].map((r) => (
                    <tr key={r.concept}>
                      <td>{r.concept}</td>
                      <td className="mono" style={{ fontSize: 13 }}>{r.law}</td>
                      <td>{r.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CÓMO ULPIANO LO GENERA */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>CON ULPIANO</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            El seguro de vida, integrado en el expediente
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Registras la póliza como un bien más del inventario. Ulpiano detecta
            que el beneficiario no es el tomador y genera el Modelo 652 automáticamente.
          </p>

          <div className="mod-ulpiano-grid" style={{ marginTop: "var(--space-10)" }}>
            {/* Left: 3 points of value */}
            <div>
              {[
                { title: "El seguro como categoría del inventario", desc: "Ulpiano trata los seguros de vida como una categoría específica dentro del inventario patrimonial (Modelo 660). Al registrar la póliza, se identifican automáticamente tomador, asegurado y beneficiario." },
                { title: "Cálculo separado, datos conectados", desc: "El Modelo 652 tiene su propio cálculo fiscal (base, reducciones, tarifa, bonificación), pero comparte los datos del expediente: fecha de fallecimiento, parentesco, patrimonio preexistente del beneficiario." },
                { title: "Un expediente, todos los modelos", desc: "Desde un único expediente sucesorio, Ulpiano genera el 650 de cada heredero, el 652 de cada beneficiario de seguro, el 660 del inventario y el 653 si hay consolidación de dominio. Todo coherente entre sí." },
              ].map((item, i) => (
                <div key={item.title} className="reveal" style={{ marginBottom: "var(--space-8)", ...stagger(i + 3) }}>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <CheckCircle size={20} color="var(--ulpiano-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: "var(--space-2)" }}>{item.title}</div>
                      <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="reveal" style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-6)", ...stagger(6) }}>
                <Link href="/demo" className="btn-primary">Solicita tu demo</Link>
                <Link href="/soluciones/fiscalidad-sucesoria" className="btn-ghost btn-ghost--dark">
                  Ver motor fiscal completo →
                </Link>
              </div>
            </div>

            {/* Right: Mockup placeholder */}
            <div className="reveal" style={stagger(4)}>
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: 12,
                  border: "1px solid var(--mist)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    right: 12,
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
                  ✓ Generado desde expediente
                </div>
                {/* Chrome bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", background: "var(--surface)", borderBottom: "1px solid var(--mist)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <span style={{ fontSize: 12, color: "var(--fog)", marginLeft: 8, fontWeight: 500 }}>Modelo 652 — Beneficiario seguro de vida</span>
                </div>
                {/* Content */}
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", letterSpacing: "0.04em" }}>MODELO 652</div>
                    <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 4 }}>Impuesto sobre Sucesiones — Seguros de Vida</div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--slate)", marginBottom: "var(--space-4)", borderBottom: "1px solid var(--mist)", paddingBottom: "var(--space-3)" }}>
                    <div>Asegurado: D. Joan Puig i Ferrer · NIF: 40.XXX.XXX-Y</div>
                    <div>Beneficiaria: D.ª Anna Puig i Costa · Cónyuge · Grupo II</div>
                    <div style={{ marginTop: 4 }}>Póliza: ES-VIDA-00123456 · Capital: 150.000,00€</div>
                  </div>
                  {/* Placeholder for screenshot */}
                  <div
                    style={{
                      background: "var(--surface)",
                      borderRadius: 8,
                      padding: "var(--space-8) var(--space-4)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "var(--space-3)",
                      minHeight: 180,
                      border: "1px dashed var(--mist)",
                    }}
                  >
                    <Shield size={32} color="var(--mist)" />
                    <span style={{ fontSize: 13, color: "var(--fog)", textAlign: "center" }}>
                      Captura del Modelo 652 generado
                      <br />
                      <span style={{ fontSize: 11 }}>(se proporcionará más adelante)</span>
                    </span>
                  </div>
                  {/* Mini result */}
                  <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: "var(--space-3)", borderTop: "1px solid var(--mist)" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>CUOTA</span>
                    <span className="mono" style={{ fontSize: 18, fontWeight: 700, color: "var(--ulpiano-green)" }}>€ 32,65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: FAQ */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>FAQ</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 520, ...stagger(1) }}>
            Preguntas frecuentes sobre el Modelo 652
          </h2>
          <div className="reveal" style={{ marginTop: "var(--space-10)", maxWidth: 720, ...stagger(2) }}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: MODELOS RELACIONADOS */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>MODELOS RELACIONADOS</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            Otros modelos del expediente sucesorio
          </h2>
          <div className="mod-related-grid mod-related-grid--3" style={{ marginTop: "var(--space-10)" }}>
            {relatedModels.map((m, i) => {
              const Icon = m.icon;
              return (
                <Link key={m.number} href={m.href} className="card reveal" style={{ textDecoration: "none", display: "block", ...stagger(i + 2) }}>
                  <span className="mono" style={{ fontSize: 36, fontWeight: 700, color: "var(--ulpiano-green)", lineHeight: 1 }}>{m.number}</span>
                  <h3 style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-2)" }}>{m.name}</h3>
                  <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>{m.relation}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: CTA FINAL */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2 reveal" style={{ color: "var(--white)", maxWidth: 640, margin: "0 auto" }}>
            Cada modelo del expediente, generado desde los mismos datos.
          </h2>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0", ...stagger(1) }}>
            Solicita una demo y comprueba cómo Ulpiano genera el Modelo 652 del
            beneficiario del seguro junto con el resto de modelos del expediente sucesorio.
          </p>
          <div className="reveal" style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", marginTop: "var(--space-10)", flexWrap: "wrap", ...stagger(2) }}>
            <Link href="/demo" className="btn-primary">Solicita tu demo</Link>
            <Link href="/soluciones/fiscalidad-sucesoria" className="btn-ghost">Ver motor fiscal →</Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Scoped styles */}
      <style>{`
        .mod-nav {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .mod-nav__item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 200ms ease, background 200ms ease;
        }
        .mod-nav__item:hover {
          color: rgba(255,255,255,0.9);
        }
        .mod-nav__item--active {
          background: var(--ulpiano-green);
          color: white;
        }
        .mod-summary-row {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: var(--space-4);
        }
        .mod-summary-field {
          padding: var(--space-4);
          font-weight: 600;
          font-size: 14px;
          color: var(--ink);
          background: rgba(241,245,249,0.5);
        }
        .mod-summary-value {
          padding: var(--space-4);
          font-size: 15px;
          color: var(--ink);
          line-height: 1.6;
        }
        .mod-cuando-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-6);
        }
        .mod-ulpiano-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: start;
        }
        .mod-related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }
        .mod-related-grid--3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .mod-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid var(--mist);
          border-radius: 12px;
          overflow: hidden;
          font-size: 14px;
        }
        .mod-table th {
          background: var(--surface);
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--slate);
          border-bottom: 1px solid var(--mist);
        }
        .mod-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--mist);
          color: var(--ink);
          line-height: 1.5;
        }
        .mod-table tr:last-child td { border-bottom: none; }

        @media (max-width: 1024px) {
          .mod-cuando-grid { grid-template-columns: 1fr; }
          .mod-ulpiano-grid { grid-template-columns: 1fr; }
          .mod-related-grid, .mod-related-grid--3 { grid-template-columns: repeat(2, 1fr); }
          .mod-summary-row { grid-template-columns: 180px 1fr; }
        }
        @media (max-width: 768px) {
          .mod-related-grid, .mod-related-grid--3 { grid-template-columns: 1fr; }
          .mod-summary-row {
            grid-template-columns: 1fr;
          }
          .mod-summary-field {
            padding-bottom: 0;
          }
          .mod-nav {
            overflow-x: auto;
            flex-wrap: nowrap;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 4px;
          }
          .mod-nav__item {
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
}
