import type { Metadata } from "next";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ulpiano | Plataforma Integral de Gestión Sucesoria",
  description:
    "La plataforma que estructura, valida y documenta el proceso sucesorio completo. Para abogados, asesores y notarías que gestionan herencias.",
  keywords: [
    "gestión sucesoria",
    "herencias",
    "planificación patrimonial",
    "fiscalidad sucesoria",
    "despachos abogados",
  ],
  openGraph: {
    title: "Ulpiano | Plataforma Integral de Gestión Sucesoria",
    description: "El sistema operativo de las herencias.",
    url: "https://ulpiano.es",
    siteName: "Ulpiano",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-white text-ink antialiased">
        <Header />
        <main className="flex flex-col min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
