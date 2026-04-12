import type { Metadata } from "next";
import { Modelo652Client } from "./Modelo652Client";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Modelo 652: Autoliquidación de Seguros de Vida | Guía Completa",
  description:
    "Guía completa del Modelo 652: tributación del capital de seguros de vida cuando el beneficiario no es el tomador, plazo de 6 meses, reducciones catalanas (Llei 19/2010), cálculo de la cuota y cómo Ulpiano lo genera automáticamente desde el expediente.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-652",
  },
};

export default function Modelo652Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Modelos fiscales", href: "/modelos" },
          { name: "Modelo 652", href: "/modelos/modelo-652" },
        ]}
      />
      <Modelo652Client />
    </>
  );
}
