import type { Metadata } from "next";
import { AsesoriasClient } from "./AsesoriasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Asesoría Fiscal de Herencias: Modelo 650 Automatizado | Ulpiano",
  description:
    "Recálculo automático del ISD ante cambios normativos, alertas de plazo, trazabilidad auditable ante la ATC y Modelo 650 autocompleto. Ulpiano para asesores fiscales.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/asesorias",
    languages: {
      es: "https://ulpiano.es/pensado-para/asesorias",
      ca: "https://ulpiano.es/ca/pensat-per/assessories",
    },
  },
};

export default function AsesoriasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Asesorías", href: "/pensado-para/asesorias" },
        ]}
      />
      <AsesoriasClient />
      <CrossLink
        href="/modelos/modelo-650"
        label="Qué es el Modelo 650 y cómo se calcula"
        description="Guía completa del Modelo 650: reducciones, plazos y cálculo de la cuota con normativa catalana."
      />
    </>
  );
}
