import type { Metadata } from "next";
import { Modelo660Client } from "./Modelo660Client";

export const metadata: Metadata = {
  title:
    "Modelo 660: Declaración de Sucesiones — Inventario de Bienes | Guía Completa — Ulpiano",
  description:
    "Guía completa del Modelo 660: declaración del inventario de bienes, derechos y deudas del causante. Qué incluye, documentación necesaria, plazo de 6 meses y cómo Ulpiano lo genera automáticamente desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-660",
  },
};

export default function Modelo660Page() {
  return <Modelo660Client />;
}
