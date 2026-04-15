import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Planificació Successòria per a Family Office | Ulpiano",
  description:
    "Planificació successòria pre-mortem per a family offices. Escenaris fiscals comparats, patrimoni complex inventariat, empresa familiar distribuïda amb impacte fiscal calculat.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/family-office",
    languages: {
      es: "https://ulpiano.es/pensado-para/family-office",
      ca: "https://ulpiano.es/ca/pensat-per/family-office",
    },
  },
};

export default function FamilyOfficePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Family Office", href: "/ca/pensat-per/family-office" },
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
            <p className="eyebrow">Per a Family Office</p>
            <h1 className="h1">
              Planificació successòria pre-mortem. Escenaris comparats amb impacte
              fiscal real.
            </h1>
            <p className="body-lg">
              Patrimoni complex inventariat. Empresa familiar distribuïda amb
              impacte fiscal calculat. Escenaris de successió comparats en temps
              real.
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
                Planificació pre-mortem. Decisió amb dades.
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
            Per què Ulpiano per a family office
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
                Escenaris fiscals comparats
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Herència directa, donacions en vida, empresa familiar amb
                usufruit. Compara cost fiscal real de cada escenari. Pren
                decisió amb números.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Patrimoni complex inventariat
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Immobles en diverses jurisdiccions, participacions socials,
                drets i obligacions. Ulpiano organitza, valora, computa impacte
                fiscal de cada actiu.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Empresa familiar: successió amb Art. 7 Llei 19/2010
              </h3>
              <p style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                Empreses, usufructes, nua propietat. Calcul d'impacte fiscal
                real de mantenir empresa en successió i de la transmissió.
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
                1. Inventaries el patrimoni complex
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Immobles, participacions, drets, passius. Ulpiano estructura,
                classifica, valora.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                2. Defines l'estructura familiar actual
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Qui és el titular, qui és hereu. Graus de parentiu, comunitats
                de béns. Model de successió base.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                3. Crees escenaris alternatius
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Donació de participacions ara. Manteniment d'empresa.
                Distribucions desiguals. Ulpiano calcula cost fiscal de cada.
              </p>
            </div>

            <div
              style={{
                paddingLeft: "var(--space-lg)",
                borderLeft: `4px solid var(--ulpiano-green)`,
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "var(--space-sm)" }}>
                4. Compares i decideixes
              </h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.6" }}>
                Taula comparativa de cost fiscal, terminis, complexitat legal.
                Base per decidir estratègia.
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
              Planificació successòria amb impacte fiscal calculat.
            </h2>
            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              <Link href="/ca/demo" className="btn-primary">
                Sol·licita una demostració
              </Link>
              <Link href="/ca/models/model-651" className="btn-ghost">
                Donació vs. herència
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
            href="/ca/models/model-651"
            label="Donació vs. herència: comparativa de cost fiscal"
            description="Escenaris d'impacte fiscal real per a patrimoni complex i empresa familiar."
          />
        </div>
      </section>
    </>
  );
}
