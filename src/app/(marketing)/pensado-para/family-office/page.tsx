import type { Metadata } from "next";
import { FamilyOfficeClient } from "./FamilyOfficeClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Para Family Offices | Planificación Sucesoria Pre-Mortem",
  description:
    "Planificación sucesoria pre-mortem para family offices. Escenarios fiscales comparados, patrimonio complejo inventariado, empresa familiar distribuida con impacto fiscal calculado.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/family-office",
  },
};

export default function FamilyOfficePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Family Office", href: "/pensado-para/family-office" },
        ]}
      />
      <FamilyOfficeClient />
    </>
  );
}
