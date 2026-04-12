import type { Metadata } from "next";
import { DemoClient } from "./DemoClient";

export const metadata: Metadata = {
  title: "Solicita tu Demo | Ulpiano — Plataforma de Gestión Sucesoria",
  description:
    "25 minutos sobre el producto real. Sin presentación comercial. Verás cómo se inventaría un patrimonio, se calcula el ISD con la norma citada y se genera el cuaderno particional.",
  alternates: {
    canonical: "https://ulpiano.es/demo",
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
