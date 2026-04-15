import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Programari d'Herències per a Despatxos d'Advocats | Ulpiano",
  description:
    "Digitalitza la gestió d'herències al teu despatx. Expedients successoris estructurats, diagrames interactius, simulacions fiscals i documents generats automàticament.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/despatxos",
    languages: {
      es: "https://ulpiano.es/pensado-para/despachos",
      ca: "https://ulpiano.es/ca/pensat-per/despatxos",
    },
  },
};

export default function DespatxosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Despatxos d'Advocats", href: "/ca/pensat-per/despatxos" },
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
            <p className="eyebrow">Per a Despatxos d'Advocats</p>
            <h1 className="h1">
              La gestió d'herències del teu despatx, estructurada i auditable
            </h1>
            <p className="body-lg">
              Digitalitza expedients successoris, centralitza documents, calcula
              l'ISD i genera el quadern particional des d'una sola plataforma.
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
                Expedients auditables. Sense errors.
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
            Per què Ulpiano per a despatxos
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
                Expedients estructurats per client
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Un expedient per successió amb tot l'historial. Documents
                centralitzats, validats, linkats entre si. Sense duplicats ni
                versions perdudes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Simulacions fiscals interactives
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Mostra al client escenaris amb impacte fiscal real. Compara
                distribucions alternatives al quadern particional. Comunica amb
                dades, no amb estimacions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Documentació generada des de dades
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Elimina copiar i pegar. Ulpiano genera escriptures, quaderns
                particionals i models fiscals directament des de dades
                estructurades.
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
                1. Digitalitzes els documents del causant
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Puja escaneigs, testaments, inventaris preliminars. Ulpiano els
                cataloga automàticament.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                2. Ulpiano extreu dades i construeix l'inventari
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Des de documents identificats, reconstrueix el patrimoni. Béns
                immobles, comptes bancaris, empreses. Diagrama d'herència
                automàtic.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                3. Calcula l'ISD amb normativa catalana
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Simula escenaris d'herència i donació. Aplica reduccions i
                mòduls de la Llei 19/2010.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                4. Generes el quadern particional
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Des de simulacions acceptades, Ulpiano redacta el quadern
                particional documentat i auditable.
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
              L'expedient successori del teu despatx. Sense errors ni paperassa.
            </h2>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              <Link href="/ca/demo" className="btn-primary">
                Sol·licita una demostració
              </Link>
              <Link href="/ca/models/model-650" className="btn-ghost">
                Més informació
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
            href="/ca/recursos/checklist-expedient-successori"
            label="Descarrega el checklist de l'expedient successori"
            description="47 punts de control per no deixar caps per lligar a cap expedient."
          />
        </div>
      </section>
    </>
  );
}
