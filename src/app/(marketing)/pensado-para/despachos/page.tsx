import type { Metadata } from "next";
import { DespachosClient } from "./DespachosClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Para Despachos de Abogados | Gestión Digital de Herencias",
  description:
    "Digitaliza la gestión de herencias en tu despacho. Expedientes sucesorios estructurados, diagramas interactivos, simulaciones fiscales y documentos generados automáticamente.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/despachos",
  },
};

export default function DespachosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Despachos", href: "/pensado-para/despachos" },
        ]}
      />
      <DespachosClient />
    </>
  );
}
