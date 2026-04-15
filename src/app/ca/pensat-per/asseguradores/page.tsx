import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Gestió Successòria per a Asseguradores i Pòlisses de Vida | Ulpiano",
  description:
    "Complementa les teves pòlisses de vida i decessos amb la gestió successòria digital. Expedients estructurats, fiscalitat calculada, fidelització real. Ulpiano per a asseguradores.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/asseguradores",
    languages: {
      es: "https://ulpiano.es/pensado-para/aseguradoras",
      ca: "https://ulpiano.es/ca/pensat-per/asseguradores",
    },
  },
};

export default function AsseguradoresPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Asseguradores", href: "/ca/pensat-per/asseguradores" },
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
            <p className="eyebrow">Per a Asseguradores</p>
            <h1 className="h1">
              Pòlisses de vida i decessos amb gestió successòria integrada.
            </h1>
            <p className="body-lg">
              Complementa els teus productes. Els beneficiaris rebran l'indemnització
              acompanyada d'expedient digital, planificació fiscal i documentació
              completa.
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
                Pòlissa + gestió successòria. Fidelització real.
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
            Per què Ulpiano per a asseguradores
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
                Complement a pòlisses existents
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Els beneficiaris reben la indemnització. Ulpiano ofereix gestió
                successòria gratuïta o de preu reduït. Producte integrat de
                valor superior.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Experiència digital en moments crítics
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                El dol és emocional. Una plataforma senzilla, on penjola els
                documents, es calcula el fiscal i es genera documentació,
                proporciona pau en moment difícil.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Fidelització real amb famílies
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                La pòlissa es paga una vegada. La gestió successòria es
                recorda anys. Els beneficiaris tornen a recomanar-te. Relació
                de confiança perpetua.
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
                1. Al liquidar la pòlissa, obres expedient a Ulpiano
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Beneficiaris, quantitat indemnitzada, data de defunció. Les
                dades es registren estructurades.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                2. Els beneficiaris accedeixen al portal
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Accés segur, xifrat. Veuen la indemnització en context.
                Documentació necessària. Còmput de terminis.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                3. Ulpiano calcula l'impacte fiscal de la indemnització
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Assegurança de vida: exempció del 100% si beneficiaris directes.
                Assegurança de decessos: tractament fiscal especial.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                4. Es genera Model 652 (assegurances de vida) automàticament
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Ulpiano document estructura l'ISD. Model 652 preomplert. Els
                beneficiaris presenten amb confiança.
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
              Pòlissa + gestió successòria. Servei de confiança integrat.
            </h2>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              <Link href="/ca/demo" className="btn-primary">
                Sol·licita una demostració
              </Link>
              <Link href="/ca/models/model-652" className="btn-ghost">
                Model 652 assegurances de vida
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
            href="/ca/models/model-652"
            label="Model 652: assegurances de vida i decessos"
            description="Tractament fiscal de les indemnitzacions per assegurança de vida. Exempció i còmput d'herència."
          />
        </div>
      </section>
    </>
  );
}
