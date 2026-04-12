import type { Metadata } from "next";
import { Modelo650Client } from "./Modelo650Client";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Modelo 650: Autoliquidación del Impuesto sobre Sucesiones | Guía Completa",
  description:
    "Guía completa del Modelo 650: qué es, quién lo presenta, plazo de 6 meses, reducciones catalanas (Llei 19/2010), cálculo de la cuota y cómo Ulpiano lo genera automáticamente desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-650",
  },
};

export default function Modelo650Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Modelos fiscales", href: "/modelos" },
          { name: "Modelo 650", href: "/modelos/modelo-650" },
        ]}
      />
      <Modelo650Client />
    </>
  );
}
