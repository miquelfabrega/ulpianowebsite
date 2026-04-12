import type { Metadata } from "next";
import { Modelo653Client } from "./Modelo653Client";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Modelo 653: Consolidación de Dominio | Guía Completa",
  description:
    "Guía completa del Modelo 653: qué es, cuándo se presenta, causas de extinción del usufructo, cálculo de la cuota complementaria (Art. 26.c LISD) y cómo Ulpiano simula la consolidación antes de constituir el usufructo.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-653",
  },
};

export default function Modelo653Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Modelos fiscales", href: "/modelos" },
          { name: "Modelo 653", href: "/modelos/modelo-653" },
        ]}
      />
      <Modelo653Client />
    </>
  );
}
