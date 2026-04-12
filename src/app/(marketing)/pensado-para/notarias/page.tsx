import type { Metadata } from "next";
import { NotariasClient } from "./NotariasClient";

export const metadata: Metadata = {
  title: "Para Notarías | Gestión Digital de Herencias — Ulpiano",
  description:
    "El expediente post-testamento activo, la documentación centralizada y cifrada, la generación de escrituras desde datos estructurados. Ulpiano para notarías.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/notarias",
  },
};

export default function NotariasPage() {
  return <NotariasClient />;
}
