import type { Metadata } from "next";
import { PlanificadorClient } from "./PlanificadorClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Planificador de Herencias | Inventario patrimonial y escenarios sucesorios",
  description:
    "Consolida bienes, derechos y deudas del causante en un único inventario. Calcula legítimas según el CCCat, compara escenarios de distribución y genera la documentación del expediente.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/planificacion-sucesoria",
  },
};

export default function PlanificacionSucesoriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Soluciones", href: "/soluciones" },
          { name: "Planificación sucesoria", href: "/soluciones/planificacion-sucesoria" },
        ]}
      />
      <PlanificadorClient />
    </>
  );
}
