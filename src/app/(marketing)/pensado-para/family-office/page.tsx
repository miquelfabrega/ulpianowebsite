import type { Metadata } from "next";
import { FamilyOfficeClient } from "./FamilyOfficeClient";

export const metadata: Metadata = {
  title: "Para Family Offices | Planificación Sucesoria Pre-Mortem — Ulpiano",
  description:
    "Planificación sucesoria pre-mortem para family offices. Escenarios fiscales comparados, patrimonio complejo inventariado, empresa familiar distribuida con impacto fiscal calculado. Ulpiano.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/family-office",
  },
};

export default function FamilyOfficePage() {
  return <FamilyOfficeClient />;
}
