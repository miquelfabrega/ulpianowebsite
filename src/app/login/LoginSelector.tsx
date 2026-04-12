"use client";

import Link from "next/link";
import { Briefcase, User, ArrowRight, ChevronLeft, Shield, Clock } from "lucide-react";

const portals = [
  {
    href: "https://backoffice.ulpiano.es/",
    Icon: Briefcase,
    iconBg: "linear-gradient(135deg, #2D6A4F, #40916C)",
    title: "Portal Profesional",
    subtitle: "Abogados, notarías y asesorías fiscales",
    hint: "Gestión de expedientes, motor fiscal ISD, generación documental",
  },
  {
    href: "https://app.ulpiano.es/",
    Icon: User,
    iconBg: "linear-gradient(135deg, #40916C, #52B788)",
    title: "Portal Cliente",
    subtitle: "Consulta el estado de tu expediente",
    hint: "Seguimiento, documentación y distribución patrimonial",
  },
];

export default function LoginSelector() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night px-6 pt-[calc(56px+2rem)] pb-8">
      {/* Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(45,106,79,0.07) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[5%] -bottom-[15%] h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(180,100,220,0.03) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-[480px]">
        {/* Logo mark */}
        <div className="mb-10 text-center">
          <div
            className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl shadow-[0_4px_16px_rgba(45,106,79,0.3)]"
            style={{ background: "linear-gradient(135deg, var(--ulpiano-green), var(--green-light))" }}
          >
            <span className="font-dm-sans text-xl font-bold leading-none text-white">U</span>
          </div>

          <h1 className="font-dm-sans text-[28px] font-bold leading-tight text-white sm:text-[32px]">
            Accede a Ulpiano
          </h1>
          <p className="mx-auto mt-2 max-w-[320px] text-[15px] leading-relaxed text-fog">
            Selecciona tu tipo de acceso para continuar
          </p>
        </div>

        {/* Portal cards */}
        <div className="flex flex-col gap-3">
          {portals.map((portal) => {
            const { Icon } = portal;
            return (
              <a
                key={portal.title}
                href={portal.href}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-5 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.07] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ulpiano-green)]"
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[10px] text-white"
                  style={{ background: portal.iconBg }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[16px] font-semibold leading-tight text-white">
                    {portal.title}
                  </div>
                  <div className="mt-0.5 text-[14px] leading-snug text-fog">
                    {portal.subtitle}
                  </div>
                  <div className="mt-1 text-[12px] leading-snug text-white/30">
                    {portal.hint}
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="flex-shrink-0 text-fog transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5"
                />
              </a>
            );
          })}
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-1.5 text-[12px] text-white/30">
            <Shield size={13} strokeWidth={1.5} />
            <span>Conexión cifrada</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-white/30">
            <Clock size={13} strokeWidth={1.5} />
            <span>Acceso inmediato</span>
          </div>
        </div>

        {/* Divider + back */}
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
          <p className="mb-4 text-[13px] text-white/30">
            ¿Aún no tienes cuenta?{" "}
            <Link href="/demo" className="text-[var(--ulpiano-green)] hover:text-[var(--green-light)] transition-colors">
              Solicita tu demo
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[13px] text-fog transition-colors hover:text-white"
          >
            <ChevronLeft size={14} strokeWidth={2} />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Gradient bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]"
        style={{ background: "linear-gradient(to top, rgba(15,31,61,1) 0%, transparent 100%)" }}
      />
    </section>
  );
}
