import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | E-commerce, Automatización IA y Desarrollo Web — By Lesther Dev",
  description: "Creación y administración de e-commerce, automatización con IA, mailing transaccional y sitios web a medida. Soluciones digitales que escalan tu negocio.",
};

const services = [
  {
    name: "Automatización & Inteligencia Artificial",
    description:
      "Flujos de trabajo con n8n que conectan herramientas y CRM, integrando OpenAI y Google Gemini para desplegar asistentes virtuales, chatbots de WhatsApp e Instagram, y sistemas de calificación de leads que operan 24/7.",
  },
  {
    name: "E-commerce: Creación y Administración",
    description:
      "Desarrollo y administración de tiendas online en el ecosistema VTEX IO, con experiencia en arquitecturas de alto tráfico como Cyber Monday — desde el lanzamiento hasta la operación continua.",
  },
  {
    name: "Mailing Transaccional y Promocional",
    description:
      "Diseño y automatización de correos transaccionales y promocionales: recordatorios de citas, confirmaciones de compra, campañas de eventos y lanzamientos de productos.",
  },
  {
    name: "Sitios y Plataformas a Medida",
    description:
      "Desarrollo de landing pages, sitios corporativos y portales internos de gestión, con la arquitectura tecnológica adecuada según el modelo de negocio del cliente.",
  },
  {
    name: "Mantenimiento y Soporte Continuo",
    description:
      "Plan de mantenimiento mensual con monitoreo de automatizaciones, actualizaciones y soporte técnico continuo para sitios web y flujos de automatización.",
  },
  {
    name: "Dashboards e Informes Automatizados",
    description:
      "Paneles que centralizan ventas, leads y métricas clave en un solo lugar, actualizados automáticamente.",
  },
  {
    name: "Integración de Pagos Online",
    description:
      "Integración de pasarelas de pago como Stripe y Webpay directamente en sitios web y flujos de reserva.",
  },
  {
    name: "Optimización de Velocidad y SEO Técnico",
    description:
      "Auditoría y optimización de rendimiento web (Core Web Vitals) y estructura técnica de SEO.",
  },
];

export default function Servicios() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.name,
      description: service.description,
      provider: {
        "@id": "https://bylesther.dev/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "Chile" },
        { "@type": "Place", name: "LATAM" },
      ],
    })),
  };

  return (
    <main className="w-full min-h-screen pt-40 md:pt-48 pb-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Header de la página */}
      <div className="w-full text-center mb-16 md:mb-24">
        <span className="text-[#10B981] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
          Lo que hacemos
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Soluciones digitales<br /><em className="text-[#3b82f6] not-italic">para escalar.</em>
        </h1>
        <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Especialista en alto tráfico, optimización de conversiones y eliminación de tareas repetitivas.
        </p>
      </div>

      {/* Contenedor de Tarjetas */}
      <div className="w-full space-y-10 md:space-y-12">

        {/* Automatización & IA — Destacado como el fuerte de la agencia */}
        <div className="bg-[#111827] border-2 border-[#10B981]/40 rounded-2xl p-6 md:p-12 shadow-lg relative">
          <span className="absolute -top-3 left-6 bg-[#10B981] text-[#0B0F19] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Nuestro fuerte
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Automatización & Inteligencia Artificial</h2>
          <p className="text-[#94a3b8] text-sm md:text-base mb-4 leading-relaxed">
            Elimina las tareas repetitivas que le quitan tiempo a tu equipo. Construyo flujos con <strong className="text-white">n8n</strong> que conectan tus herramientas, tu CRM y tus redes en un solo sistema que trabaja solo.
          </p>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            Integro <strong className="text-white">OpenAI</strong> y <strong className="text-white">Google Gemini</strong> para desplegar asistentes virtuales, chatbots de WhatsApp e Instagram, y sistemas de calificación de leads que atienden y venden 24/7 — sin que tú estés detrás de la pantalla.
          </p>
        </div>

        {/* E-commerce */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">E-commerce: Creación y Administración</h2>
          <p className="text-[#94a3b8] text-sm md:text-base mb-8 leading-relaxed">
            Más de 4 años construyendo y operando tiendas de alto tráfico, incluyendo eventos críticos como <strong className="text-white">Cyber Monday</strong>. Especialista en el ecosistema <strong className="text-white">VTEX IO</strong> — desde el lanzamiento de tu tienda hasta la administración continua: catálogo, promociones, integraciones de pago y soporte cuando más lo necesitas.
          </p>
          <div>
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider block mb-4">
              Marcas con las que he trabajado:
            </span>
            <div className="flex flex-wrap gap-3">
              {["AudioMusica Chile", "Americanino Colombia", "Rifle Colombia", "Vans Chile", "American Eagle Colombia", "LedStudio", "Salfa Repuestos"].map((brand) => (
                <span key={brand} className="bg-[#1e293b] border border-[#334155] text-white text-xs md:text-sm px-4 py-2 rounded-full font-medium tracking-wide">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mailing Transaccional y Promocional */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Mailing Transaccional y Promocional</h2>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            Diseño y automatizo correos que realmente se abren: recordatorios de citas y agenda, confirmaciones de compra, campañas de eventos, lanzamientos de productos y promociones. Cada envío con diseño propio de tu marca, disparado automáticamente en el momento justo — sin que tengas que enviarlo a mano.
          </p>
        </div>

        {/* Sitios a medida */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Sitios y Plataformas a Medida</h2>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            No me ato a una sola tecnología; elijo la herramienta adecuada para el problema adecuado. Desde landing pages ultra rápidas para captación de clientes, hasta sitios corporativos dinámicos o portales internos de gestión. Tu modelo de negocio dicta la arquitectura.
          </p>
        </div>

        {/* Mantenimiento y Soporte Continuo (Care) */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Mantenimiento y Soporte Continuo</h2>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            Un sitio o una automatización que nadie revisa, tarde o temprano falla. Con un plan de mantenimiento mensual monitoreo tus flujos, aplico actualizaciones, reviso que tus integraciones sigan funcionando y respondo cuando algo necesita ajustarse — para que no tengas que preocuparte de la parte técnica nunca más.
          </p>
        </div>

        {/* Dashboards e Informes Automatizados */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Dashboards e Informes Automatizados</h2>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            Deja de armar reportes a mano. Construyo paneles que centralizan tus ventas, leads y métricas clave en un solo lugar, actualizados automáticamente — para que sepas cómo va tu negocio sin tener que pedírselo a nadie.
          </p>
        </div>

        {/* Integración de Pagos */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Integración de Pagos Online</h2>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            ¿No necesitas una tienda completa, solo cobrar online? Integro pasarelas como <strong className="text-white">Stripe</strong> y <strong className="text-white">Webpay</strong> directo en tu sitio o flujo de reservas, para que puedas recibir pagos sin fricción desde el primer día.
          </p>
        </div>

        {/* Optimización de Velocidad y SEO Técnico */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Optimización de Velocidad y SEO Técnico</h2>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            Un sitio lento pierde clientes y posiciones en Google. Audito y optimizo el rendimiento de tu plataforma (Core Web Vitals) y su estructura técnica de SEO, para que cargue rápido y sea fácil de encontrar.
          </p>
        </div>

      </div>

      {/* CTA Final */}
      <div className="w-full mt-20 text-center">
        <Link href="/contacto" className="inline-block bg-[#2563EB] hover:bg-[#3b82f6] text-white font-semibold py-4 px-10 rounded-lg transition-colors shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
          Cotizar mi proyecto →
        </Link>
      </div>
    </main>
  );
}