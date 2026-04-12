import type { Metadata } from "next";
import { AseguradorasClient } from "./AseguradorasClient";

export const metadata: Metadata = {
  title: "Para Aseguradoras | Servicio Sucesorio Complementario — Ulpiano",
  description:
    "Complementa tus pólizas de vida y decesos con la gestión sucesoria digital. Expedientes estructurados, fiscalidad calculada, fidelización real. Ulpiano para aseguradoras.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/aseguradoras",
  },
};

export default function AseguradorasPage() {
  return <AseguradorasClient />;
}
