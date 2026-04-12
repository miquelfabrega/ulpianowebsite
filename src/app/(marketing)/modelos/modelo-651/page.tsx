import type { Metadata } from "next";
import { Modelo651Client } from "./Modelo651Client";

export const metadata: Metadata = {
  title:
    "Modelo 651: Autoliquidación del Impuesto de Donaciones | Guía Completa — Ulpiano",
  description:
    "Guía completa del Modelo 651: qué es, quién lo presenta, plazo de 30 días hábiles, reducciones catalanas para donaciones (Llei 19/2010, Arts. 15-23), comparativa donación vs herencia y cómo Ulpiano calcula la cuota automáticamente.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-651",
  },
};

export default function Modelo651Page() {
  return <Modelo651Client />;
}
