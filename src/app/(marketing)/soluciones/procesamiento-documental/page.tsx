import type { Metadata } from "next";
import { ProcesamientoDocumentalClient } from "./ProcesamientoDocumentalClient";

export const metadata: Metadata = {
  title:
    "Procesamiento Inteligente de Documentos | Digitaliza la gestión documental sucesoria — Ulpiano",
  description:
    "Digitaliza, clasifica y extrae información clave de certificados de defunción, testamentos, escrituras y más. Tecnología OCR e IA para agilizar la tramitación de herencias.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/procesamiento-documental",
  },
};

export default function ProcesamientoDocumentalPage() {
  return <ProcesamientoDocumentalClient />;
}
