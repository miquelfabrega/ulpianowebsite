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
  ArrowRightLeft,
  Scale,
  Clock,
  Building2,
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
  { label: "Base imponible", value: "€ 200.000,00", note: "Valor real del bien donado", indent: false },
  { label: "Reducción parentesco (hijo)", value: "−€ 60.000,00", note: "Art. 15 Llei 19/2010 (Grupo II)", indent: true },
  { label: "Base liquidable", value: "€ 140.000,00", note: "", indent: false },
  { label: "Tarifa progresiva", value: "€ 14.560,00", note: "Escala autonómica donaciones", indent: false },
  { label: "Coeficiente multiplicador", value: "× 1,0000", note: "Grupo II, patrimonio < 500.000€", indent: false },
  { label: "Cuota íntegra", value: "€ 14.560,00", note: "", indent: false },
  { label: "Bonificación cónyuge/desc.", value: "−€ 8.736,00", note: "Art. 22 Llei 19/2010 (≈60%)", indent: true },
];

const donationReductions = [
  { concept: "Grupo I (desc. < 21 años)", law: "Art. 15.1", amount: "60.000€ + 12.000€/año < 21, máx. 196.000€" },
  { concept: "Grupo II (desc. ≥ 21, cónyuge, asc.)", law: "Art. 15.2", amount: "60.000€" },
  { concept: "Grupo III (col. 2.º y 3.er grado)", law: "Art. 15.3", amount: "8.000€" },
  { concept: "Grupo IV (col. 4.º y extraños)", law: "Art. 15.4", amount: "Sin reducción" },
  { concept: "Vivienda habitual (primera)", law: "Art. 16", amount: "95%, máx. 60.000€ (< 36 años o discap.)" },
  { concept: "Empresa familiar / part. sociales", law: "Art. 17", amount: "95% del valor" },
  { concept: "Donación dineraria primera vivienda", law: "Art. 18", amount: "95%, máx. 60.000€ (discap.: 120.000€)" },
  { concept: "Discapacidad ≥ 33%", law: "Art. 19", amount: "120.000€" },
  { concept: "Discapacidad ≥ 65%", law: "Art. 19", amount: "240.000€" },
  { concept: "Bonificación cónyuge/desc.", law: "Art. 22", amount: "Hasta 60% de la cuota (variable)" },
];

const comparisonData = [
  { aspect: "Modelo tributario", donation: "651", succession: "650" },
  { aspect: "Hecho imponible", donation: "Transmisión inter vivos gratuita", succession: "Adquisición mortis causa" },
  { aspect: "Sujeto pasivo", donation: "Donatario (quien recibe)", succession: "Heredero / Legatario" },
  { aspect: "Plazo de presentación", donation: "30 días hábiles desde la donación", succession: "6 meses desde el fallecimiento" },
  { aspect: "Reducción parentesco (Grupo II)", donation: "60.000€", succession: "100.000€" },
  { aspect: "Red. vivienda habitual", donation: "95% (máx. 60.000€)", succession: "95% (máx. 500.000€)" },
  { aspect: "Bonificación Grupo II", donation: "Hasta ~60% (Art. 22)", succession: "Hasta ~99% (Art. 12)" },
  { aspect: "IRPF del transmitente", donation: "Sí — ganancia patrimonial", succession: "No — plusvalía del muerto" },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre el Modelo 651 y el Modelo 650?",
    a: "El Modelo 651 liquida donaciones (transmisiones inter vivos gratuitas): el donante transmite en vida. El Modelo 650 liquida sucesiones (adquisiciones mortis causa): los bienes se transmiten por fallecimiento. Las reducciones y bonificaciones son distintas — en general, la sucesión tributa menos que la donación en Catalunya gracias a la bonificación de hasta el 99% en cuota para Grupos I y II.",
  },
  {
    q: "¿Tiene la donación implicaciones en el IRPF del donante?",
    a: "Sí. A diferencia de la sucesión, la donación genera una ganancia patrimonial en el IRPF del donante por la diferencia entre el valor de adquisición y el valor real del bien en el momento de la donación. En sucesiones, existe la exención conocida como 'plusvalía del muerto' (Art. 33.3.b LIRPF). Esta tributación adicional en IRPF debe valorarse siempre al planificar una donación.",
  },
  {
    q: "¿Cuál es el plazo para presentar el Modelo 651?",
    a: "30 días hábiles desde la fecha de la donación (fecha de la escritura pública o del acto que formalice la transmisión). No se computan sábados, domingos ni festivos. No existe prórroga como en sucesiones. Si se presenta fuera de plazo, se aplican los recargos del Art. 27 LGT.",
  },
  {
    q: "¿Qué reducciones se aplican a las donaciones en Catalunya?",
    a: "La Llei 19/2010 (Títol II, Arts. 15-23) establece reducciones por parentesco (hasta 196.000€ para menores de 21 años, 60.000€ para Grupo II), primera vivienda (95%, máx. 60.000€), empresa familiar (95%), discapacidad (120.000€ o 240.000€) y donaciones dinerarias para primera vivienda. La bonificación en cuota para cónyuge y descendientes puede alcanzar el 60%.",
  },
  {
    q: "¿Puede Ulpiano calcular y comparar donación vs herencia?",
    a: "Sí. Ulpiano genera el Modelo 651 automáticamente y además permite comparar escenarios: qué coste fiscal tendría transmitir un bien en vida (donación) frente a transmitirlo por herencia. El comparador incluye el impacto en IRPF del donante y la diferencia de reducciones y bonificaciones entre ambas vías.",
  },
];

const relatedModels = [
  { number: "650", name: "Sucesiones", relation: "Si la transmisión es mortis causa, no inter vivos", href: "/modelos/modelo-650", icon: FileText },
  { number: "660", name: "Declaración / Inventario", relation: "Inventario patrimonial que acompaña al 650", href: "/modelos/modelo-660", icon: ClipboardList },
  { number: "652", name: "Seguros de Vida", relation: "Cuando el beneficiario de un seguro tributa aparte", href: "/modelos/modelo-652", icon: Shield },
  { number: "653", name: "Consolidación de Dominio", relation: "Extinción del usufructo constituido", href: "/modelos/modelo-653", icon: Layers },
];

const summaryTable = [
  { field: "Denominación oficial", value: "Autoliquidación del ISD — Donaciones" },
  { field: "Base legal estatal", value: "Ley 29/1987 (LISD) + RD 1629/1991 (RISD)" },
  { field: "Base legal autonómica", value: "Llei 19/2010, Títol II (Arts. 15-23)" },
  { field: "Hecho imponible", value: "Adquisición de bienes y derechos por donación o cualquier negocio jurídico gratuito inter vivos" },
  { field: "Sujeto pasivo", value: "El donatario (quien recibe la donación)" },
  { field: "Plazo", value: "30 días hábiles desde la fecha de la donación" },
  { field: "Administración competente", value: "CA de residencia habitual del donatario (ATC en Catalunya)" },
  { field: "IRPF del donante", value: "Ganancia patrimonial tributable en IRPF del transmitente" },
];

/* ─── Main Component ─── */

export function Modelo651Client() {
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
          651
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
              <li style={{ color: "rgba(255,255,255,0.8)" }}>Modelo 651</li>
            </ol>
          </nav>

          <div className="reveal" style={stagger(0)}>
            <ModelNav active="651" />
          </div>

          <div className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.5)", marginTop: "var(--space-8)", ...stagger(1) }}>
            MODELO FISCAL
          </div>
          <h1 className="h1 reveal" style={{ color: "var(--white)", maxWidth: 720, marginTop: "var(--space-4)", ...stagger(2) }}>
            Modelo 651: Autoliquidación del Impuesto de Donaciones
          </h1>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginTop: "var(--space-6)", ...stagger(3) }}>
            El Modelo 651 es el formulario de autoliquidación que el donatario
            debe presentar para liquidar el Impuesto sobre Sucesiones y
            Donaciones (ISD) en su modalidad de adquisiciones inter vivos
            gratuitas — donaciones.
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
              Normativa aplicable en Catalunya: Llei 19/2010, Títol II (Arts. 15-23)
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: QUÉ ES */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>DEFINICIÓN</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            ¿Qué es el Modelo 651?
          </h2>

          <div className="reveal" style={{ maxWidth: 720, marginTop: "var(--space-8)", fontSize: 16, color: "var(--slate)", lineHeight: 1.7, ...stagger(2) }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              El Modelo 651 es el documento de autoliquidación del Impuesto sobre Sucesiones
              y Donaciones (ISD) en su modalidad de adquisiciones inter vivos gratuitas. Quien
              recibe una donación — el donatario — debe presentar este modelo ante la
              administración tributaria de la comunidad autónoma donde tiene su residencia
              habitual.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              En Catalunya, la gestión del impuesto corresponde a la Agència Tributària de
              Catalunya (ATC). Las reducciones y bonificaciones específicas para donaciones se
              regulan en el Títol II de la Llei 19/2010 (Arts. 15-23), con importes y
              porcentajes distintos a los aplicables en sucesiones.
            </p>
            <p>
              A diferencia del Modelo 650, el Modelo 651 tiene implicaciones fiscales
              bidireccionales: el donatario tributa por ISD y el donante puede generar una
              ganancia patrimonial en su IRPF por la transmisión del bien.
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
            ¿Quién debe presentar el Modelo 651?
          </h2>
          <p className="reveal body-lg" style={{ color: "var(--slate)", maxWidth: 720, marginTop: "var(--space-6)", ...stagger(2) }}>
            Está obligado a presentar el Modelo 651 toda persona física que
            adquiera bienes o derechos por donación o cualquier negocio jurídico
            gratuito inter vivos. La obligación recae siempre en el donatario —
            quien recibe.
          </p>

          <div className="mod-obligados-grid" style={{ marginTop: "var(--space-10)" }}>
            {[
              { icon: Gift, title: "Donatarios de bienes inmuebles", desc: "Quienes reciben un inmueble (vivienda, local, terreno) por donación. La donación debe formalizarse en escritura pública. El donatario tributa por ISD y el donante por la ganancia patrimonial en IRPF." },
              { icon: Users, title: "Donatarios de bienes muebles y dinero", desc: "Quienes reciben dinero, acciones, vehículos u otros bienes muebles. Las donaciones de dinero requieren acreditación bancaria del origen y destino de los fondos." },
              { icon: Building2, title: "Donatarios de empresa familiar", desc: "Quienes reciben participaciones en empresas familiares o negocios profesionales. Aplicable la reducción del 95% del Art. 17 si se cumplen los requisitos de mantenimiento." },
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

          {/* Alerta de plazo */}
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
                  PLAZO: 30 DÍAS HÁBILES
                </div>
                <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
                  El plazo de presentación del Modelo 651 es de 30 días hábiles
                  desde la fecha de la donación (fecha de la escritura pública o del
                  acto formal de transmisión). No se computan sábados, domingos ni
                  festivos. No existe prórroga como en el caso de sucesiones.
                </p>
                <ul style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Hasta 3 meses de retraso: 5% (sin intereses ni sanción)</li>
                  <li>De 3 a 6 meses: 10%</li>
                  <li>De 6 a 12 meses: 15%</li>
                  <li>Más de 12 meses: 20% + intereses de demora</li>
                </ul>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6, marginTop: "var(--space-3)" }}>
                  Ulpiano calcula el plazo automáticamente y alerta al profesional
                  antes de que venza.
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
            Cómo se calcula la cuota del Modelo 651
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Ejemplo: donación de €200.000 de padre a hijo mayor de 21 años en Catalunya.
            El embudo de liquidación sigue la misma estructura que el 650, pero con
            reducciones y bonificaciones propias de donaciones.
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
                € 5.824,00
              </span>
            </div>
          </div>

          {/* Reductions table */}
          <div className="reveal" style={{ marginTop: "var(--space-12)", ...stagger(4) }}>
            <h3 style={{ marginBottom: "var(--space-6)" }}>Reducciones en donaciones — Catalunya (Llei 19/2010, Títol II)</h3>
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
                  {donationReductions.map((r) => (
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

      {/* SECCIÓN 5: COMPARATIVA DONACIÓN vs HERENCIA */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>COMPARATIVA</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            Donación vs Herencia: la decisión que más impacta
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Transmitir un patrimonio de €200.000 a un hijo en Catalunya tiene un coste
            fiscal muy distinto según la vía elegida. Esta comparativa resume las
            diferencias clave entre el Modelo 651 (donación) y el Modelo 650 (sucesión).
          </p>

          {/* Comparison table */}
          <div className="reveal" style={{ marginTop: "var(--space-10)", overflowX: "auto", ...stagger(3) }}>
            <table className="mod-table mod-compare-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Gift size={14} /> Donación (651)
                    </div>
                  </th>
                  <th>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FileText size={14} /> Sucesión (650)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.aspect}>
                    <td style={{ fontWeight: 500 }}>{row.aspect}</td>
                    <td>{row.donation}</td>
                    <td>{row.succession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Result comparison cards */}
          <div className="mod-compare-result reveal" style={{ marginTop: "var(--space-10)", ...stagger(4) }}>
            <div className="mod-compare-card">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(180,83,9,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Gift size={18} color="var(--warning)" />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--slate)" }}>Donación (651)</div>
                  <div style={{ fontSize: 13, color: "var(--fog)" }}>€200.000 padre → hijo</div>
                </div>
              </div>
              <div className="mono" style={{ fontSize: 28, fontWeight: 700, color: "var(--warning)" }}>€ 5.824</div>
              <div style={{ fontSize: 13, color: "var(--slate)", marginTop: "var(--space-2)" }}>Cuota ISD + impacto IRPF donante</div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--white)", border: "1px solid var(--mist)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowRightLeft size={20} color="var(--slate)" />
              </div>
            </div>

            <div className="mod-compare-card">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--green-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FileText size={18} color="var(--ulpiano-green)" />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--slate)" }}>Sucesión (650)</div>
                  <div style={{ fontSize: 13, color: "var(--fog)" }}>€200.000 herencia hijo</div>
                </div>
              </div>
              <div className="mono" style={{ fontSize: 28, fontWeight: 700, color: "var(--ulpiano-green)" }}>€ 1.179</div>
              <div style={{ fontSize: 13, color: "var(--slate)", marginTop: "var(--space-2)" }}>Cuota ISD (sin IRPF)</div>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "var(--space-8)", textAlign: "center", ...stagger(5) }}>
            <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto var(--space-6)" }}>
              La diferencia no siempre favorece la sucesión. Hay casos donde donar en vida
              tiene ventajas estratégicas. Ulpiano compara ambos escenarios con los números
              reales del patrimonio familiar.
            </p>
            <Link href="/soluciones/planificacion-sucesoria" className="btn-ghost btn-ghost--dark">
              Comparar escenarios con Ulpiano →
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CÓMO ULPIANO LO GENERA */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>CON ULPIANO</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            El Modelo 651, calculado y comparado automáticamente
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Introduces los datos de la donación. Ulpiano calcula la cuota del donatario,
            estima el impacto en IRPF del donante y compara con el escenario sucesorio.
          </p>

          <div className="mod-ulpiano-grid" style={{ marginTop: "var(--space-10)" }}>
            {/* Left: points of value */}
            <div>
              {[
                { title: "Cuota del donatario con reducciones aplicadas", desc: "El motor fiscal aplica automáticamente las reducciones del Títol II de la Llei 19/2010 según parentesco, tipo de bien y circunstancias personales del donatario." },
                { title: "Impacto en IRPF del donante calculado", desc: "Ulpiano estima la ganancia patrimonial que la donación genera en el IRPF del donante — un coste que no existe en la sucesión y que muchos profesionales olvidan cuantificar." },
                { title: "Comparativa donación vs herencia en un clic", desc: "El comparador de escenarios muestra el coste fiscal total (ISD + IRPF) de transmitir en vida frente a transmitir por herencia, para que el profesional asesore con números." },
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
                  Ver comparador de escenarios →
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
                  ✓ Donación vs Herencia
                </div>
                {/* Chrome bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", background: "var(--surface)", borderBottom: "1px solid var(--mist)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mist)" }} />
                  <span style={{ fontSize: 12, color: "var(--fog)", marginLeft: 8, fontWeight: 500 }}>Modelo 651 — Comparativa</span>
                </div>
                {/* Content */}
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", letterSpacing: "0.04em" }}>MODELO 651</div>
                    <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 4 }}>Impuesto sobre Donaciones — Autoliquidación</div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--slate)", marginBottom: "var(--space-4)", borderBottom: "1px solid var(--mist)", paddingBottom: "var(--space-3)" }}>
                    <div>Donante: D. Joan Puig i Ferrer · NIF: 40.XXX.XXX-Y</div>
                    <div>Donatario: D. Marc Puig i Costa · Grupo II · Hijo</div>
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
                    <Scale size={32} color="var(--mist)" />
                    <span style={{ fontSize: 13, color: "var(--fog)", textAlign: "center" }}>
                      Captura de la comparativa donación vs herencia
                      <br />
                      <span style={{ fontSize: 11 }}>(se proporcionará más adelante)</span>
                    </span>
                  </div>
                  {/* Mini result comparison */}
                  <div style={{ marginTop: "var(--space-4)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", paddingTop: "var(--space-3)", borderTop: "1px solid var(--mist)" }}>
                    <div>
                      <span style={{ fontSize: 11, color: "var(--fog)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Donación</span>
                      <div className="mono" style={{ fontSize: 16, fontWeight: 700, color: "var(--warning)", marginTop: 2 }}>€ 5.824</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: 11, color: "var(--fog)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Sucesión</span>
                      <div className="mono" style={{ fontSize: 16, fontWeight: 700, color: "var(--ulpiano-green)", marginTop: 2 }}>€ 1.179</div>
                    </div>
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
            Preguntas frecuentes sobre el Modelo 651
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
            ¿Donación o herencia? La respuesta está en los números.
          </h2>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0", ...stagger(1) }}>
            Solicita una demo y comprueba cómo Ulpiano calcula, compara y genera
            la autoliquidación de donaciones con el impacto fiscal completo.
          </p>
          <div className="reveal" style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", marginTop: "var(--space-10)", flexWrap: "wrap", ...stagger(2) }}>
            <Link href="/demo" className="btn-primary">Solicita tu demo</Link>
            <Link href="/soluciones/planificacion-sucesoria" className="btn-ghost">Comparar escenarios →</Link>
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
        .mod-compare-table th:nth-child(2) {
          background: rgba(180,83,9,0.06);
        }
        .mod-compare-table th:nth-child(3) {
          background: rgba(45,106,79,0.06);
        }
        .mod-compare-table td:nth-child(2) {
          background: rgba(180,83,9,0.03);
        }
        .mod-compare-table td:nth-child(3) {
          background: rgba(45,106,79,0.03);
        }
        .mod-compare-result {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: var(--space-6);
          align-items: center;
        }
        .mod-compare-card {
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: 12px;
          padding: var(--space-6);
        }

        @media (max-width: 1024px) {
          .mod-obligados-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-ulpiano-grid { grid-template-columns: 1fr; }
          .mod-related-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-summary-row { grid-template-columns: 180px 1fr; }
        }
        @media (max-width: 768px) {
          .mod-obligados-grid { grid-template-columns: 1fr; }
          .mod-related-grid { grid-template-columns: 1fr; }
          .mod-compare-result { grid-template-columns: 1fr; }
          .mod-compare-result > div:nth-child(2) { transform: rotate(90deg); }
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
