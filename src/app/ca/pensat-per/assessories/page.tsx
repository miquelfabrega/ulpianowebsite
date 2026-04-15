import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title:
    "Assessoria Fiscal d'Herències: Model 650 Automatitzat | Ulpiano",
  description:
    "Recàlcul automàtic de l'ISD davant canvis normatius, alertes de termini, traçabilitat auditable davant l'ATC i Model 650 autocomplet. Ulpiano per a assessors fiscals.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/assessories",
    languages: {
      es: "https://ulpiano.es/pensado-para/asesorias",
      ca: "https://ulpiano.es/ca/pensat-per/assessories",
    },
  },
};

export default function AssessoriasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Assessories", href: "/ca/pensat-per/assessories" },
        ]}
      />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "var(--night)",
          color: "var(--white)",
          paddingTop: "var(--space-xl)",
          paddingBottom: "var(--space-xl)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "680px" }}>
            <p className="eyebrow">Per a Assessories Fiscals</p>
            <h1 className="h1">
              El ISD de cada hereu, amb norma citada i traçabilitat ATC.
            </h1>
            <p className="body-lg">
              Recàlcul automàtic davant canvis normatius, alertes de termini
              abans del venciment, traçabilitat auditable per a inspeccions ATC.
            </p>
            <div style={{ marginTop: "var(--space-lg)" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--ulpiano-green)",
                  color: "var(--night)",
                  padding: "var(--space-sm) var(--space-md)",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Model 650 auditable. Sempre al dia.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Per què Ulpiano Section */}
      <section
        style={{
          backgroundColor: "var(--white)",
          paddingTop: "var(--space-xl)",
          paddingBottom: "var(--space-xl)",
        }}
      >
        <div className="container">
          <h2 className="h2" style={{ marginBottom: "var(--space-lg)" }}>
            Per què Ulpiano per a assessories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-lg)",
            }}
          >
            {/* Card 1 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Recàlcul automàtic davant canvis normatius
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Un canvi a la Llei 19/2010 o al reglament ATC? Ulpiano
                recalcula automàticament tots els casos. Els hereus veuen
                l'impacte al moment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Alertes de termini abans del venciment
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Quatre anys des del decés. Ulpiano recorda 90 dies abans.
                Generador de Model 650 amb còmput de terminis. Sense retrasos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Traçabilitat auditable davant l'ATC
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Cada càlcul inclou la norma citada, la font i la data. En
                inspecció, explica com vares arribar a aquella quota. Sense
                dubte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Com funciona en el teu flux Section */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          paddingTop: "var(--space-xl)",
          paddingBottom: "var(--space-xl)",
        }}
      >
        <div className="container">
          <h2 className="h2" style={{ marginBottom: "var(--space-lg)" }}>
            Com funciona en el teu flux
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-lg)",
            }}
          >
            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                1. Reps les dades del despatx o notaria
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Hereders, béns, valoracions. Ulpiano les recull estructurades.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                2. Configures normativa i reduccions
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Llei 19/2010, Art. 5, Art. 7 per empreses. Reduccions especials
                per parentiu i béns.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                3. Ulpiano calcula per hereu
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Quota, base, base neta, reduccions, quota líquida. Citant
                norma. Traçable.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                4. Generes el Model 650 auditable
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Ulpiano omple el Model 650 automàticament, amb cites de norma
                i justificació de cada línia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--night) 0%, var(--ink) 100%)",
          color: "var(--white)",
          paddingTop: "var(--space-xl)",
          paddingBottom: "var(--space-xl)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "600px" }}>
            <h2 className="h2" style={{ color: "var(--white)", marginBottom: "var(--space-lg)" }}>
              L'assessoria fiscal de cada successió. Sempre auditable.
            </h2>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              <Link href="/ca/demo" className="btn-primary">
                Sol·licita una demostració
              </Link>
              <Link href="/ca/models/model-650" className="btn-ghost">
                Què és el Model 650 i com es calcula
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CrossLink */}
      <section
        style={{
          backgroundColor: "var(--mist)",
          paddingTop: "var(--space-lg)",
          paddingBottom: "var(--space-lg)",
        }}
      >
        <div className="container">
          <CrossLink
            href="/ca/models/model-650"
            label="Què és el Model 650 i com es calcula"
            description="La declaració de béns i drets successoris en 11 passos. Amb norma citada."
          />
        </div>
      </section>
    </>
  );
}
