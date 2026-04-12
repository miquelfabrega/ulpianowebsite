import type { Metadata } from "next";
import { FunerariasClient } from "./FunerariasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Para Funerarias | Servicio Sucesorio Integrado",
  description:
    "Amplía tu servicio funerario con la tramitación sucesoria digital. Expedientes estructurados, documentación procesada, ISD calculado. Ulpiano para funerarias.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/funerarias",
  },
};

export default function FunerariasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Funerarias", href: "/pensado-para/funerarias" },
        ]}
      />
      <FunerariasClient />
    </>
  );
}
