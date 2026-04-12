"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Users,
  Gift,
  Shield,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  FileText,
  Layers,
  ClipboardList,
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
  { label: "Base imponible", value: "€ 385.000,00", note: "Valor bienes adquiridos", indent: false },
  { label: "Reducción parentesco", value: "−€ 100.000,00", note: "Art. 2 Llei 19/2010 (Grupo II)", indent: true },
  { label: "Reducción vivienda", value: "−€ 95.000,00", note: "Art. 5 (95%, máx. 500.000€)", indent: true },
  { label: "Base liquidable", value: "€ 190.000,00", note: "", indent: false },
  { label: "Tarifa progresiva", value: "€ 23.580,00", note: "Escala autonómica", indent: false },
  { label: "Coeficiente multiplicador", value: "× 1,0000", note: "Grupo II, patrimonio < 500.000€", indent: false },
  { label: "Cuota íntegra", value: "€ 23.580,00", note: "", indent: false },
  { label: "Bonificación Grupo II", value: "−€ 22.401,00", note: "Art. 12 Llei 19/2010 (≈99%)", indent: true },
];

const reductions = [
  { concept: "Grupo I (desc. < 21 años)", law: "Art. 2.1", amount: "100.000€ + 12.000€/año < 21, máx. 196.000€" },
  { concept: "Grupo II (desc. ≥ 21, cónyuge, asc.)", law: "Art. 2.2", amount: "100.000€" },
  { concept: "Grupo III (col. 2.º y 3.er grado)", law: "Art. 2.3", amount: "50.000€" },
  { concept: "Grupo IV (col. 4.º y extraños)", law: "Art. 2.4", amount: "Sin reducción" },
  { concept: "Vivienda habitual", law: "Art. 5", amount: "95%, máx. 500.000€ por sujeto pasivo" },
  { concept: "Empresa familiar", law: "Art. 7", amount: "95% del valor" },
  { concept: "Patrimonio cultural", law: "Art. 6", amount: "95% del valor" },
  { concept: "Discapacidad ≥ 33%", law: "Art. 3", amount: "275.000€" },
  { concept: "Discapacidad ≥ 65%", law: "Art. 3", amount: "650.000€" },
  { concept: "Persona mayor de 75 años", law: "Art. 4", amount: "275.000€" },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre el Modelo 650 y el Modelo 660?",
    a: "El Modelo 650 es la autoliquidación individual — contiene el cálculo de la cuota tributaria de cada heredero. El Modelo 660 es la declaración del inventario de bienes, derechos y deudas del causante. Ambos se presentan conjuntamente: el 660 como soporte documental y el 650 como liquidación por beneficiario.",
  },
  {
    q: "¿Se presenta un Modelo 650 por cada heredero?",
    a: "Sí. Cada heredero, legatario o beneficiario de seguro de vida presenta su propio Modelo 650 con su liquidación individual. Si hay 3 herederos, se presentan 3 Modelos 650 (y un único Modelo 660).",
  },
  {
    q: "¿Qué plazo hay para presentar el Modelo 650?",
    a: "6 meses desde la fecha de fallecimiento del causante. Existe la posibilidad de solicitar una prórroga de 6 meses adicionales dentro de los primeros 5 meses (Art. 68 RISD). La prórroga conlleva intereses de demora.",
  },
  {
    q: "¿Qué ocurre si presento el Modelo 650 fuera de plazo?",
    a: "Se aplican los recargos del Art. 27 LGT: 5% (hasta 3 meses), 10% (3-6 meses), 15% (6-12 meses), 20% (más de 12 meses) con intereses de demora a partir de los 12 meses.",
  },
  {
    q: "¿Qué reducciones se aplican en Catalunya?",
    a: "La Llei 19/2010 establece reducciones por parentesco (hasta 196.000€ para menores de 21 años, 100.000€ para Grupo II), vivienda habitual (95%, máx. 500.000€), empresa familiar (95%), discapacidad (275.000€ o 650.000€), y persona mayor de 75 años (275.000€). Además, bonificaciones en cuota de hasta el 99% para Grupos I y II.",
  },
  {
    q: "¿Puede Ulpiano generar el Modelo 650 automáticamente?",
    a: "Sí. Ulpiano toma los datos del expediente sucesorio — inventario patrimonial, escenario hereditario y configuración fiscal — y genera el Modelo 650 de cada heredero con la cuota calculada, las reducciones aplicadas y la normativa citada. El profesional revisa y valida antes de presentar.",
  },
];

const relatedModels = [
  { number: "660", name: "Declaración / Inventario", relation: "Acompaña siempre al Modelo 650", href: "/modelos/modelo-660", icon: ClipboardList },
  { number: "651", name: "Donaciones", relation: "Si la transmisión es inter vivos, no mortis causa", href: "/modelos/modelo-651", icon: Gift },
  { number: "652", name: "Seguros de Vida", relation: "Si el beneficiario del seguro tributa aparte", href: "/modelos/modelo-652", icon: Shield },
  { number: "653", name: "Consolidación de Dominio", relation: "Cuando se extingue el usufructo constituido", href: "/modelos/modelo-653", icon: Layers },
];

const summaryTable = [
  { field: "Denominación oficial", value: "Autoliquidación del ISD — Sucesiones" },
  { field: "Base legal estatal", value: "Ley 29/1987 (LISD) + RD 1629/1991 (RISD)" },
  { field: "Base legal autonómica", value: "Llei 19/2010, del 7 de juny" },
  { field: "Hecho imponible", value: "Adquisición de bienes y derechos por herencia, legado o cualquier título sucesorio" },
  { field: "Sujeto pasivo", value: "Cada heredero, legatario o beneficiario individualmente" },
  { field: "Plazo", value: "6 meses desde el fallecimiento (prorrogable 6 meses más)" },
  { field: "Administración competente", value: "CA de residencia habitual del causante (ATC en Catalunya)" },
  { field: "Acompaña a", value: "Modelo 660 (Inventario de bienes)" },
];

/* ─── Main Component ─── */

export function Modelo650Client() {
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
          650
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
              <li style={{ color: "rgba(255,255,255,0.8)" }}>Modelo 650</li>
            </ol>
          </nav>

          {/* Model Nav */}
          <div className="reveal" style={stagger(0)}>
            <ModelNav active="650" />
          </div>

          <div className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.5)", marginTop: "var(--space-8)", ...stagger(1) }}>
            MODELO FISCAL
          </div>
          <h1 className="h1 reveal" style={{ color: "var(--white)", maxWidth: 720, marginTop: "var(--space-4)", ...stagger(2) }}>
            Modelo 650: Autoliquidación del Impuesto sobre Sucesiones
          </h1>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginTop: "var(--space-6)", ...stagger(3) }}>
            El Modelo 650 es el formulario de autoliquidación que cada heredero
            o legatario debe presentar ante la administración tributaria
            autonómica para liquidar el Impuesto sobre Sucesiones y Donaciones
            (ISD) en su modalidad de sucesiones mortis causa.
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
              Normativa aplicable en Catalunya: Llei 19/2010, del 7 de juny
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: QUÉ ES */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>DEFINICIÓN</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            ¿Qué es el Modelo 650?
          </h2>

          <div className="reveal" style={{ maxWidth: 720, marginTop: "var(--space-8)", fontSize: 16, color: "var(--slate)", lineHeight: 1.7, ...stagger(2) }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              El Modelo 650 es el documento de autoliquidación del Impuesto sobre Sucesiones
              y Donaciones (ISD) en su modalidad de adquisiciones mortis causa. Cada heredero,
              legatario o beneficiario de un seguro de vida vinculado a una sucesión debe
              presentar su propio Modelo 650 ante la administración tributaria de la comunidad
              autónoma donde el causante tenía su residencia habitual.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              En Catalunya, la gestión del impuesto corresponde a la Agència Tributària de
              Catalunya (ATC) y se rige por la Llei 19/2010, del 7 de juny, que establece
              reducciones y bonificaciones propias diferenciadas de la normativa estatal.
            </p>
            <p>
              El Modelo 650 recoge el cálculo completo de la cuota tributaria: desde la base
              imponible hasta la cuota a ingresar, pasando por reducciones, tarifa progresiva,
              coeficiente multiplicador y bonificaciones autonómicas.
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

      {/* SECCIÓN 3: QUIÉN ESTÁ OBLIGADO */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>OBLIGADOS TRIBUTARIOS</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 520, ...stagger(1) }}>
            ¿Quién debe presentar el Modelo 650?
          </h2>
          <p className="reveal body-lg" style={{ color: "var(--slate)", maxWidth: 720, marginTop: "var(--space-6)", ...stagger(2) }}>
            Está obligado a presentar el Modelo 650 toda persona física que
            adquiera bienes o derechos por causa de muerte. La obligación es
            individual: cada heredero o legatario presenta su propio modelo con
            su propia liquidación.
          </p>

          <div className="mod-obligados-grid" style={{ marginTop: "var(--space-10)" }}>
            {[
              { icon: Users, title: "Herederos universales o en cuota", desc: "Quienes suceden al causante en la totalidad o una parte alícuota de sus bienes y derechos. Incluye herederos testamentarios e intestados." },
              { icon: Gift, title: "Legatarios", desc: "Quienes reciben bienes concretos por disposición testamentaria del causante: un inmueble específico, una cantidad de dinero, una joya." },
              { icon: Shield, title: "Beneficiarios de seguros de vida", desc: "Quienes perciben el capital de un seguro de vida por fallecimiento del asegurado, cuando el beneficiario no es el tomador. Puede requerirse también el Modelo 652." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card reveal" style={stagger(i + 3)}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--green-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-4)" }}>
                    <Icon size={22} color="var(--ulpiano-green)" />
                  </div>
                  <h3 style={{ marginBottom: "var(--space-3)" }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Alerta de extemporaneidad */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              background: "var(--warning-bg)",
              border: "1px solid rgba(180,83,9,0.2)",
              borderRadius: 12,
              padding: "var(--space-6)",
              ...stagger(6),
            }}
          >
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--warning)", marginBottom: "var(--space-2)" }}>
                  PLAZO Y EXTEMPORANEIDAD
                </div>
                <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
                  El plazo de presentación es de 6 meses desde la fecha de fallecimiento.
                  Si el Modelo 650 se presenta fuera de plazo, se aplican los recargos del
                  Art. 27 de la Ley General Tributaria (LGT):
                </p>
                <ul style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Hasta 3 meses de retraso: 5% (sin intereses ni sanción)</li>
                  <li>De 3 a 6 meses: 10%</li>
                  <li>De 6 a 12 meses: 15%</li>
                  <li>Más de 12 meses: 20% + intereses de demora</li>
                </ul>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6, marginTop: "var(--space-3)" }}>
                  Ulpiano calcula automáticamente el recargo por extemporaneidad
                  y alerta antes de que el plazo venza.
                </p>
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
            Cómo se calcula la cuota del Modelo 650
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            El Modelo 650 recoge un embudo de liquidación completo. Cada paso reduce
            o incrementa la cuota según la normativa aplicable.
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
                € 1.179,00
              </span>
            </div>
          </div>

          {/* Reductions table */}
          <div className="reveal" style={{ marginTop: "var(--space-12)", ...stagger(4) }}>
            <h3 style={{ marginBottom: "var(--space-6)" }}>Reducciones en Catalunya (Llei 19/2010)</h3>
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
                  {reductions.map((r) => (
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
            El Modelo 650, generado desde el expediente
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Introduces los datos del expediente una vez. Ulpiano calcula la cuota
            de cada heredero y genera el Modelo 650 con todos los campos completados.
          </p>

          <div className="mod-ulpiano-grid" style={{ marginTop: "var(--space-10)" }}>
            {/* Left: 3 points of value */}
            <div>
              {[
                { title: "Un 650 por heredero, coherente con el inventario", desc: "El motor fiscal toma los datos del inventario patrimonial (Modelo 660) y calcula la cuota individual de cada heredero aplicando la normativa catalana vigente." },
                { title: "Reducciones y bonificaciones aplicadas automáticamente", desc: "Parentesco, vivienda habitual, empresa familiar, discapacidad — cada reducción se aplica según la Llei 19/2010 sin revisión manual de tablas." },
                { title: "Alerta de extemporaneidad antes del vencimiento", desc: "Ulpiano monitoriza la fecha de fallecimiento y calcula el recargo por extemporaneidad del Art. 27 LGT si el expediente se acerca al vencimiento del período voluntario." },
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
                  <span style={{ fontSize: 12, color: "var(--fog)", marginLeft: 8, fontWeight: 500 }}>Modelo 650 — Heredero 1/3</span>
                </div>
                {/* Content */}
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", letterSpacing: "0.04em" }}>MODELO 650</div>
                    <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 4 }}>Impuesto sobre Sucesiones — Autoliquidación</div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--slate)", marginBottom: "var(--space-4)", borderBottom: "1px solid var(--mist)", paddingBottom: "var(--space-3)" }}>
                    <div>Causante: D. Joan Puig i Ferrer · NIF: 40.XXX.XXX-Y</div>
                    <div>Heredera: D.ª Maria Puig i Costa · Grupo II · Hija</div>
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
                    <FileText size={32} color="var(--mist)" />
                    <span style={{ fontSize: 13, color: "var(--fog)", textAlign: "center" }}>
                      Captura del Modelo 650 generado
                      <br />
                      <span style={{ fontSize: 11 }}>(se proporcionará más adelante)</span>
                    </span>
                  </div>
                  {/* Mini result */}
                  <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: "var(--space-3)", borderTop: "1px solid var(--mist)" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>CUOTA</span>
                    <span className="mono" style={{ fontSize: 18, fontWeight: 700, color: "var(--ulpiano-green)" }}>€ 1.179,00</span>
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
            Preguntas frecuentes sobre el Modelo 650
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
            Otros modelos del Impuesto sobre Sucesiones y Donaciones
          </h2>
          <div className="mod-related-grid" style={{ marginTop: "var(--space-10)" }}>
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
            El Modelo 650 de cada heredero. Calculado, generado y listo para presentar.
          </h2>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0", ...stagger(1) }}>
            Solicita una demo y comprueba cómo Ulpiano genera la autoliquidación
            de cada beneficiario desde los datos del expediente sucesorio.
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
        .mod-obligados-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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
          .mod-obligados-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-ulpiano-grid { grid-template-columns: 1fr; }
          .mod-related-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-summary-row { grid-template-columns: 180px 1fr; }
        }
        @media (max-width: 768px) {
          .mod-obligados-grid { grid-template-columns: 1fr; }
          .mod-related-grid { grid-template-columns: 1fr; }
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
