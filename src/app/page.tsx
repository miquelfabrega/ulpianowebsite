import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:py-40 bg-gradient-to-b from-night via-night to-night text-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
          {/* Eyebrow */}
          <div>
            <p className="text-sm font-medium tracking-widest text-mist/70 uppercase">
              Plataforma de Gestión Sucesoria
            </p>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-dm-sans">
              De inventario a cuaderno participacional. Sin errores de cálculo. Sin revisión manual de la norma.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-mist/80 font-light leading-relaxed max-w-2xl">
              Ulpiano es la plataforma que estructura, valida y documenta el proceso sucesorio completo. Para abogados, asesores y notarías que gestionan herencias con volumen, complejidad y responsabilidad profesional.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-ulpiano-green hover:bg-green-light text-white font-dm-sans font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg"
            >
              Solicita tu demo gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/60">Para</h3>
              <p className="text-lg font-dm-sans font-semibold text-ink">Despachos de abogados</p>
              <p className="text-sm text-ink/60">Gestión integral de procesos sucesorios</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/60">Para</h3>
              <p className="text-lg font-dm-sans font-semibold text-ink">Notarías</p>
              <p className="text-sm text-ink/60">Documentación y validación normalizada</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/60">Para</h3>
              <p className="text-lg font-dm-sans font-semibold text-ink">Asesorías</p>
              <p className="text-sm text-ink/60">Planificación patrimonial y fiscal</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
