import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Especializados | bylestherdev",
  description: "Desarrollo E-commerce (VTEX IO), sitios web a medida y automatización de procesos empresariales con Inteligencia Artificial.",
};

export default function Servicios() {
  return (
    <main className="w-full min-h-screen pt-40 md:pt-48 pb-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
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
        {/* E-commerce */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Desarrollo E-commerce Avanzado</h2>
          <p className="text-[#94a3b8] text-sm md:text-base mb-8 leading-relaxed">
            Más de 4 años de experiencia manejando arquitecturas de alto tráfico y eventos críticos como <strong className="text-white">Cyber Monday</strong>. Especialista en el ecosistema <strong className="text-white">VTEX IO</strong>, construyendo tiendas robustas que no se caen cuando más vendes.
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

        {/* Automatización & IA */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Automatización & Inteligencia Artificial</h2>
          <p className="text-[#94a3b8] text-sm md:text-base mb-4 leading-relaxed">
            Elimina el trabajo manual de tu equipo. Construyo flujos de trabajo eficientes utilizando <strong className="text-white">n8n</strong> para conectar todas tus herramientas y CRM.
          </p>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            Integro motores avanzados como <strong className="text-white">OpenAI</strong> y <strong className="text-white">Google Gemini</strong> para desplegar asistentes virtuales inteligentes, chatbots conversacionales y sistemas de calificación de leads que operan 24/7.
          </p>
        </div>

        {/* Sitios a medida */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-6">Sitios y Plataformas a Medida</h2>
          <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
            No me ato a una sola tecnología; elijo la herramienta adecuada para el problema adecuado. Desde landing pages ultra rápidas para captación de clientes, hasta sitios corporativos dinámicos o portales internos de gestión. Tu modelo de negocio dicta la arquitectura.
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