import Link from "next/link";

const columns = [
  {
    header: "Producto",
    links: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Planificador", href: "/soluciones/planificacion-sucesoria" },
      { label: "Fiscalidad", href: "/soluciones/fiscalidad-sucesoria" },
      { label: "Activos digitales", href: "/soluciones/activos-digitales" },
      { label: "Precios", href: "/precios" },
    ],
  },
  {
    header: "Para quién",
    links: [
      { label: "Despachos", href: "/pensado-para/despachos" },
      { label: "Notarías", href: "/pensado-para/notarias" },
      { label: "Asesorías", href: "/pensado-para/asesorias" },
      { label: "Family Office", href: "#" },
    ],
  },
  {
    header: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
  {
    header: "Contacto",
    links: [
      { label: "Formulario de contacto", href: "/contacto" },
      { label: "soporte@ulpiano.es", href: "mailto:soporte@ulpiano.es" },
      { label: "+34 972 XXX XXX", href: "tel:+34972000000" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-mist/10">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="font-dm-sans font-bold text-lg mb-2">ULPIANO</h3>
            <p className="text-sm text-white/60 mb-4">
              El sistema operativo de las herencias.
            </p>
            <p className="text-xs text-white/50">
              &copy; 2026 Ulpiano. Todos los derechos reservados.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.header}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {col.header}
              </h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white/90 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-mist/10 pt-8">
          <p className="text-xs text-white/50 text-center">
            Ulpiano &copy; 2026. Plataforma Integral de Gestión Sucesoria
          </p>
        </div>
      </div>
    </footer>
  );
}
