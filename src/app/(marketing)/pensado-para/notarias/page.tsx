import type { Metadata } from "next";
import { NotariasClient } from "./NotariasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Para Notarías | Gestión Digital de Herencias",
  description:
    "El expediente post-testamento activo, la documentación centralizada y cifrada, la generación de escrituras desde datos estructurados. Ulpiano para notarías.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/notarias",
  },
};

export default function NotariasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Notarías", href: "/pensado-para/notarias" },
        ]}
      />
      <NotariasClient />
    </>
  );
}
