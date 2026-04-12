import type { Metadata } from "next";
import { DespachosClient } from "./DespachosClient";

export const metadata: Metadata = {
  title:
    "Para Despachos de Abogados | Gestión Digital de Herencias — Ulpiano",
  description:
    "Digitaliza la gestión de herencias en tu despacho. Expedientes sucesorios estructurados, diagramas interactivos, simulaciones fiscales y documentos generados automáticamente. ulpiano.es",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/despachos",
  },
};

export default function DespachosPage() {
  return <DespachosClient />;
}
