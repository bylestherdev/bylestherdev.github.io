import type { Metadata } from "next";
import "./globals.css"; // Tus estilos globales
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import FloatingCTA from "@/components/global/FloatingCTA";

// Configuración profesional de SEO para Vercel y Redes Sociales
export const metadata: Metadata = {
  title: "By Lesther Dev — Automatización de Operaciones y Desarrollo Web",
  description: "Automatizo tus operaciones e integro IA para que tu negocio escale sin contratar más personal. Para emprendedores digitales hispanohablantes.",
  openGraph: {
    title: "bylestherdev — Automatización de Operaciones",
    description: "Construyo sistemas con IA que eliminan el trabajo manual y plataformas para escalar.",
    url: "https://bylestherdev.vercel.app", // Actualizaremos a tu dominio final luego
    siteName: "bylestherdev",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Navbar />
        {/* Aquí se inyecta el contenido de cada página (page.tsx) */}
        <main>{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}