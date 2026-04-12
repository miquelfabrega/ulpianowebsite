import type { Metadata } from "next";
import { Modelo653Client } from "./Modelo653Client";

export const metadata: Metadata = {
  title:
    "Modelo 653: Consolidación de Dominio | Guía Completa — Ulpiano",
  description:
    "Guía completa del Modelo 653: qué es, cuándo se presenta, causas de extinción del usufructo, cálculo de la cuota complementaria (Art. 26.c LISD) y cómo Ulpiano simula la consolidación antes de constituir el usufructo.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-653",
  },
};

export default function Modelo653Page() {
  return <Modelo653Client />;
}
