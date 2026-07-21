import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Especializados | bylestherdev",
  description: "Desarrollo E-commerce (VTEX IO), sitios web a medida y automatización de procesos empresariales con Inteligencia Artificial.",
};

export default function Servicios() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">Lo que hacemos</p>
        <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6">
          Soluciones digitales<br /><em>para escalar.</em>
        </h1>
        <p className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed">
          Especialista en alto tráfico, optimización de conversiones y eliminación de tareas repetitivas.
        </p>
      </div>

      <div className="space-y-12">
        {/* E-commerce */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Desarrollo E-commerce Avanzado</h2>
          <p className="text-[#94a3b8] mb-6 leading-relaxed">
            Más de 4 años de experiencia manejando arquitecturas de alto tráfico y eventos críticos como <strong>Cyber Monday</strong>. Especialista en el ecosistema <strong>VTEX IO</strong>, construyendo tiendas robustas que no se caen cuando más vendes.
          </p>
          <div className="mb-6">
            <span className="text-xs font-bold text-[#3b82f6] uppercase tracking-wider block mb-3">Marcas con las que he trabajado:</span>
            <div className="flex flex-wrap gap-2">
              {["AudioMusica Chile", "Americanino Colombia", "Rifle Colombia", "Vans Chile", "American Eagle Colombia", "LedStudio", "Salfa Repuestos"].map((brand) => (
                <span key={brand} className="bg-[#1a2235] border border-[#2d3a4f] text-[#cbd5e1] text-xs px-3 py-1 rounded-full">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Automatización & IA */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Automatización & Inteligencia Artificial</h2>
          <p className="text-[#94a3b8] mb-6 leading-relaxed">
            Elimina el trabajo manual de tu equipo. Construyo flujos de trabajo eficientes utilizando <strong>n8n</strong> para conectar todas tus herramientas y CRM.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            Integro motores avanzados como <strong>OpenAI</strong> y <strong>Google Gemini</strong> para desplegar asistentes virtuales inteligentes, chatbots conversacionales y sistemas de calificación de leads que operan 24/7.
          </p>
        </div>

        {/* Sitios a medida */}
        <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Sitios y Plataformas a Medida</h2>
          <p className="text-[#94a3b8] mb-6 leading-relaxed">
            No me ato a una sola tecnología; elijo la herramienta adecuada para el problema adecuado. Desde landing pages ultra rápidas para captación de clientes, hasta sitios corporativos dinámicos o portales internos de gestión. Tu modelo de negocio dicta la arquitectura.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/contacto" className="inline-block bg-[#2563EB] hover:bg-[#3b82f6] text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
          Cotizar mi proyecto →
        </Link>
      </div>
    </main>
  );
}