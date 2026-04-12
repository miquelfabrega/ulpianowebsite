import type { Metadata } from "next";
import { AsesoriasClient } from "./AsesoriasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Para Asesorías Fiscales | Gestión Digital de Herencias",
  description:
    "Recálculo automático del ISD ante cambios normativos, alertas de plazo, trazabilidad auditable ante la ATC y Modelo 650 autocompleto. Ulpiano para asesores fiscales.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/asesorias",
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
    </>
  );
}
