"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Home,
  Landmark,
  TrendingUp,
  Shield,
  Package,
  MinusCircle,
  CheckCircle,
  ChevronDown,
  FileText,
  AlertTriangle,
  ClipboardList,
  Gift,
  Layers,
  Users,
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

const inventoryBlocks = [
  {
    icon: Home,
    title: "Bienes inmuebles",
    fields: "Dirección, referencia catastral, valor, cargas, uso (habitual / arrendado / vacío)",
    color: "var(--ulpiano-green)",
    bg: "var(--green-bg)",
    badgeBg: undefined,
  },
  {
    icon: Landmark,
    title: "Cuentas bancarias",
    fields: "Entidad, IBAN, saldo a fecha de fallecimiento",
    color: "var(--ulpiano-green)",
    bg: "var(--green-bg)",
    badgeBg: undefined,
  },
  {
    icon: TrendingUp,
    title: "Valores y participaciones",
    fields: "Acciones, fondos de inversión, participaciones societarias, valor a fecha de devengo",
    color: "var(--ulpiano-green)",
    bg: "var(--green-bg)",
    badgeBg: undefined,
  },
  {
    icon: Shield,
    title: "Seguros de vida",
    fields: "Compañía, número de póliza, capital asegurado, beneficiario designado",
    color: "var(--ulpiano-green)",
    bg: "var(--green-bg)",
    badgeBg: undefined,
  },
  {
    icon: Package,
    title: "Ajuar doméstico",
    fields: "Presunción del 3% (Art. 15 LISD), vehículos, joyas, obras de arte, enseres",
    color: "var(--ulpiano-green)",
    bg: "var(--green-bg)",
    badgeBg: undefined,
  },
  {
    icon: MinusCircle,
    title: "Pasivos deducibles",
    fields: "Hipotecas pendientes, deudas acreditadas, gastos de última enfermedad, gastos funerarios",
    color: "var(--warning)",
    bg: "var(--warning-bg)",
    badgeBg: "var(--warning-bg)",
  },
];

const documentationRows = [
  { category: "Inmuebles", docs: "Escritura de propiedad, nota simple registral actualizada, recibo del IBI (valor catastral), certificado de cargas" },
  { category: "Cuentas bancarias", docs: "Certificado de saldos a fecha de fallecimiento emitido por cada entidad" },
  { category: "Valores cotizados", docs: "Certificado de posiciones de la entidad depositaria a fecha de devengo" },
  { category: "Participaciones societarias", docs: "Certificado del administrador con valor teórico contable, últimas cuentas anuales depositadas" },
  { category: "Seguros de vida", docs: "Certificado de la compañía aseguradora con capital, beneficiario y fecha de vencimiento" },
  { category: "Vehículos", docs: "Permiso de circulación, ficha técnica, tablas de valoración de Hacienda" },
  { category: "Deudas y cargas", docs: "Certificado del saldo pendiente de préstamos hipotecarios, facturas de última enfermedad, factura funeraria" },
  { category: "Ajuar doméstico", docs: "Se presume el 3% del caudal relicto (Art. 15 LISD) salvo prueba en contrario de un valor inferior o superior" },
];

const summaryTable = [
  { field: "Denominación oficial", value: "Declaración del Impuesto sobre Sucesiones — Inventario de Bienes" },
  { field: "Base legal estatal", value: "Art. 31 Ley 29/1987 (LISD) + Arts. 37-38 RD 1629/1991 (RISD)" },
  { field: "Hecho imponible", value: "No es autoliquidación — declara el inventario patrimonial del causante" },
  { field: "Presentación", value: "Un único Modelo 660 por sucesión (no uno por heredero)" },
  { field: "Plazo", value: "6 meses desde el fallecimiento (prorrogable 6 meses más)" },
  { field: "Administración competente", value: "CA de residencia habitual del causante (ATC en Catalunya)" },
  { field: "Acompaña a", value: "Modelo 650 (Autoliquidación individual de cada heredero)" },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre el Modelo 660 y el Modelo 650?",
    a: "El Modelo 660 es la declaración del inventario patrimonial: enumera todos los bienes, derechos y deudas del causante. No contiene cálculo tributario. El Modelo 650 es la autoliquidación individual donde cada heredero calcula su cuota. Se presentan conjuntamente: un único 660 con tantos 650 como herederos.",
  },
  {
    q: "¿Se presenta un Modelo 660 por cada heredero?",
    a: "No. A diferencia del Modelo 650, el Modelo 660 es único por sucesión. El inventario patrimonial es común a todos los herederos — lo que varía entre ellos es la cuota tributaria, que se recoge en su Modelo 650 individual.",
  },
  {
    q: "¿Qué ocurre si un bien no se incluye en el Modelo 660?",
    a: "Si la Administración detecta bienes no declarados, puede iniciar un procedimiento de comprobación de valores (Art. 34 LISD) y practicar una liquidación complementaria con recargos e intereses. Es fundamental que el inventario sea exhaustivo.",
  },
  {
    q: "¿Cómo se valora el ajuar doméstico?",
    a: "El Art. 15 de la LISD establece una presunción del 3% del caudal relicto como valor del ajuar doméstico. Este porcentaje se aplica automáticamente salvo que se demuestre un valor inferior (por ejemplo, si el causante vivía de alquiler y no tenía enseres significativos) o superior.",
  },
  {
    q: "¿Qué deudas son deducibles en el Modelo 660?",
    a: "Son deducibles las deudas del causante acreditadas documentalmente a la fecha de fallecimiento: hipotecas pendientes, préstamos, deudas tributarias, gastos de última enfermedad y gastos de entierro y funeral. La carga de la prueba corresponde al contribuyente.",
  },
  {
    q: "¿Puede Ulpiano generar el Modelo 660 automáticamente?",
    a: "Sí. Ulpiano toma el inventario patrimonial del expediente sucesorio — con cada bien ya categorizado y valorado — y genera el Modelo 660 completo. El mismo inventario alimenta los Modelos 650 de cada heredero. Sin duplicar datos ni transcribir formularios.",
  },
];

const relatedModels = [
  { number: "650", name: "Sucesiones", relation: "Siempre acompaña al Modelo 660 — un 650 por cada heredero", href: "/modelos/modelo-650", icon: Users },
  { number: "652", name: "Seguros de Vida", relation: "Seguros declarados en el inventario pueden tributar con modelo propio", href: "/modelos/modelo-652", icon: Shield },
  { number: "653", name: "Consolidación de Dominio", relation: "Referencia el inventario original del Modelo 660", href: "/modelos/modelo-653", icon: Layers },
];

/* ─── Main Component ─── */

export function Modelo660Client() {
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
          660
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
              <li style={{ color: "rgba(255,255,255,0.8)" }}>Modelo 660</li>
            </ol>
          </nav>

          <div className="reveal" style={stagger(0)}>
            <ModelNav active="660" />
          </div>

          <div className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.5)", marginTop: "var(--space-8)", ...stagger(1) }}>
            MODELO FISCAL
          </div>
          <h1 className="h1 reveal" style={{ color: "var(--white)", maxWidth: 720, marginTop: "var(--space-4)", ...stagger(2) }}>
            Modelo 660: Declaración de Sucesiones (Inventario de Bienes)
          </h1>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginTop: "var(--space-6)", ...stagger(3) }}>
            El Modelo 660 es la declaración que acompaña al Modelo 650: recoge el
            inventario completo de bienes, derechos y deudas deducibles del
            causante. No es una autoliquidación — no calcula cuota tributaria —
            sino el soporte documental que fundamenta la liquidación de cada heredero.
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
              Un único Modelo 660 por sucesión · Art. 31 LISD + Arts. 37-38 RISD
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: QUÉ ES */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>DEFINICIÓN</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 560, ...stagger(1) }}>
            ¿Qué es el Modelo 660?
          </h2>

          <div className="reveal" style={{ maxWidth: 720, marginTop: "var(--space-8)", fontSize: 16, color: "var(--slate)", lineHeight: 1.7, ...stagger(2) }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              El Modelo 660 es la declaración del inventario patrimonial del causante
              que debe acompañar a la autoliquidación del Impuesto sobre Sucesiones
              (Modelo 650). Su función es catalogar todos los bienes, derechos y
              deudas deducibles que componen el caudal relicto.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              A diferencia del Modelo 650 — que es individual y contiene el cálculo
              de la cuota de cada heredero — el Modelo 660 es único por sucesión.
              Todos los herederos comparten el mismo inventario; lo que difiere
              entre ellos es su participación en el reparto y su tributación individual.
            </p>
            <p>
              El Modelo 660 no calcula ni liquida ningún impuesto. Es un documento
              de soporte que recoge la base patrimonial sobre la que se construyen
              las autoliquidaciones individuales de los Modelos 650.
            </p>
          </div>

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

      {/* SECCIÓN 3: BLOQUES DEL INVENTARIO */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>CONTENIDO DEL INVENTARIO</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            Qué se declara en el Modelo 660
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            El inventario se organiza en categorías patrimoniales. Cada una requiere
            datos específicos y documentación acreditativa.
          </p>

          <div className="mod-inventory-grid" style={{ marginTop: "var(--space-10)" }}>
            {inventoryBlocks.map((block, i) => {
              const Icon = block.icon;
              return (
                <div key={block.title} className="card reveal" style={stagger(i + 3)}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: block.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color={block.color} />
                    </div>
                    <h3 style={{ margin: 0 }}>{block.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.7 }}>
                    {block.fields}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Diferencia clave */}
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-10)",
              background: "var(--green-bg)",
              border: "1px solid rgba(45,106,79,0.2)",
              borderRadius: 12,
              padding: "var(--space-6)",
              ...stagger(9),
            }}
          >
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <ClipboardList size={20} color="var(--ulpiano-green)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--ulpiano-green)", marginBottom: "var(--space-2)" }}>
                  UN INVENTARIO, MÚLTIPLES LIQUIDACIONES
                </div>
                <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7 }}>
                  El Modelo 660 se presenta una sola vez por sucesión. El mismo inventario
                  patrimonial sirve de base para los Modelos 650 de todos los herederos.
                  Si hay 3 herederos, se presentan 3 Modelos 650 pero un único Modelo 660.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: DOCUMENTACIÓN */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>DOCUMENTACIÓN</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            Qué documentos necesitas por categoría
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            Cada partida del inventario debe estar respaldada por documentación
            acreditativa. Esta tabla resume lo necesario para cada categoría.
          </p>

          <div className="reveal" style={{ marginTop: "var(--space-10)", overflowX: "auto", ...stagger(3) }}>
            <table className="mod-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Documentación requerida</th>
                </tr>
              </thead>
              <tbody>
                {documentationRows.map((r) => (
                  <tr key={r.category}>
                    <td style={{ fontWeight: 500, whiteSpace: "nowrap" }}>{r.category}</td>
                    <td>{r.docs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              ...stagger(4),
            }}
          >
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--warning)", marginBottom: "var(--space-2)" }}>
                  PLAZO DE PRESENTACIÓN
                </div>
                <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
                  El Modelo 660 se presenta dentro del mismo plazo que el Modelo 650:
                  6 meses desde la fecha de fallecimiento del causante. Ambos modelos
                  se entregan conjuntamente ante la administración tributaria competente.
                </p>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>
                  Existe la posibilidad de solicitar una prórroga de 6 meses adicionales
                  dentro de los primeros 5 meses (Art. 68 RISD). La prórroga conlleva
                  intereses de demora sobre la cuota del Modelo 650.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CÓMO ULPIANO LO GENERA */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>CON ULPIANO</div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600, ...stagger(1) }}>
            Del inventario patrimonial al Modelo 660, sin transcribir
          </h2>
          <p className="body-lg reveal" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)", ...stagger(2) }}>
            El inventario ya está en el expediente. Ulpiano lo transforma en un
            Modelo 660 completo sin que tengas que rellenar formularios.
          </p>

          <div className="mod-ulpiano-grid" style={{ marginTop: "var(--space-10)" }}>
            {/* Left: 3 points of value */}
            <div>
              {[
                { title: "El inventario ya está en Ulpiano", desc: "Los bienes, derechos y deudas que introduces en el expediente sucesorio ya conforman el inventario. No hay un paso adicional para \"rellenar el 660\" — los datos existen desde el momento en que abres el expediente." },
                { title: "Cada categoría con sus campos específicos", desc: "Inmuebles con referencia catastral, cuentas con IBAN y saldo, valores con ISIN y cotización, seguros con póliza y beneficiario. Ulpiano estructura cada partida con los campos que requiere el modelo oficial." },
                { title: "Un inventario que alimenta todos los modelos", desc: "El mismo inventario genera el Modelo 660, los Modelos 650 de cada heredero, y — si procede — el Modelo 652 de seguros o el futuro Modelo 653 de consolidación de dominio." },
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
                  <span style={{ fontSize: 12, color: "var(--fog)", marginLeft: 8, fontWeight: 500 }}>Modelo 660 — Inventario de bienes</span>
                </div>
                {/* Content */}
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", letterSpacing: "0.04em" }}>MODELO 660</div>
                    <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 4 }}>Declaración de Sucesiones — Inventario de Bienes</div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--slate)", marginBottom: "var(--space-4)", borderBottom: "1px solid var(--mist)", paddingBottom: "var(--space-3)" }}>
                    <div>Causante: D. Joan Puig i Ferrer · NIF: 40.XXX.XXX-Y</div>
                    <div>Fecha fallecimiento: 15/01/2025 · 3 herederos</div>
                  </div>

                  {/* Mini inventory table */}
                  <div style={{ fontSize: 13, marginBottom: "var(--space-4)" }}>
                    {[
                      { label: "Inmueble — C/ Pau Claris 42, BCN", value: "€ 320.000" },
                      { label: "Cuenta — ES91 2100 0418 4502 0005", value: "€ 45.200" },
                      { label: "Cuenta — ES76 0049 1500 0512 1234", value: "€ 12.350" },
                      { label: "Ajuar doméstico (3%)", value: "€ 11.327" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "6px 0",
                          borderBottom: "1px dashed var(--mist)",
                        }}
                      >
                        <span style={{ color: "var(--slate)" }}>{row.label}</span>
                        <span className="mono" style={{ fontWeight: 500, color: "var(--ink)" }}>{row.value}</span>
                      </div>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        color: "var(--warning)",
                        fontStyle: "italic",
                      }}
                    >
                      <span>Hipoteca pendiente</span>
                      <span className="mono" style={{ fontWeight: 500 }}>−€ 85.000</span>
                    </div>
                  </div>

                  {/* Placeholder for screenshot */}
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
                      minHeight: 100,
                      border: "1px dashed var(--mist)",
                    }}
                  >
                    <FileText size={28} color="var(--mist)" />
                    <span style={{ fontSize: 13, color: "var(--fog)", textAlign: "center" }}>
                      Captura del Modelo 660 generado
                      <br />
                      <span style={{ fontSize: 11 }}>(se proporcionará más adelante)</span>
                    </span>
                  </div>

                  {/* Caudal relicto neto */}
                  <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: "var(--space-3)", borderTop: "1px solid var(--mist)" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>CAUDAL RELICTO NETO</span>
                    <span className="mono" style={{ fontSize: 18, fontWeight: 700, color: "var(--ulpiano-green)" }}>€ 303.877,00</span>
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
            Preguntas frecuentes sobre el Modelo 660
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
            El inventario del expediente, convertido en Modelo 660. Sin rellenar formularios.
          </h2>
          <p className="body-lg reveal" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0", ...stagger(1) }}>
            Solicita una demo y comprueba cómo Ulpiano genera el inventario
            patrimonial completo desde los datos del expediente sucesorio.
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
        .mod-inventory-grid {
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
          grid-template-columns: repeat(3, 1fr);
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
          .mod-inventory-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-ulpiano-grid { grid-template-columns: 1fr; }
          .mod-related-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-summary-row { grid-template-columns: 180px 1fr; }
        }
        @media (max-width: 768px) {
          .mod-inventory-grid { grid-template-columns: 1fr; }
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
