import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Processament Intel·ligent de Documents | Digitalitza la gestió documental successòria | Ulpiano",
  description:
    "Digitalitza, classifica i extreu informació clau de certificats de defunció, testaments, escriptures i més. Tecnologia OCR i IA per agilitzar la tramitació d'herències.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/processament-documental",
    languages: {
      es: "https://ulpiano.es/soluciones/procesamiento-documental",
      ca: "https://ulpiano.es/ca/solucions/processament-documental",
    },
  },
};

export default function ProcessamentDocumentalPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Processament documental", href: "/ca/solucions/processament-documental" },
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
            PROCESSAMENT DOCUMENTAL
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginBottom: "var(--space-6)" }}>
            OCR i IA aplicats al dret successori.
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
            Ulpiano digitalitza, classifica i extreu informació de certificats de defunció, testaments, escriptures, darreres voluntats, notes simples i més. Sense carregar manuals les dades de cada document.
          </p>
        </div>
      </section>

      {/* DOCUMENTS QUE ULPIANO PROCESSA */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            TIPOLOGIA
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "var(--space-10)" }}>
            Documents que Ulpiano processa automàticament
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {[
              {
                title: "Certificats de defunció",
                desc: "Identificació del causant, data i lloc de defunció, causa de mort. Ulpiano extreu noms complets, DNI/NIE, data de naixement.",
              },
              {
                title: "Testaments",
                desc: "Testaments ològrafs, notarials o apòcrifs. Extrac de l'arbre familiar, disposicions testamentàries, llegats específics, nomenament d'albaceam.",
              },
              {
                title: "Escriptures públiques",
                desc: "Escriptures de compravenda, donacions mortis causa, constitucions de drets reals. Identificació d'immobles, valors de transmissió.",
              },
              {
                title: "Darreres voluntats",
                desc: "Declaracions de voluntat inscrites al Registre de Darreres Voluntats. Recopilació central de testaments del causant.",
              },
              {
                title: "Notes simples del Registre",
                desc: "Titularitats de béns immobles inscrits. Extracció de descripció d'immobles, carregues, usufructos, altres drets reals.",
              },
              {
                title: "Certificats bancaris",
                desc: "Extractes de comptes, dipòsits, caixes de seguretat. Saldos, moviments, beneficiaris nomenats.",
              },
            ].map((doc) => (
              <div key={doc.title} className="card">
                <h3 style={{ marginBottom: "var(--space-3)" }}>{doc.title}</h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE DOCUMENT A DADA ESTRUCTURADA */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            TECNOLOGIA
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600, marginBottom: "var(--space-6)" }}>
            De document a dada estructurada
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", maxWidth: 640, marginBottom: "var(--space-10)" }}>
            Ulpiano utilitza OCR de precisió alta (even per a documents manuscrits) i modelació d'IA per a estructurar automàticament les dades extraïdes. Cada camp identificat es classifica i s'indexa per a búsqueda i validació posterior.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {[
              {
                step: "01",
                title: "Captura de documents",
                desc: "Càrrega d'imatges, PDFs o documents digitalitzats. Els fitxers es processen de forma segura en infraestructura encriptada.",
              },
              {
                step: "02",
                title: "Reconeixement òptic (OCR)",
                desc: "Conversió de l'imatge a text executable. Suporta documents danyats, manuscrits i de baixa qualitat de fotocòpia.",
              },
              {
                step: "03",
                title: "Classificació d'IA",
                desc: "El model d'IA identifica el tipus de document (testament, nota registral, certificat), i estructura els camps rellevants.",
              },
              {
                step: "04",
                title: "Validació i indexació",
                desc: "L'usuari verifica les dades extraïdes, corregeix si cal, i les importa automàticament a l'expedient Ulpiano.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div
                  className="mono"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--ulpiano-green)",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-2)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PER QUÈ IMPORTA */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            BENEFICIS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "var(--space-10)" }}>
            Guanya temps en la recepció de documents
          </h2>
          <div style={{ maxWidth: 720 }}>
            {[
              {
                icon: "⏱",
                title: "Velocitat",
                desc: "En lloc de 30 minuts llegint un document i copiant dades manuals, l'IA extreu tota la informació en 10 segons.",
              },
              {
                icon: "✓",
                title: "Precisió",
                desc: "L'OCR combinat amb models d'IA minimitza errors de lectura. Es fa validació manual sobre una extracció ja estructurada.",
              },
              {
                icon: "🔄",
                title: "Reutilització",
                desc: "Les dades extraïdes d'un documento es reutilitzen automàticament en tot l'expedient. Si la nota registral extreu una descripció d'immoble, aquesta es poblsa directament a l'inventari.",
              },
            ].map((item) => (
              <div key={item.title} style={{ marginBottom: "var(--space-6)", display: "flex", gap: "var(--space-3)" }}>
                <span style={{ flexShrink: 0, fontSize: 24 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: "var(--space-2)" }}>
                    {item.title}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
            Digitalitza l'entrada de documents sense manuals de dades
          </h2>
          <Link href="/ca/demo" className="btn-primary">
            Sol·licita la teva demo
          </Link>
        </div>
      </section>

      {/* CROSSLINK */}
      <CrossLink
        href="/ca/solucions/documentacio-successoria"
        label="Genera documentació successòria automàticament"
        description="Un cop estructurades les dades dels documents amb OCR, Ulpiano genera tota la documentació de l'expedient."
      />
    </>
  );
}
