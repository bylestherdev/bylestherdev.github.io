import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import FloatingCTA from "@/components/global/FloatingCTA";

export const metadata: Metadata = {
  title: "ByLesther Dev | Automatización con IA y Desarrollo Web para Negocios",
  description: "Agencia de automatización e IA en Chile. Integro n8n, chatbots y desarrollo web (Next.js) para que tu negocio escale sin contratar más personal.",
  keywords: [
    "automatización de procesos",
    "desarrollo web Next.js",
    "agencia de IA Chile",
    "automatización n8n",
    "chatbots para negocios",
    "desarrollo web Santiago",
  ],
  authors: [{ name: "Jordi" }],
  metadataBase: new URL("https://bylestherdev.vercel.app/"), // reemplaza por tu dominio real
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ByLesther Dev | Automatización con IA y Desarrollo Web",
    description: "Automatizo tus operaciones e integro IA para que tu negocio escale sin contratar más personal.",
    url: "https://bylestherdev.vercel.app/",
    siteName: "ByLesther Dev",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png", // 1200x630px recomendado
        width: 1200,
        height: 630,
        alt: "ByLesther Dev — Automatización e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByLesther Dev | Automatización con IA y Desarrollo Web",
    description: "Automatizo tus operaciones e integro IA para que tu negocio escale sin contratar más personal.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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