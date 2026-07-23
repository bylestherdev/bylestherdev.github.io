import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import FloatingCTA from "@/components/global/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "ByLesther Dev | Automatización con IA y Desarrollo Web para Negocios",
    template: "%s | ByLesther Dev",
  },
  description: "Agencia de automatización e IA en Chile. Integro n8n, chatbots y desarrollo web (Next.js) para que tu negocio escale sin contratar más personal.",
  keywords: [
    "automatización de procesos",
    "desarrollo web Next.js",
    "agencia de IA Chile",
    "automatización n8n",
    "chatbots para negocios",
    "desarrollo web Santiago",
    "e-commerce VTEX IO",
    "mailing transaccional",
  ],
  authors: [{ name: "Jordi", url: "https://bylesther.dev" }],
  creator: "ByLesther Dev",
  publisher: "ByLesther Dev",
  metadataBase: new URL("https://bylesther.dev/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ByLesther Dev | Automatización con IA y Desarrollo Web",
    description: "Automatizo tus operaciones e integro IA para que tu negocio escale sin contratar más personal.",
    url: "https://bylesther.dev/",
    siteName: "ByLesther Dev",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
  formatDetection: {
    telephone: false,
  },
  category: "technology",
  // Descomenta cuando verifiques el sitio en Google Search Console —
  // ahí te dan este código.
  // verification: {
  //   google: "tu-código-de-verificación",
  // },
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://bylesther.dev/#organization",
    name: "ByLesther Dev",
    url: "https://bylesther.dev",
    logo: "https://bylesther.dev/logo.png",
    image: "https://bylesther.dev/og-image.png",
    description:
      "Agencia de automatización con IA, desarrollo de e-commerce y sitios web a medida para negocios en Chile y LATAM.",
    areaServed: [
      { "@type": "Country", name: "Chile" },
      { "@type": "Place", name: "LATAM" },
    ],
    sameAs: [
      "https://instagram.com/bylestherdev",
      "https://github.com/bylestherdev",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://bylesther.dev/contacto",
      availableLanguage: ["Spanish"],
    },
  };

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-[#0B0F19] text-[#f0f4f8] antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        )}
      </body>
    </html>
  );
}