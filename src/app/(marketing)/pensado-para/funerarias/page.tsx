import type { Metadata } from "next";
import { FunerariasClient } from "./FunerariasClient";

export const metadata: Metadata = {
  title: "Para Funerarias | Servicio Sucesorio Integrado — Ulpiano",
  description:
    "Amplía tu servicio funerario con la tramitación sucesoria digital. Expedientes estructurados, documentación procesada, ISD calculado. Ulpiano para funerarias.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/funerarias",
  },
};

export default function FunerariasPage() {
  return <FunerariasClient />;
}
