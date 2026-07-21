import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import FloatingCTA from "@/components/global/FloatingCTA";

export const metadata: Metadata = {
  // Aquí está el cambio con mayúsculas y espacios corregidos
  title: "By Lesther Dev — Automatización de Operaciones y Desarrollo Web",
  description: "Automatizo tus operaciones e integro IA para que tu negocio escale sin contratar más personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-[#0B0F19] text-[#f0f4f8] antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}