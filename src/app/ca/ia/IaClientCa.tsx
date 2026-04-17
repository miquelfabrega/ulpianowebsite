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
    label: "Lectura de documents",
    tagline: "PDF en dades estructurades.",
    title: "Lectura de documents",
    description:
      "Extreu dades estructurades de testaments, certificats de defunció, darreres voluntats, escriptures, notes simples i extractes bancaris. Tu verifiques, Ulpiano no inventa.",
    Icon: FileSearch,
    bullets: [
      "OCR + NLP entrenat amb documentació successòria catalana i espanyola",
      "Dades mapejades directament als camps de l'expedient",
      "Confiança per camp i enllaç a la línia del PDF original",
    ],
    preview: {
      kind: "extract",
      doc: {
        title: "Certificat de Darreres Voluntats",
        meta: "PDF · 2 pàgines",
      },
      fields: [
        { key: "Causant", value: "Joan Puig Ribas" },
        { key: "DNI", value: "46 815 299-B" },
        { key: "Data de defunció", value: "12/02/2026" },
        { key: "Testament", value: "Notaria Montaner · 04/11/2021" },
      ],
    },
  },
  {
    id: "redaccio",
    label: "Redacció assistida",
    tagline: "Esborrany des de l'expedient.",
    title: "Redacció assistida",
    description:
      "Genera l'esborrany del quadern particional, escrits i comunicacions als hereus des de les dades ja estructurades de l'expedient. Sense transcriure dues vegades el mateix.",
    Icon: PenLine,
    bullets: [
      "Plantilles professionals connectades al cas real",
      "L'advocat revisa i signa. La IA no decideix, redacta",
      "Traçabilitat: cada paràgraf indica la dada que el justifica",
    ],
    preview: {
      kind: "draft",
      doc: {
        title: "Quadern particional · esborrany",
        meta: "Expedient #2026-042",
      },
      draft: [
        { line: "COMPAREIXEN" },
        {
          line: "Sra. Marta Puig Serra, major d'edat, amb DNI 46 815 300-A…",
          highlight: true,
        },
        { line: "EXPOSICIONS" },
        {
          line: "Primer. — En Joan Puig Ribas va morir el 12 de febrer de 2026…",
          highlight: true,
        },
      ],
    },
  },
  {
    id: "consulta",
    label: "Consulta normativa",
    tagline: "Respostes amb citació literal.",
    title: "Consulta normativa amb citació",
    description:
      "Pregunta sobre el CCCat, l'ISD català o la Llei 29/1987. Ulpiano IA respon amb citació literal de l'article i enllaç a la font oficial. Si no té font, no respon.",
    Icon: BookOpenCheck,
    bullets: [
      "Corpus normatiu estatal i català actualitzat",
      "Resposta sempre amb article, número i text íntegre",
      "Mai al·lucina jurisprudència: sense font, no hi ha resposta",
    ],
    preview: {
      kind: "consult",
      doc: {
        title: "Consulta · CCCat",
        meta: "Llei 10/2008",
      },
      question: "Quina és la quantia de la legítima col·lectiva a Catalunya?",
      answer: {
        text: "La legítima a Catalunya és de la quarta part del valor net de l'herència.",
        citation: "Art. 451-5 Codi Civil de Catalunya (Llibre IV)",
      },
    },
  },
  {
    id: "validacio",
    label: "Validació de coherència",
    tagline: "Expedient revisat abans que tu.",
    title: "Validació de coherència",
    description:
      "Revisa l'expedient complet i assenyala inconsistències: hereu sense NIF, actiu sense valoració, document posterior a la defunció, legitimaris no identificats. Un segon parell d'ulls permanent.",
    Icon: ShieldCheck,
    bullets: [
      "Regles deterministes + raonament del LLM sobre el cas",
      "Incidències prioritzades per impacte fiscal i jurídic",
      "Revisió abans de signar, no després que el client signi",
    ],
    preview: {
      kind: "validate",
      doc: {
        title: "Revisió de l'expedient",
        meta: "Expedient #2026-042 · 14 comprovacions",
      },
      checks: [
        { label: "Hereus amb NIF identificat", status: "ok" },
        { label: "Valoració immobles completa", status: "ok" },
        { label: "Document datat abans de la defunció", status: "warn" },
        { label: "Legitimari sense notificació", status: "error" },
      ],
    },
  },
];

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
          Dades extretes
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
          Resposta
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
  const statusLabel: Record<string, string> = {
    ok: "Correcte",
    warn: "Revisar",
    error: "Error",
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
              {statusLabel[c.status]}
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

export default function IaClientCa() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find((m) => m.id === activeId) ?? modules[0];

  return (
    <main className="bg-[var(--night)] text-white">
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
              Intel·ligència artificial on aporta.
              <br />
              <span className="text-white/55">
                Motor determinista on és crític.
              </span>
            </h1>
            <p className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-white/60">
              Ulpiano IA s'aplica al que la intel·ligència artificial fa bé:
              llegir, redactar, consultar i validar. El càlcul de l'ISD i les
              legítimes es resolen amb motors deterministes auditables. Mai
              amb IA.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-16">
            <nav
              aria-label="Capacitats d'Ulpiano IA"
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

      <section className="border-t border-white/[0.06] bg-black/30 py-[var(--space-16)]">
        <div className="container">
          <div className="mb-10 max-w-[640px]">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              La frontera és clara
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
              La IA mai calcula la quota de l'ISD
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/60">
              Tot allò que pugui acabar davant d'Hisenda, un jutge o un client,
              ho resol un motor determinista amb la norma citada i cada pas
              auditable. Ulpiano IA acompanya; no decideix el que no ha de
              decidir.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ulpiano-green)]">
                <Sparkles size={12} strokeWidth={1.5} />
                Amb Ulpiano IA
              </div>
              <ul className="space-y-2 text-[14px] text-white/75">
                <li>— Lectura i extracció de documents de l'expedient</li>
                <li>— Redacció assistida del quadern particional i escrits</li>
                <li>— Consulta normativa amb citació literal d'articles</li>
                <li>— Validació de coherència de l'expedient</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
                <ShieldCheck size={12} strokeWidth={1.5} />
                Amb motor determinista
              </div>
              <ul className="space-y-2 text-[14px] text-white/75">
                <li>— Càlcul de legítimes segons el CCCat</li>
                <li>— Motor fiscal ISD (base, reduccions, bonificacions)</li>
                <li>— Models tributaris 650, 651, 652, 653, 660</li>
                <li>— Escenaris successoris i simulacions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
                Veu Ulpiano IA sobre un expedient real
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                25 minuts. Portem un expedient successori i t'ensenyem on la
                IA ajuda i on el motor determinista agafa el relleu.
              </p>
            </div>
            <Link
              href="/ca/demo"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--ulpiano-green)] px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--green-light)]"
            >
              Reserva la teva demo
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
