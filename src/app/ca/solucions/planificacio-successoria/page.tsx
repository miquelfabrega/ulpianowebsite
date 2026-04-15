import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title:
    "Planificació Successòria | Inventari patrimonial i escenaris successoris | Ulpiano",
  description:
    "Consolida béns, drets i deutes del causant en un únic inventari. Calcula llegítimes segons el CCCat, compara escenaris de distribució i genera la documentació de l'expedient.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/planificacio-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/planificacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/planificacio-successoria",
    },
  },
};

export default function PlanificacioSuccessóriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Planificació successòria", href: "/ca/solucions/planificacio-successoria" },
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
            PLANIFICACIÓ SUCCESSÒRIA
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginBottom: "var(--space-6)" }}>
            Tot el patrimoni del causant. Estructurat, valorat i llest per distribuir.
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
            Ulpiano consolida béns, drets i deutes en un únic inventari. Calcula el cabal relicte net, construeix l'arbre familiar amb grups de parentiu i respecta automàticament les llegítimes del Codi Civil de Catalunya.
          </p>
        </div>
      </section>

      {/* INVENTARI PATRIMONIAL */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            INVENTARI
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "var(--space-10)" }}>
            Inventari patrimonial complet
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {[
              {
                title: "Béns immobles i drets reals",
                desc: "Finques rústiques i urbanes, derechos de superficie, usufructos, nues propietats i altres drets reals. Valoració catastral, comercial o pericial.",
              },
              {
                title: "Actius financers i béns mobles",
                desc: "Comptes corrents, dipòsits, accions, participacions, obligacions, fons d'inversió, joies, cotxes, efectes de comerç.",
              },
              {
                title: "Deutes i càrregues deduïbles",
                desc: "Hipoteques, préstecs personals, deutes tributaris, despeses de darrera malaltia i funerals, despeses de l'expedient.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 style={{ marginBottom: "var(--space-3)" }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARBRE FAMILIAR I LLEGÍTIMES */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            CÒMPUTS HEREDITARIS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600, marginBottom: "var(--space-6)" }}>
            Arbre familiar i llegítimes segons el Codi Civil de Catalunya
          </h2>
          <div style={{ maxWidth: 720, fontSize: 16, color: "var(--slate)", lineHeight: 1.7 }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Ulpiano construeix l'arbre familiar de l'expedient i estructura els hereus segons els grups de parentiu del Codi Civil de Catalunya. Calcula automàticament les llegítimes segons l'article 451 CCCat: una tercera del cabal relicte net per a la línia recta descendent, una tercera per a la línia recta ascendent o cònjuge, una tercera de lliure disposició.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Si el causant va fer testament, Ulpiano identifica els llegats i comprova que els llegítimaris no queden menystinguts. Si no hi va haver testament, calcula la successió intestada aplicant l'ordre successori establert per la Compilació.
            </p>
            <p>
              El motor calcula el cabal relicte net: patrimoni brut menys deutes, carregues hereditàries i despeses deduïbles. A partir d'aquí, compartimenta les terceres legítimes sense necessitat de revisió manual de normes.
            </p>
          </div>
        </div>
      </section>

      {/* ESCENARIS DE DISTRIBUCIÓ */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            SIMULACIÓ
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600, marginBottom: "var(--space-6)" }}>
            Escenaris de distribució comparats
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", maxWidth: 640, marginBottom: "var(--space-10)" }}>
            Compara múltiples distribucions del patrimoni entre hereus: escenari legal (intestat), escenari testamentari (si hi ha testament), escenaris de mitjana (amb legats), escenaris amb usufructos o nues propietats.
          </p>
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 12,
              border: "1px solid var(--mist)",
              padding: "var(--space-8)",
            }}
          >
            <div style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>
              <p style={{ marginBottom: "var(--space-4)" }}>
                <strong>Comparació de quotes:</strong> Per cada escenari, Ulpiano mostra quin cabal rep cada hereu i quin percentatge del patrimoni li correspon. Així es pot detectar descapitalitzacions o incongruències en l'ordre de crida.
              </p>
              <p>
                <strong>Visualització de legats:</strong> Si el testament especifica legats de quantitats o béns concrets, Ulpiano els prioritza sobre el cabal relicte i recalcula la distribució de la resta entre hereus ab intestato.
              </p>
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
            Planifica la successió abans de la defunció. O resol-la quan ja ha arribat.
          </h2>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/ca/demo" className="btn-primary">
              Sol·licita la teva demo
            </Link>
            <Link href="/ca/models/model-660" className="btn-ghost">
              Veure Model 660 →
            </Link>
          </div>
        </div>
      </section>

      {/* CROSSLINK */}
      <CrossLink
        href="/ca/models/model-660"
        label="Genera l'inventari de béns amb Ulpiano"
        description="El Model 660 és l'inventari patrimonial que acompanya cada expedient successori."
      />
    </>
  );
}
