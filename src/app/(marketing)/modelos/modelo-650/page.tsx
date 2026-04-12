import type { Metadata } from "next";
import { Modelo650Client } from "./Modelo650Client";

export const metadata: Metadata = {
  title:
    "Modelo 650: Autoliquidación del Impuesto sobre Sucesiones | Guía Completa — Ulpiano",
  description:
    "Guía completa del Modelo 650: qué es, quién lo presenta, plazo de 6 meses, reducciones catalanas (Llei 19/2010), cálculo de la cuota y cómo Ulpiano lo genera automáticamente desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-650",
  },
};

export default function Modelo650Page() {
  return <Modelo650Client />;
}
