"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  FileSearch,
  PenLine,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* =============================================
   MODULES — real AI capabilities only
   ============================================= */

type Module = {
  id: string;
  label: string;
  tagline: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  preview: PreviewBlock;
  bullets: string[];
};

type PreviewBlock = {
  kind: "extract" | "draft" | "consult" | "validate";
  doc: { title: string; meta: string };
  fields?: { key: string; value: string }[];
  draft?: { line: string; highlight?: boolean }[];
  question?: string;
  answer?: { text: string; citation: string };
  checks?: { label: string; status: "ok" | "warn" | "error" }[];
};

const modules: Module[] = [
  {
    id: "lectura",
    label: "Lectura de documentos",
    tagline: "PDF en datos estructurados.",
    title: "Lectura de documentos",
    description:
      "Extrae datos estructurados de testamentos, certificados de defunción, últimas voluntades, escrituras, notas simples y extractos bancarios. Tú verificas, Ulpiano no inventa.",
    Icon: FileSearch,
    bullets: [
      "OCR + NLP entrenado con documentación sucesoria española",
      "Datos mapeados directamente a los campos del expediente",
      "Confianza por campo y enlace a la línea del PDF original",
    ],
    preview: {
      kind: "extract",
      doc: {
        title: "Certificado de Últimas Voluntades",
        meta: "PDF · 2 páginas",
      },
      fields: [
        { key: "Causante", value: "Joan Puig Ribas" },
        { key: "DNI", value: "46 815 299-B" },
        { key: "Fecha de defunción", value: "12/02/2026" },
        { key: "Testamento", value: "Notaría Montaner · 04/11/2021" },
      ],
    },
  },
  {
    id: "redaccion",
    label: "Redacción asistida",
    tagline: "Borrador desde el expediente.",
    title: "Redacción asistida",
    description:
      "Genera el borrador del cuaderno particional, escritos y comunicaciones a herederos desde los datos ya estructurados del expediente. Sin transcribir dos veces lo mismo.",
    Icon: PenLine,
    bullets: [
      "Plantillas profesionales conectadas al caso real",
      "El abogado revisa y firma. La IA no decide, redacta",
      "Trazabilidad: cada párrafo indica el dato que lo justifica",
    ],
    preview: {
      kind: "draft",
      doc: {
        title: "Cuaderno particional · borrador",
        meta: "Expediente #2026-042",
      },
      draft: [
        { line: "COMPARECEN" },
        {
          line: "D.ª Marta Puig Serra, mayor de edad, con DNI 46 815 300-A…",
          highlight: true,
        },
        { line: "EXPOSICIONES" },
        {
          line: "Primero. — Don Joan Puig Ribas falleció el 12 de febrero de 2026…",
          highlight: true,
        },
      ],
    },
  },
  {
    id: "consulta",
    label: "Consulta normativa",
    tagline: "Respuestas con cita literal.",
    title: "Consulta normativa con cita",
    description:
      "Pregunta sobre el CCCat, el ISD catalán o la Ley 29/1987. Ulpiano IA responde con cita literal del artículo y enlace a la fuente oficial. Si no tiene fuente, no responde.",
    Icon: BookOpenCheck,
    bullets: [
      "Corpus normativo estatal y catalán actualizado",
      "Respuesta siempre con artículo, número y texto íntegro",
      "Nunca alucina jurisprudencia: sin fuente, no hay respuesta",
    ],
    preview: {
      kind: "consult",
      doc: {
        title: "Consulta · CCCat",
        meta: "Llei 10/2008",
      },
      question:
        "¿Cuál es la cuantía de la legítima colectiva en Cataluña?",
      answer: {
        text: "La legítima en Cataluña es de la cuarta parte del valor neto de la herencia.",
        citation: "Art. 451-5 Codi Civil de Catalunya (Llibre IV)",
      },
    },
  },
  {
    id: "validacion",
    label: "Validación de coherencia",
    tagline: "Expediente revisado antes que tú.",
    title: "Validación de coherencia",
    description:
      "Revisa el expediente completo y señala inconsistencias: heredero sin NIF, activo sin valoración, documento posterior al fallecimiento, legitimarios no identificados. Un segundo par de ojos permanente.",
    Icon: ShieldCheck,
    bullets: [
      "Reglas deterministas + razonamiento del LLM sobre el caso",
      "Incidencias priorizadas por impacto fiscal y jurídico",
      "Revisión antes de firmar, no después de que el cliente firme",
    ],
    preview: {
      kind: "validate",
      doc: {
        title: "Revisión del expediente",
        meta: "Expediente #2026-042 · 14 comprobaciones",
      },
      checks: [
        { label: "Herederos con NIF identificado", status: "ok" },
        { label: "Valoración inmuebles completa", status: "ok" },
        { label: "Documento fechado antes del óbito", status: "warn" },
        { label: "Legitimario sin notificación", status: "error" },
      ],
    },
  },
];

/* =============================================
   PREVIEW RENDERERS
   ============================================= */

function DocHeader({
  doc,
  Icon,
}: {
  doc: PreviewBlock["doc"];
  Icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--ulpiano-green)]/20 text-[var(--ulpiano-green)]">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-[14px] font-medium text-white/90">{doc.title}</p>
        <p className="text-[12px] text-white/45">{doc.meta}</p>
      </div>
    </div>
  );
}

function ExtractPreview({ block }: { block: PreviewBlock }) {
  return (
    <div className="space-y-4">
      <DocHeader doc={block.doc} Icon={FileSearch} />
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.02]">
        <div className="border-b border-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.1em] text-white/40">
          Datos extraídos
        </div>
        <ul className="divide-y divide-white/[0.05]">
          {block.fields?.map((f) => (
            <li
              key={f.key}
              className="flex items-baseline justify-between px-4 py-2.5"
            >
              <span className="text-[13px] text-white/50">{f.key}</span>
              <span className="font-mono text-[13px] text-white/90">
                {f.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DraftPreview({ block }: { block: PreviewBlock }) {
  return (
    <div className="space-y-4">
      <DocHeader doc={block.doc} Icon={PenLine} />
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 font-serif">
        {block.draft?.map((l, i) => (
          <p
            key={i}
            className={`text-[13px] leading-relaxed ${
              l.highlight
                ? "text-white/90"
                : "mt-3 mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ulpiano-green)]"
            }`}
          >
            {l.line}
          </p>
        ))}
      </div>
    </div>
  );
}

function ConsultPreview({ block }: { block: PreviewBlock }) {
  return (
    <div className="space-y-4">
      <DocHeader doc={block.doc} Icon={BookOpenCheck} />
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
        <p className="text-[12px] uppercase tracking-[0.1em] text-white/40">
          Pregunta
        </p>
        <p className="mt-1 text-[14px] text-white/80">{block.question}</p>
      </div>
      <div className="rounded-lg border border-[var(--ulpiano-green)]/30 bg-[var(--ulpiano-green)]/10 p-4">
        <p className="text-[12px] uppercase tracking-[0.1em] text-[var(--ulpiano-green)]">
          Respuesta
        </p>
        <p className="mt-1 text-[14px] leading-relaxed text-white/90">
          {block.answer?.text}
        </p>
        <p className="mt-3 border-t border-white/[0.08] pt-2 font-mono text-[12px] text-white/55">
          {block.answer?.citation}
        </p>
      </div>
    </div>
  );
}

function ValidatePreview({ block }: { block: PreviewBlock }) {
  const statusColors: Record<string, string> = {
    ok: "var(--ulpiano-green)",
    warn: "#B45309",
    error: "#991B1B",
  };
  return (
    <div className="space-y-4">
      <DocHeader doc={block.doc} Icon={ShieldCheck} />
      <ul className="space-y-2">
        {block.checks?.map((c, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5"
          >
            <span
              className="h-2 w-2 flex-shrink-0 rounded-full"
              style={{ background: statusColors[c.status] }}
              aria-hidden="true"
            />
            <span className="text-[13px] text-white/80">{c.label}</span>
            <span
              className="ml-auto text-[11px] uppercase tracking-[0.08em]"
              style={{ color: statusColors[c.status] }}
            >
              {c.status === "ok"
                ? "Correcto"
                : c.status === "warn"
                  ? "Revisar"
                  : "Error"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Preview({ block }: { block: PreviewBlock }) {
  if (block.kind === "extract") return <ExtractPreview block={block} />;
  if (block.kind === "draft") return <DraftPreview block={block} />;
  if (block.kind === "consult") return <ConsultPreview block={block} />;
  return <ValidatePreview block={block} />;
}

/* =============================================
   MAIN CLIENT
   ============================================= */

export default function IaClient() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find((m) => m.id === activeId) ?? modules[0];

  return (
    <main className="bg-[var(--night)] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-[calc(64px+var(--space-16))] pb-[var(--space-20)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, var(--ulpiano-green) 0%, transparent 45%)",
          }}
        />
        <div className="container relative">
          <div className="max-w-[720px]">
            <div className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              <Sparkles size={12} strokeWidth={1.5} />
              Ulpiano IA
            </div>
            <h1
              className="font-dm-sans"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Inteligencia artificial donde aporta.
              <br />
              <span className="text-white/55">
                Motor determinista donde es crítico.
              </span>
            </h1>
            <p className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-white/60">
              Ulpiano IA se aplica a lo que la inteligencia artificial hace
              bien: leer, redactar, consultar y validar. El cálculo del ISD y
              las legítimas se resuelven con motores deterministas auditables.
              Nunca con IA.
            </p>
          </div>

          {/* TABS + PREVIEW */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-16">
            {/* Tabs */}
            <nav
              aria-label="Capacidades de Ulpiano IA"
              className="flex flex-col gap-1"
            >
              {modules.map((m) => {
                const isActive = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveId(m.id)}
                    className={`flex items-center rounded-lg px-4 py-3 text-left text-[15px] transition-all duration-150 ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-white/55 hover:bg-white/[0.03] hover:text-white/80"
                    }`}
                    aria-pressed={isActive}
                  >
                    {m.label}
                  </button>
                );
              })}
            </nav>

            {/* Preview */}
            <div>
              <div className="mb-8 max-w-[520px]">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ulpiano-green)]">
                  {active.tagline}
                </p>
                <h2
                  className="font-dm-sans"
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {active.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  {active.description}
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-5 sm:p-6 backdrop-blur-sm">
                <Preview block={active.preview} />
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {active.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-[13px] leading-snug text-white/70"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BLOCK — IA vs Determinista */}
      <section className="border-t border-white/[0.06] bg-black/30 py-[var(--space-16)]">
        <div className="container">
          <div className="mb-10 max-w-[640px]">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              La frontera es clara
            </p>
            <h2
              className="font-dm-sans"
              style={{
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
              }}
            >
              La IA nunca calcula la cuota del ISD
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/60">
              Todo lo que pueda acabar ante Hacienda, un juez o un cliente, lo
              resuelve un motor determinista con la norma citada y cada paso
              auditable. Ulpiano IA acompaña; no decide lo que no debe decidir.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ulpiano-green)]">
                <Sparkles size={12} strokeWidth={1.5} />
                Con Ulpiano IA
              </div>
              <ul className="space-y-2 text-[14px] text-white/75">
                <li>— Lectura y extracción de documentos del expediente</li>
                <li>— Redacción asistida del cuaderno particional y escritos</li>
                <li>— Consulta normativa con cita literal de artículos</li>
                <li>— Validación de coherencia del expediente</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
                <ShieldCheck size={12} strokeWidth={1.5} />
                Con motor determinista
              </div>
              <ul className="space-y-2 text-[14px] text-white/75">
                <li>— Cálculo de legítimas según el CCCat</li>
                <li>— Motor fiscal ISD (base, reducciones, bonificaciones)</li>
                <li>— Modelos tributarios 650, 651, 652, 653, 660</li>
                <li>— Escenarios sucesorios y simulaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-16)]">
        <div className="container">
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-[520px]">
              <h3
                className="font-dm-sans"
                style={{
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Ve Ulpiano IA sobre un expediente real
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                25 minutos. Traemos un expediente sucesorio y te enseñamos
                dónde la IA ayuda y dónde el motor determinista toma el relevo.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--ulpiano-green)] px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--green-light)]"
            >
              Reserva tu demo
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
