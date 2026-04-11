import type { Metadata } from "next";
import { FiscalidadClient } from "./FiscalidadClient";

export const metadata: Metadata = {
  title:
    "Fiscalidad Sucesoria | Autoliquidación de Modelos 650, 651, 660 — Ulpiano",
  description:
    "Calcula, presenta y liquida los impuestos sucesorios de tus clientes de forma automatizada. Modelos 650, 651, 652, 653 y 660 con normativa estatal y autonómica actualizada.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/fiscalidad-sucesoria",
  },
};

export default function FiscalidadSucesoriaPage() {
  return <FiscalidadClient />;
}
