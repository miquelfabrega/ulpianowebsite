"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import ButtonGhost from "@/components/buttons/ButtonGhost";

const navLinks = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Pensado para", href: "/pensado-para/despachos" },
  { label: "Precios", href: "/precios" },
  { label: "Recursos", href: "/recursos" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 h-16 bg-night transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-dm-sans font-bold text-xl tracking-tight"
        >
          ULPIANO
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <ButtonGhost href="#" size="sm">
            Iniciar sesión
          </ButtonGhost>
          <ButtonPrimary href="/demo" size="sm">
            Reserva tu demo
          </ButtonPrimary>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Abrir menú de navegación"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-night border-t border-mist/20 p-4 md:hidden shadow-lg">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-white/70 hover:text-white text-sm py-3 transition-colors border-b border-white/5 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <ButtonPrimary href="/demo" size="sm" className="w-full">
              Reserva tu demo
            </ButtonPrimary>
          </div>
        </nav>
      )}
    </header>
  );
}
