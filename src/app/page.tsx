import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización con IA y Desarrollo Web",
  description: "Construyo sistemas con IA que responden, agendan y venden 24/7. Automatización, e-commerce y desarrollo web para negocios en Chile y LATAM.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-[1100px] mx-auto px-6 pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        
        {/* Badge Disponibilidad */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          Aceptando nuevos proyectos este mes
        </div>
        
        {/* Título Principal */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 tracking-tight">
          Deja de perder ventas<br />
          <span className="text-white">mientras duermes.</span><br />
          <em className="text-[#3b82f6] not-italic">Automatízalo con IA.</em>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseño y construyo sistemas que responden a tus clientes, agendan reuniones y ordenan tu operación las 24 horas — sin que tengas que contratar, capacitar ni supervisar a nadie más.
        </p>
        
        {/* Botones - Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
          
          {/* Fila 1: Acciones Principales */}
          <a 
            href="https://wa.me/56946976778?text=Hola%20Jordi,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
            target="_blank" 
            rel="noreferrer"
            className="btn-action w-full !bg-[#10B981] hover:!bg-[#059669] !shadow-[0_4px_20px_rgba(16,185,129,0.3)] !inline-flex items-center justify-center gap-2.5"
          >
            <span className="text-xl leading-none">✆</span> 
            <span>Cotizar por WhatsApp</span>
          </a>

          <Link href="/contacto" className="btn-action w-full !inline-flex items-center justify-center">
            Agendar diagnóstico gratis
          </Link>

          {/* Fila 2: Acciones Secundarias (Bordes) */}
          <Link href="/calculadora" className="w-full px-6 py-3.5 rounded-lg text-[#cbd5e1] font-semibold border border-[#2d3a4f] hover:bg-[#1a2235] hover:text-white transition-colors flex items-center justify-center">
            Calcula cuánto estás perdiendo
          </Link>

          <Link href="/simulador-ia" className="w-full px-6 py-3.5 rounded-lg text-[#cbd5e1] font-semibold border border-[#2d3a4f] hover:bg-[#1a2235] hover:text-white transition-colors flex items-center justify-center">
            Prueba un asistente 24/7
          </Link>
          
        </div>
      </section>

      {/* 2. BANNER DE TECNOLOGÍAS */}
      <section className="w-full border-y border-[#2d3a4f] bg-[#111827] py-8 flex flex-col items-center">
        <p className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest mb-5 text-center">
          Construido sobre infraestructura de nivel enterprise
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-6 max-w-[1100px] mx-auto opacity-70">
          {["n8n", "WhatsApp Business API", "Gemini 1.5 Flash", "Instagram DM API", "Google Workspace", "Node.js", "React", "Next.js", "Stripe", "Docker", "Vercel"].map((tech, i) => (
            <span key={i} className="text-[#cbd5e1] font-medium text-sm md:text-base whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN DE ESTADÍSTICAS / VALOR */}
      <section className="w-full max-w-[1100px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          <div className="border-l-2 border-[#3b82f6] pl-6 flex flex-col">
            <h3 className="text-4xl lg:text-5xl font-serif text-white mb-2">&lt;2min</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mt-auto">Tiempo de respuesta a un lead nuevo. La competencia tarda horas.</p>
          </div>
          
          <div className="border-l-2 border-[#10B981] pl-6 flex flex-col">
            <h3 className="text-4xl lg:text-5xl font-serif text-white mb-2">24/7</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mt-auto">Tu negocio vendiendo y respondiendo aunque estés durmiendo.</p>
          </div>
          
          <div className="border-l-2 border-[#E1306C] pl-6 flex flex-col">
            <h3 className="text-4xl lg:text-5xl font-serif text-white mb-2">100%</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mt-auto">El código y la plataforma son tuyos. Sin dependencia de terceros.</p>
          </div>

          <div className="border-l-2 border-[#f59e0b] pl-6 flex flex-col">
            <h3 className="text-4xl lg:text-5xl font-serif text-white mb-2">50%</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mt-auto">Solo pagas la mitad al iniciar. El resto, cuando el sistema ya funciona.</p>
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN CÓMO TRABAJAMOS */}
      <section className="w-full max-w-[1100px] mx-auto px-6 pb-32">
        <div className="mb-12">
          <span className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4 block">Proceso</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white">Así pasas de operar a mano a operar en automático</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-8 card-interactive">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center font-bold text-xl mb-6">1</div>
            <h3 className="text-white text-xl font-semibold mb-3">Auditoría</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Identificamos exactamente dónde estás perdiendo tiempo y clientes, y diseñamos la arquitectura que lo resuelve.</p>
          </div>
          
          {/* Paso 2 */}
          <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-8 card-interactive">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold text-xl mb-6">2</div>
            <h3 className="text-white text-xl font-semibold mb-3">Desarrollo</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Construyo tu sistema por etapas, con avances que puedes revisar en el camino — nunca una caja negra.</p>
          </div>
          
          {/* Paso 3 */}
          <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-8 card-interactive">
            <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center font-bold text-xl mb-6">3</div>
            <h3 className="text-white text-xl font-semibold mb-3">Despliegue</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Tu sistema entra en producción, tu equipo queda capacitado y tienes soporte para que nunca se detenga.</p>
          </div>
        </div>
      </section>

    </main>
  );
}