import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Tramitació d'Herències per a Funeràries | Ulpiano",
  description:
    "Amplia el teu servei funerari amb la tramitació successòria digital. Expedients estructurats, documentació processada, ISD calculat. Ulpiano per a funeràries.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/funeraries",
    languages: {
      es: "https://ulpiano.es/pensado-para/funerarias",
      ca: "https://ulpiano.es/ca/pensat-per/funeraries",
    },
  },
};

export default function FunerariesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Funeràries", href: "/ca/pensat-per/funeraries" },
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
            <p className="eyebrow">Per a Funeràries</p>
            <h1 className="h1">
              Del servei funerari a la tramitació successòria completa.
            </h1>
            <p className="body-lg">
              Amplia els teus serveis amb gestió successòria digital. Expedients
              estructurats, documentació processada, ISD calculat. Sense sobrecarregar
              el teu equip.
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
                Servei complementari d'alt valor.
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
            Per què Ulpiano per a funeràries
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
                Servei complementari d'alt valor
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Els familiars ja confien en tu. Oferir tramitació successòria
                digital amplia la relació, consolida la fidelitat i genera marge
                recurrent.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Procés tramitat sense deixar el teu canal
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Els hereus accedeixen a l'expedient des del teu portal. No es
                dispersen a despatxos ni assessories. Resten a tu.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Marge per al teu negoci
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Ulpiano gestiona el 80% de la tramitació. Tu cobres pels
                resultats. Marge net sense incrementar plantilla.
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
                1. Després del servei funerari, obres l'expedient successori
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Els dades de la defunció i els hereus es registren. L'expedient
                comença al teu portal.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                2. Els hereus adjunten documentació
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Testaments, certificats de defunció, inventaris. Tot al teu
                portal. Ulpiano els organitza automàticament.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                3. Ulpiano estructura l'inventari
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Extreu béns, valoracions, transmissions. Els hereus veuen el
                patrimoni clar.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                4. Generes quadern particional i ISD
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Ulpiano calcula ISD per hereu. Tu generes el quadern
                particional. Els hereus signen. Expedient tancat.
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
              Transforma cada dol en oportunitat de servei.
            </h2>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              <Link href="/ca/demo" className="btn-primary">
                Sol·licita una demostració
              </Link>
              <Link href="/ca/contacte" className="btn-ghost">
                Parlem del teu model
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
            description="47 punts de control per no deixar caps per lligar a cap expedient. Aplicable a funeràries."
          />
        </div>
      </section>
    </>
  );
}
