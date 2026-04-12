import type { Metadata } from "next";
import { Modelo652Client } from "./Modelo652Client";

export const metadata: Metadata = {
  title:
    "Modelo 652: Autoliquidación de Seguros de Vida | Guía Completa — Ulpiano",
  description:
    "Guía completa del Modelo 652: tributación del capital de seguros de vida cuando el beneficiario no es el tomador, plazo de 6 meses, reducciones catalanas (Llei 19/2010), cálculo de la cuota y cómo Ulpiano lo genera automáticamente desde el expediente.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-652",
  },
};

export default function Modelo652Page() {
  return <Modelo652Client />;
}
