"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  FileText,
  ClipboardList,
  Gift,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  UserX,
  HandCoins,
  CalendarCheck,
  Merge,
  ArrowRight,
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

const summaryTable = [
  { field: "Denominación oficial", value: "Autoliquidación del ISD — Consolidación de dominio" },
  { field: "Base legal estatal", value: "Art. 26.c) Ley 29/1987 (LISD) + Art. 51.2 RD 1629/1991 (RISD)" },
  { field: "Hecho imponible", value: "Extinción del usufructo y consolidación del pleno dominio en el nudo propietario" },
  { field: "Sujeto pasivo", value: "Nudo propietario que consolida el pleno dominio" },
  { field: "Plazo", value: "6 meses desde la extinción del usufructo" },
  { field: "Administración competente", value: "CA donde se presentó el Modelo 650 original" },
  { field: "Modelo previo", value: "Modelo 650 (autoliquidación por nuda propiedad)" },
];

const extinctionCauses = [
  {
    icon: UserX,
    title: "Fallecimiento del usufructuario",
    desc: "Causa más frecuente. El usufructo vitalicio se extingue con la muerte del usufructuario (Art. 513.1.º CC).",
  },
  {
    icon: HandCoins,
    title: "Renuncia voluntaria",
    desc: "El usufructuario renuncia al derecho de forma expresa. Produce efectos desde la inscripción registral.",
  },
  {
    icon: CalendarCheck,
    title: "Cumplimiento del plazo",
    desc: "Si el usufructo se constituyó por tiempo determinado, se extingue al llegar el término pactado.",
  },
  {
    icon: Merge,
    title: "Reunión de derechos",
    desc: "El nudo propietario adquiere el usufructo (o viceversa) por cualquier título, consolidando ambos derechos.",
  },
];

const calculationRows = [
  { label: "Valor del inmueble (pleno dominio)", value: "€ 425.000,00", note: "", indent: false, highlight: false },
  { label: "Cuota ISD pleno dominio (teórica)", value: "€ 12.400,00", note: "Art. 26.c) LISD", indent: false, highlight: false },
  { label: "Cuota ya ingresada por nuda propiedad", value: "−€ 4.960,00", note: "Modelo 650 original", indent: true, highlight: false },
  { label: "CUOTA COMPLEMENTARIA (Modelo 653)", value: "€ 7.440,00", note: "", indent: false, highlight: true },
];

const faqs = [
  {
    q: "¿Cuándo nace la obligación de presentar el Modelo 653?",
    a: "La obligación nace cuando se extingue el usufructo que fue constituido en la sucesión. La causa más habitual es el fallecimiento del usufructuario (cónyuge viudo). El plazo es de 6 meses desde la fecha de extinción, igual que en el Modelo 650.",
  },
  {
    q: "¿Cómo se calcula la cuota del Modelo 653?",
    a: "Se calcula la cuota que correspondería al pleno dominio del bien aplicando las normas vigentes en el momento de la desmembración original (fallecimiento del primer causante), y se resta la cuota que ya se ingresó por la nuda propiedad en el Modelo 650. La diferencia es la cuota complementaria.",
  },
  {
    q: "¿Se aplican las normas del momento de la consolidación o del momento del fallecimiento original?",
    a: "Se aplican las normas y tipos vigentes en el momento del desmembramiento original (el fallecimiento que generó el Modelo 650), no las del momento de la consolidación. Sin embargo, la edad del usufructuario en el momento de la extinción puede afectar al cálculo de la valoración del usufructo.",
  },
  {
    q: "¿Qué ocurre si no se presentó correctamente el Modelo 650 en su momento?",
    a: "La presentación del Modelo 653 puede revelar inconsistencias con la autoliquidación original. Si la nuda propiedad no se liquidó correctamente, la Administración puede regularizar ambas liquidaciones. Es recomendable revisar el expediente original antes de presentar el 653.",
  },
  {
    q: "¿Puede Ulpiano simular la consolidación antes de que se extinga el usufructo?",
    a: "Sí. Ulpiano permite ejecutar una simulación prospectiva: calcula la cuota complementaria que deberá pagar el nudo propietario cuando se produzca la consolidación, antes de que ocurra. Esto permite al profesional planificar la carga fiscal total de la operación sucesoria desde el inicio.",
  },
];

const relatedModels = [
  { number: "650", name: "Sucesiones", relation: "Autoliquidación original por nuda propiedad", href: "/modelos/modelo-650", icon: FileText },
  { number: "660", name: "Declaración / Inventario", relation: "Inventario de bienes del expediente original", href: "/modelos/modelo-660", icon: ClipboardList },
  { number: "652", name: "Seguros de Vida", relation: "Si hay seguros vinculados a la sucesión", href: "/modelos/modelo-652", icon: Shield },
];

/* ─── Main Component ─── */

export function Modelo653Client() {
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
          653
        </div>

        <div className="container">
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
              <li style={{ color: "rgba(255,255,255,0.8)" }}>Modelo 653</li>
            </ol>
          </nav>

          <div className="reveal" style={stagger(0)}>
            <ModelNav active="653" />
          </div>

          <div className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.5)", marginTop: "var(--space-8)", ...stagger(1) }}>
            MODELO FISCAL
          </div>
          <h1 className="h1 reveal" style={{ color: "var(--white)", maxWidth: 720, marginTop: "var(--space-4)", ...stagger(2) }}>
            Modelo 653: Consolidación de Dominio
          </h1>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginTop: "var(--space-6)", ...stagger(3) }}>
            El Modelo 653 es la autoliquidación complementaria que el nudo propietario
            debe presentar cuando se extingue el usufructo y consolida el pleno dominio
            sobre los bienes heredados. Es el cierre fiscal de una sucesión con
            desmembramiento del dominio.
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
              Base legal: Art. 26.c) LISD + Art. 51.2 RISD
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: QUÉ ES */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>DEFINICIÓN</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            ¿Qué es el Modelo 653?
          </h2>

          <div className="reveal" style={{ maxWidth: 720, marginTop: "var(--space-8)", fontSize: 16, color: "var(--slate)", lineHeight: 1.7, ...stagger(2) }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Cuando en una sucesión se desmembran la nuda propiedad y el usufructo — típicamente,
              los hijos heredan la nuda propiedad y el cónyuge viudo recibe el usufructo —, cada
              heredero tributa en el Modelo 650 solo por el valor de su derecho parcial.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Al extinguirse el usufructo (por fallecimiento del usufructuario, renuncia, cumplimiento
              del plazo o reunión de derechos), el nudo propietario consolida el pleno dominio. En ese
              momento nace la obligación de presentar el Modelo 653: una autoliquidación complementaria
              por la diferencia entre la cuota del pleno dominio y la cuota ya ingresada por la nuda propiedad.
            </p>
            <p>
              El Art. 26.c) de la LISD y el Art. 51.2 del RISD regulan esta liquidación complementaria,
              que se calcula aplicando las normas vigentes en el momento del desmembramiento original,
              no en el de la consolidación.
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

      {/* SECCIÓN 3: TIMELINE – De la nuda propiedad a la consolidación */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>LÍNEA TEMPORAL</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            De la nuda propiedad al pleno dominio
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            El Modelo 653 cierra el ciclo fiscal iniciado con el Modelo 650. Entre ambos
            puede transcurrir un período indefinido.
          </p>

          <div className="reveal mod-timeline" style={{ marginTop: "var(--space-10)", ...stagger(3) }}>
            {/* Year 0 */}
            <div className="mod-timeline__node">
              <div className="mod-timeline__dot mod-timeline__dot--start" />
              <div className="mod-timeline__card">
                <div className="mod-timeline__year">AÑO 0</div>
                <div className="mod-timeline__event">Fallecimiento del causante</div>
                <div className="mod-timeline__detail">
                  Se desmembran nuda propiedad y usufructo. Los herederos presentan
                  el <strong>Modelo 650</strong> tributando solo por la nuda propiedad.
                  El cónyuge viudo recibe el usufructo.
                </div>
                <div className="mod-timeline__tag">
                  <FileText size={14} /> Modelo 650 · Nuda propiedad
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="mod-timeline__connector">
              <div className="mod-timeline__line" />
              <div className="mod-timeline__period">
                <Clock size={14} style={{ flexShrink: 0 }} />
                <span>Período de usufructo — duración indeterminada</span>
              </div>
              <div className="mod-timeline__line" />
            </div>

            {/* Year X */}
            <div className="mod-timeline__node">
              <div className="mod-timeline__dot mod-timeline__dot--end" />
              <div className="mod-timeline__card mod-timeline__card--active">
                <div className="mod-timeline__year">AÑO X</div>
                <div className="mod-timeline__event">Extinción del usufructo</div>
                <div className="mod-timeline__detail">
                  El usufructo se extingue (fallecimiento del usufructuario, renuncia, plazo
                  o reunión). El nudo propietario consolida el pleno dominio y presenta
                  el <strong>Modelo 653</strong>.
                </div>
                <div className="mod-timeline__tag mod-timeline__tag--green">
                  <FileText size={14} /> Modelo 653 · Consolidación
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CAUSAS DE EXTINCIÓN DEL USUFRUCTO */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>HECHO IMPONIBLE</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            Causas de extinción del usufructo
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            El Modelo 653 se presenta cuando el usufructo se extingue por cualquiera
            de estas cuatro causas del Art. 513 del Código Civil.
          </p>

          <div className="mod-extinction-grid" style={{ marginTop: "var(--space-10)" }}>
            {extinctionCauses.map((item, i) => {
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

          {/* Plazo alert */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              background: "var(--warning-bg)",
              border: "1px solid rgba(180,83,9,0.2)",
              borderRadius: 12,
              padding: "var(--space-6)",
              ...stagger(7),
            }}
          >
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--warning)", marginBottom: "var(--space-2)" }}>
                  PLAZO DE PRESENTACIÓN
                </div>
                <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7 }}>
                  El plazo es de <strong>6 meses desde la fecha de extinción del usufructo</strong>.
                  Se aplican los mismos recargos por extemporaneidad del Art. 27 LGT que en el Modelo 650.
                  Si la extinción se produce por fallecimiento del usufructuario, el plazo se cuenta desde esa fecha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CÁLCULO */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>CÁLCULO</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            Cómo se calcula la cuota complementaria
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            La cuota del Modelo 653 es la diferencia entre lo que correspondería por el pleno
            dominio y lo que ya se pagó por la nuda propiedad.
          </p>

          {/* Calculation funnel */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              background: "var(--white)",
              borderRadius: 12,
              border: "1px solid var(--mist)",
              padding: "var(--space-6)",
              maxWidth: 720,
              overflowX: "auto",
              ...stagger(3),
            }}
          >
            <div style={{ fontSize: 13, color: "var(--fog)", marginBottom: "var(--space-4)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Ejemplo: inmueble heredado en nuda propiedad
            </div>
            {calculationRows.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: row.highlight ? "14px 0 4px" : "10px 0",
                  borderTop: row.highlight ? "2px solid var(--mist)" : i > 0 ? "1px dashed var(--mist)" : "none",
                  paddingLeft: row.indent ? "var(--space-4)" : 0,
                  marginTop: row.highlight ? 4 : 0,
                }}
              >
                <span style={{
                  fontSize: row.highlight ? 15 : 14,
                  color: row.indent ? "var(--slate)" : "var(--ink)",
                  fontWeight: row.highlight ? 600 : row.indent ? 400 : 500,
                }}>
                  {row.indent ? "−" : ""} {row.label}
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)", flexShrink: 0 }}>
                  <span className="mono" style={{
                    fontSize: row.highlight ? 20 : 15,
                    color: row.highlight ? "var(--ulpiano-green)" : "var(--ink)",
                    fontWeight: row.highlight ? 700 : 500,
                  }}>
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
          </div>

          {/* Usufruct valuation note */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-8)",
              background: "var(--white)",
              borderRadius: 12,
              border: "1px solid var(--mist)",
              padding: "var(--space-6)",
              maxWidth: 720,
              ...stagger(4),
            }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
              Valoración del usufructo: Art. 26 LISD
            </h3>
            <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
              El valor del usufructo vitalicio se determina con la fórmula:
            </p>
            <div
              style={{
                background: "var(--surface)",
                borderRadius: 8,
                padding: "var(--space-4) var(--space-6)",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 15,
                color: "var(--ink)",
                textAlign: "center",
                marginBottom: "var(--space-4)",
              }}
            >
              Usufructo (%) = 89 − edad del usufructuario
            </div>
            <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Con un mínimo del 10% y un máximo del 70%. La nuda propiedad se valora como:
            </p>
            <div
              style={{
                background: "var(--surface)",
                borderRadius: 8,
                padding: "var(--space-4) var(--space-6)",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 15,
                color: "var(--ink)",
                textAlign: "center",
                marginBottom: "var(--space-4)",
              }}
            >
              Nuda propiedad (%) = 100 − Usufructo (%)
            </div>
            <p style={{ fontSize: 13, color: "var(--fog)", lineHeight: 1.6 }}>
              Ejemplo: usufructuario de 72 años → usufructo = 89 − 72 = 17% → nuda propiedad = 83%.
              Al consolidar, se tributa por la diferencia hasta el 100%.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: VALOR ULPIANO — Simulación prospectiva */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>CON ULPIANO</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            Simulación prospectiva: calcular la consolidación antes de que ocurra
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Ulpiano no espera a que el usufructo se extinga. Simula la cuota complementaria
            desde el momento de la planificación sucesoria para que el profesional conozca
            el coste fiscal total.
          </p>

          <div className="mod-ulpiano-grid" style={{ marginTop: "var(--space-10)" }}>
            {/* Left: value points */}
            <div>
              {[
                { title: "Cuota complementaria calculada antes del hecho imponible", desc: "Al configurar el expediente sucesorio, Ulpiano proyecta la cuota del Modelo 653 que se generará cuando el usufructo se extinga. El profesional ve la carga fiscal total desde el inicio." },
                { title: "Comparación de escenarios: usufructo vs. pleno dominio directo", desc: "¿Merece la pena constituir usufructo? Ulpiano calcula ambos escenarios y muestra la diferencia fiscal entre la tributación con desmembramiento (650 + 653) y la tributación directa por pleno dominio." },
                { title: "Alerta automática cuando se extingue el usufructo", desc: "Ulpiano monitoriza las condiciones de extinción y genera la alerta de presentación del Modelo 653 cuando llega el momento, con la cuota precalculada y el plazo de 6 meses." },
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
                <Link href="/soluciones/planificacion-sucesoria" className="btn-ghost btn-ghost--dark">
                  Ver planificación sucesoria →
                </Link>
              </div>
            </div>

            {/* Right: Mockup — Scenario comparison */}
            <div className="reveal" style={stagger(4)}>
              <div
                style={{
                  background: "var(--surface)",
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
                  ✓ Simulación prospectiva
                </div>
                {/* Chrome bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", background: "var(--white)", borderBottom: "1px solid var(--mist)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <span style={{ fontSize: 12, color: "var(--fog)", marginLeft: 8, fontWeight: 500 }}>Comparador de escenarios</span>
                </div>

                {/* Scenario comparison */}
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-4)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Inmueble: € 425.000
                  </div>

                  {/* Scenario A */}
                  <div style={{ background: "var(--white)", borderRadius: 8, border: "1px solid var(--mist)", padding: "var(--space-4)", marginBottom: "var(--space-3)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--slate)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Escenario A · Con usufructo</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--slate)", marginBottom: 6 }}>
                      <span>Modelo 650 (nuda propiedad)</span>
                      <span className="mono" style={{ fontWeight: 500 }}>€ 4.960</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--slate)", marginBottom: 6 }}>
                      <span>Modelo 653 (consolidación)</span>
                      <span className="mono" style={{ fontWeight: 500 }}>€ 7.440</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600, color: "var(--ink)", paddingTop: "var(--space-2)", borderTop: "1px solid var(--mist)" }}>
                      <span>Total tributación</span>
                      <span className="mono">€ 12.400</span>
                    </div>
                  </div>

                  {/* Scenario B */}
                  <div style={{ background: "var(--white)", borderRadius: 8, border: "1px solid var(--mist)", padding: "var(--space-4)", marginBottom: "var(--space-4)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--slate)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Escenario B · Pleno dominio directo</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--slate)", marginBottom: 6 }}>
                      <span>Modelo 650 (pleno dominio)</span>
                      <span className="mono" style={{ fontWeight: 500 }}>€ 12.400</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600, color: "var(--ink)", paddingTop: "var(--space-2)", borderTop: "1px solid var(--mist)" }}>
                      <span>Total tributación</span>
                      <span className="mono">€ 12.400</span>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: 13, color: "var(--ulpiano-green)", fontWeight: 500 }}>
                    <ArrowRight size={14} />
                    <span>Diferencia fiscal entre escenarios: € 0 (mismo coste final)</span>
                  </div>
                  <p style={{ fontSize: 12, color: "var(--fog)", marginTop: "var(--space-2)", lineHeight: 1.5 }}>
                    El desmembramiento difiere el pago pero no lo reduce. El valor está en la planificación de tesorería.
                  </p>

                  {/* Placeholder */}
                  <div
                    style={{
                      background: "var(--surface)",
                      borderRadius: 8,
                      padding: "var(--space-6) var(--space-4)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "var(--space-3)",
                      minHeight: 80,
                      border: "1px dashed var(--mist)",
                      marginTop: "var(--space-4)",
                    }}
                  >
                    <FileText size={24} color="var(--mist)" />
                    <span style={{ fontSize: 12, color: "var(--fog)", textAlign: "center" }}>
                      Captura del comparador de escenarios
                      <br />
                      <span style={{ fontSize: 11 }}>(se proporcionará más adelante)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: FAQ */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>FAQ</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 520, ...stagger(1) }}>
            Preguntas frecuentes sobre el Modelo 653
          </h2>
          <div className="reveal" style={{ marginTop: "var(--space-10)", maxWidth: 720, ...stagger(2) }}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: MODELOS RELACIONADOS */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
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

      {/* SECCIÓN 9: CTA FINAL */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2 reveal" style={{ color: "var(--white)", maxWidth: 640, margin: "0 auto" }}>
            El coste fiscal del usufructo, calculado antes de constituirlo.
          </h2>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0", ...stagger(1) }}>
            Solicita una demo y comprueba cómo Ulpiano simula la consolidación de dominio
            y compara escenarios sucesorios antes de tomar decisiones.
          </p>
          <div className="reveal" style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", marginTop: "var(--space-10)", flexWrap: "wrap", ...stagger(2) }}>
            <Link href="/demo" className="btn-primary">Solicita tu demo</Link>
            <Link href="/soluciones/planificacion-sucesoria" className="btn-ghost">Ver planificación sucesoria →</Link>
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
        .mod-extinction-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        /* Timeline */
        .mod-timeline {
          display: flex;
          align-items: stretch;
          gap: 0;
          max-width: 860px;
        }
        .mod-timeline__node {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .mod-timeline__dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 3px solid var(--mist);
          background: var(--white);
          margin-bottom: var(--space-4);
          position: relative;
          z-index: 2;
        }
        .mod-timeline__dot--start {
          border-color: var(--slate);
          background: var(--slate);
        }
        .mod-timeline__dot--end {
          border-color: var(--ulpiano-green);
          background: var(--ulpiano-green);
        }
        .mod-timeline__card {
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: 12px;
          padding: var(--space-5);
          width: 100%;
        }
        .mod-timeline__card--active {
          border-color: var(--ulpiano-green);
          box-shadow: 0 0 0 3px rgba(45,106,79,0.1);
        }
        .mod-timeline__year {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 700;
          color: var(--fog);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: var(--space-2);
        }
        .mod-timeline__event {
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: var(--space-2);
        }
        .mod-timeline__detail {
          font-size: 14px;
          color: var(--slate);
          line-height: 1.6;
          margin-bottom: var(--space-3);
        }
        .mod-timeline__tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: var(--slate);
          background: var(--surface);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .mod-timeline__tag--green {
          color: #2D6A4F;
          background: var(--green-bg);
        }
        .mod-timeline__connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 140px;
          padding: 0 var(--space-3);
          position: relative;
        }
        .mod-timeline__line {
          flex: 1;
          width: 2px;
          background: repeating-linear-gradient(
            to bottom,
            var(--mist) 0,
            var(--mist) 6px,
            transparent 6px,
            transparent 12px
          );
          min-height: 24px;
        }
        .mod-timeline__period {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--fog);
          text-align: center;
          padding: var(--space-2) var(--space-3);
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: 6px;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .mod-extinction-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-ulpiano-grid { grid-template-columns: 1fr; }
          .mod-related-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-summary-row { grid-template-columns: 180px 1fr; }
        }
        @media (max-width: 768px) {
          .mod-extinction-grid { grid-template-columns: 1fr; }
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
          .mod-timeline {
            flex-direction: column;
            align-items: stretch;
          }
          .mod-timeline__connector {
            flex-direction: row;
            min-width: unset;
            min-height: unset;
            padding: var(--space-3) 0;
          }
          .mod-timeline__line {
            flex: 1;
            height: 2px;
            width: auto;
            min-height: unset;
            background: repeating-linear-gradient(
              to right,
              var(--mist) 0,
              var(--mist) 6px,
              transparent 6px,
              transparent 12px
            );
          }
        }
      `}</style>
    </div>
  );
}
