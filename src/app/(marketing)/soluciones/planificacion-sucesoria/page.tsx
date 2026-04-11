import type { Metadata } from "next";
import { PlanificadorClient } from "./PlanificadorClient";

export const metadata: Metadata = {
  title:
    "Planificador de Herencias | Inventario patrimonial y escenarios sucesorios — Ulpiano",
  description:
    "Consolida bienes, derechos y deudas del causante en un único inventario. Calcula legítimas según el CCCat, compara escenarios de distribución y genera la documentación del expediente.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/planificacion-sucesoria",
  },
};

export default function PlanificacionSucesoriaPage() {
  return <PlanificadorClient />;
}
