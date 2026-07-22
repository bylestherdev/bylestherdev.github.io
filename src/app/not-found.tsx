import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0F19] flex flex-col justify-center items-center px-6 text-center">
      {/* Contenedor visual del 404 con gradiente */}
      <div className="relative flex items-center justify-center">
        <h1 className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#3b82f6]/20 to-[#10B981]/20 select-none">
          404
        </h1>
        <div className="absolute text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
          🤖
        </div>
      </div>

      {/* Textos */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
        ¡Oops! Enlace no encontrado
      </h2>
      
      <p className="text-[#94a3b8] max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
        Parece que la página que buscas no existe o ha sido movida. Pero no te preocupes, nuestra IA ya calculó la ruta más rápida de regreso.
      </p>

      {/* Botón Call to Action */}
      <Link 
        href="/"
        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-[#3b82f6] rounded-xl hover:bg-[#2563eb] shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)]"
      >
        <span>Volver a la base</span>
        <svg 
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </main>
  );
}