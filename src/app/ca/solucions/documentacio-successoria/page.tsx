import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Documentació Successòria | Quadern Particional i Models Fiscals | Ulpiano",
  description:
    "Genera el quadern particional, l'escriptura de partició, l'inventari formal i els Models 650 i 660 des de les dades de l'expedient successori. Sense copiar. Sense transcriure.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/documentacio-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/documentacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/documentacio-successoria",
    },
  },
};

export default function DocumentacioSuccessóriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Documentació successòria", href: "/ca/solucions/documentacio-successoria" },
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
            DOCUMENTACIÓ SUCCESSÒRIA
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginBottom: "var(--space-6)" }}>
            De l'expedient al quadern particional. Automàticament.
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
            Ulpiano genera tota la documentació definitiva directament des de les dades estructurades de l'expedient: quadern particional, escriptura de partició, inventari formal i models fiscals. Sense copiar dades manuals. Sense errors de transcripció.
          </p>
        </div>
      </section>

      {/* DOCUMENTS GENERATS */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            DOCUMENTS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "var(--space-10)" }}>
            Els 4 documents que Ulpiano genera automàticament
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
                title: "Inventari formal",
                desc: "Declaració del cabal relicte net amb descripció completa de béns immobles, mobiliari, actius financers, drets i deutes del causant. Ordenat per blocs.",
              },
              {
                title: "Quadern particional",
                desc: "Document que especifica quins béns rep cada hereu, en quina proporció, i com es fa el pagament de legats, deutes i despeses de l'expedient.",
              },
              {
                title: "Escriptura de partició",
                desc: "Document notarial que formalitza la distribució del patrimoni entre hereus. Es firma davant notari i és el títol definitiu de transmissió.",
              },
              {
                title: "Models fiscals (650, 660)",
                desc: "Declaracions d'autoliquidació de l'ISD de cada hereu. Els Models 650 individuals i el Model 660 compartit amb l'inventari de béns.",
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
            FLUX DE DADES
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600, marginBottom: "var(--space-6)" }}>
            Sense transcriure, sense errors
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", maxWidth: 640, marginBottom: "var(--space-10)" }}>
            Introduïxs les dades de l'expedient una vegada. Ulpiano les estructura automàticament i les utilitza per generar tota la documentació. No hi ha espais en blanc, no hi ha copiapega de formularis.
          </p>
          <div style={{ maxWidth: 800 }}>
            <div
              style={{
                background: "var(--white)",
                borderRadius: 12,
                border: "1px solid var(--mist)",
                padding: "var(--space-8)",
              }}
            >
              <div style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.8 }}>
                <div style={{ marginBottom: "var(--space-4)" }}>
                  <strong style={{ color: "var(--ink)" }}>Entrada:</strong> Dades brutes de l'expedient (identificacions, béns, hereus, testament, deutes)
                </div>
                <div
                  style={{
                    textAlign: "center",
                    margin: "var(--space-4) 0",
                    fontSize: 20,
                    color: "var(--slate)",
                  }}
                >
                  ↓
                </div>
                <div style={{ marginBottom: "var(--space-4)" }}>
                  <strong style={{ color: "var(--ink)" }}>Processament:</strong> Validació de coherència, càlcul de llegítimes, simulació de distribució
                </div>
                <div
                  style={{
                    textAlign: "center",
                    margin: "var(--space-4) 0",
                    fontSize: 20,
                    color: "var(--slate)",
                  }}
                >
                  ↓
                </div>
                <div>
                  <strong style={{ color: "var(--ink)" }}>Sortida:</strong> Quadern particional, escriptures, Models 650 i 660, inventari formal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTATGES */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            BENEFICIS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "var(--space-10)" }}>
            Per què generar automàticament?
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
                icon: "✓",
                title: "Sense revisió",
                desc: "Ulpiano genera la documentació directament des de dades validades. No cal revisar copies manuals.",
              },
              {
                icon: "✓",
                title: "Actualitzacions instantànies",
                desc: "Si canvia alguna dada de l'expedient, tots els documents es regeneren automàticament.",
              },
              {
                icon: "✓",
                title: "Normativa aplicada",
                desc: "Cada document inclou les cites normatives que corresponen (Art. CCCat, Llei 19/2010, RD 1629/1991).",
              },
              {
                icon: "✓",
                title: "Formats distribuïbles",
                desc: "Els documents es generen en formats de signatura digital (DocuSign, Adobe Sign) per a presentació amb hereus i notari.",
              },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "var(--space-3)" }}>
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: 2,
                    color: "var(--ulpiano-green)",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: "var(--space-2)" }}>
                    {item.title}
                  </div>
                  <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.7, margin: 0 }}>
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
            Documentació successòria sense transcripcions manuals
          </h2>
          <Link href="/ca/demo" className="btn-primary">
            Sol·licita la teva demo
          </Link>
        </div>
      </section>

      {/* CROSSLINK */}
      <CrossLink
        href="/ca/solucions/processament-documental"
        label="Digitalitza els documents del causant amb OCR i IA"
        description="Per a documentació automàtica, primer cal que els documents origine estiguin digitalitzats i les dades estructurades."
      />
    </>
  );
}
