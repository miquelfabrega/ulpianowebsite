import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Todas las soluciones de Ulpiano para la gestión sucesoria: planificación, fiscalidad, documentación y procesamiento documental.",
  robots: { index: false, follow: true },
};

export default function SolucionesPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-ink">Soluciones — En construcción</h1>
    </div>
  );
}
