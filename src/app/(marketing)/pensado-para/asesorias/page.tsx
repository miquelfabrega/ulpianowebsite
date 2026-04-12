import type { Metadata } from "next";
import { AsesoriasClient } from "./AsesoriasClient";

export const metadata: Metadata = {
  title: "Para Asesorías Fiscales | Gestión Digital de Herencias — Ulpiano",
  description:
    "Recálculo automático del ISD ante cambios normativos, alertas de plazo, trazabilidad auditable ante la ATC y Modelo 650 autocompleto. Ulpiano para asesores fiscales.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/asesorias",
  },
};

export default function AsesoriasPage() {
  return <AsesoriasClient />;
}
