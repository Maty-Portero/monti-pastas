import type { Metadata } from "next";
import { Baloo_2, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BotonWhatsapp from "../components/BotonWhatsapp";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Monti Bar de Pastas | Agronomía, CABA",
  description:
    "Menú digital y pedidos directos, sin comisiones ni rodeos. Pastas caseras y el famoso volcán de ñoquis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${baloo.variable} ${manrope.variable} ${plexMono.variable}`}>
        <Header />
        {children}
        <BotonWhatsapp />
        <Footer />
      </body>
    </html>
  );
}