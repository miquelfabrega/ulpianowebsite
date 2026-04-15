import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Fiscalitat Successòria | Autoliquidació de Models 650, 651, 660 | Ulpiano",
  description:
    "Calcula, presenta i liquida els impostos successoris dels teus clients de manera automatitzada. Models 650, 651, 652, 653 i 660 amb normativa estatal i autonòmica actualitzada.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/fiscalitat-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/fiscalidad-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/fiscalitat-successoria",
    },
  },
};

export default function FiscalitatSuccessóriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Fiscalitat successòria", href: "/ca/solucions/fiscalitat-successoria" },
        ]}
      />

      {/* HERO — DARK */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          color: "var(--white)",
        }}
      >
        <div className="container">
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}>
            FISCALITAT SUCCESSÒRIA
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginBottom: "var(--space-6)" }}>
            El motor fiscal de l'ISD. Amb la Llei 19/2010 aplicada automàticament.
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
            Ulpiano automatitza el càlcul, la presentació i la liquidació de l'Impost sobre Successions i Donacions. Models 650, 651, 652, 653 i 660 generats directament des de les dades de l'expedient, amb la normativa estatal i la Llei 19/2010 de Catalunya aplicada en cada càlcul.
          </p>
        </div>
      </section>

      {/* ELS 5 MODELS DEL ISD */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            MODELS FISCALS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "var(--space-10)" }}>
            Els 5 models del Impost sobre Successions i Donacions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {[
              { number: "650", name: "Successions", href: "/ca/models/model-650" },
              { number: "651", name: "Donacions", href: "/ca/models/model-651" },
              { number: "652", name: "Assegurances", href: "/ca/models/model-652" },
              { number: "653", name: "Consolidació", href: "/ca/models/model-653" },
              { number: "660", name: "Inventari", href: "/ca/models/model-660" },
            ].map((model) => (
              <Link
                key={model.number}
                href={model.href}
                className="card"
                style={{ textDecoration: "none", display: "block" }}
              >
                <span className="mono" style={{ fontSize: 36, fontWeight: 700, color: "var(--ulpiano-green)", lineHeight: 1 }}>
                  {model.number}
                </span>
                <h3 style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-2)" }}>{model.name}</h3>
                <span style={{ display: "inline-block", marginTop: "var(--space-3)", fontSize: 14, fontWeight: 500, color: "var(--ulpiano-green)" }}>
                  Veure model →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REDUCCIONS I BONIFICACIONS */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            NORMATIVA CATALANA
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600, marginBottom: "var(--space-6)" }}>
            Reduccions i bonificacions de la Llei 19/2010
          </h2>
          <div style={{ maxWidth: 720, fontSize: 16, color: "var(--slate)", lineHeight: 1.7 }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              La Llei 19/2010, del 7 de juny, de l'Agència Tributaria de Catalunya (ATC) estableix reduccions per parentesc molt més generoses que la normativa estatal. Els Grups I i II (fills, cònjuge, ascendents) gaudeixen de reduccions de fins a 100.000€, amb bonificacions en la quota que es poden aproximar al 99% en successió directa.
            </p>
            <p style={{ marginBottom: "var(--space-6)" }}>
              Ulpiano aplica automàticament totes les reduccions autonòmiques: parentesc (Art. 2), vivenda habitual (Art. 5), empresa familiar (Art. 7), patrimoni cultural (Art. 6), discapacitat (Art. 3) i persona major de 75 anys (Art. 4).
            </p>
            <div
              style={{
                background: "var(--white)",
                borderRadius: 12,
                border: "1px solid var(--mist)",
                padding: "var(--space-6)",
                marginBottom: "var(--space-4)",
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 17, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                Bonificació de fins al 99% per a Grups I i II
              </div>
              <p style={{ fontSize: 15, margin: 0 }}>
                La bonificació és una deducció directa en la quota tributària, no en la base imposable. Això significa que fins i tot quan la base és alta, la quota final és extremadament baixa per a hereus en línia recta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALERTA D'EXTEMPORANEÏTAT */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            COMPLIANCE
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600, marginBottom: "var(--space-6)" }}>
            Alerta d'extemporaneïtat
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", maxWidth: 640, marginBottom: "var(--space-10)" }}>
            El termini de presentació del Model 650 és de 6 mesos des de la data de defunció. Si es presenta fora de termini, s'apliquen els recàrrecs del Art. 27 LGT: 5% (fins 3 mesos), 10% (3-6 mesos), 15% (6-12 mesos), 20% (més de 12 mesos) amb interessos de demora.
          </p>
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 12,
              border: "1px solid var(--mist)",
              padding: "var(--space-6)",
            }}
          >
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0, marginTop: 2, color: "var(--ulpiano-green)", fontSize: 18 }}>
                ✓
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: "var(--space-2)" }}>
                  Ulpiano monitoritza la data de venciment
                </div>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7, margin: 0 }}>
                  El sistema te controla els dies restants per presentar el Model 650. Si l'expedient s'acosta al termini sense presentació, calcula automàticament el recàrrec per extemporaneïtat que s'aplicarà.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA OSCURA */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ color: "var(--white)", maxWidth: 640, margin: "0 auto", marginBottom: "var(--space-6)" }}>
            El ISD de cada hereu, calculat abans que arribi a l'ATC.
          </h2>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/ca/demo" className="btn-primary">
              Sol·licita la teva demo
            </Link>
            <Link href="/ca/models" className="btn-ghost">
              Guia de models →
            </Link>
          </div>
        </div>
      </section>

      {/* CROSSLINK */}
      <CrossLink
        href="/ca/models"
        label="Guia completa de models fiscals successoris"
        description="Vols entendre què és el Model 650, 651, 660 i quan es presenta cada un?"
      />
    </>
  );
}
