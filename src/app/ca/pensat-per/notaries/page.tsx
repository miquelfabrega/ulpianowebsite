import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Gestió Digital d'Herències per a Notaries | Ulpiano",
  description:
    "L'expedient post-testament actiu, la documentació centralitzada i xifrada, la generació d'escriptures des de dades estructurades. Ulpiano per a notaries.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/notaries",
    languages: {
      es: "https://ulpiano.es/pensado-para/notarias",
      ca: "https://ulpiano.es/ca/pensat-per/notaries",
    },
  },
};

export default function NotariesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Notaries", href: "/ca/pensat-per/notaries" },
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
            <p className="eyebrow">Per a Notaries</p>
            <h1 className="h1">
              L'expedient post-testament, actiu des del primer dia.
            </h1>
            <p className="body-lg">
              Convertir un testament signat en un expedient successori viu.
              Documentació xifrada, escriptures generades des de dades,
              comunicació amb el despatx de l'hereu.
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
                Post-testament persistent. Sempre actiu.
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
            Per què Ulpiano per a notaries
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
                Post-testament actiu
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                L'expedient no es tanca al firmar. Persisteix més enllà de la
                signatura. Els hereus accedeixen, adjunten documents nous,
                comuniquen les passes de la successió.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Documentació xifrada
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Els documents del testament i l'inventari es guarden xifrats.
                Control de qui accedeix, quan i per a què. Traçabilitat
                completa d'accesos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Escriptures des de dades estructurades
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Les dades del testament estructurat generen automàticament
                escriptures de partició. Menys revisió manual, més coherència
                entre document i realitat.
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
                1. El testament es digitalitza a la notaria
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                En fer la compareixença successòria, els dades es registren
                estructurades a Ulpiano.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                2. Els hereus accedeixen a l'expedient
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Des del primer dia, els hereus veuen l'expedient, els béns, els
                còmput de terminis. El procés és transparent.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                3. Es genera l'inventari juntament amb el despatx
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                El despatx i la notaria col·laboren en la descripció de béns i
                valoracions. Un únic expedient compartit.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                4. Es generen les escriptures de partició
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Des del quadern particional, Ulpiano redacta les escriptures de
                transmissió. Alineades amb dades. Llistes per firmar.
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
              Post-testament estructurat. Escriptures generades.
            </h2>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              <Link href="/ca/demo" className="btn-primary">
                Sol·licita una demostració
              </Link>
              <Link href="/ca/models/model-660" className="btn-ghost">
                Model 660 successori
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
            href="/ca/models/model-660"
            label="Què és el Model 660 i com es calcula"
            description="La declaració de béns i drets successoris en 11 passos. Amb norma citada."
          />
        </div>
      </section>
    </>
  );
}
