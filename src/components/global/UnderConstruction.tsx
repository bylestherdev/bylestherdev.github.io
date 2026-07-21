import Link from "next/link";

interface UnderConstructionProps {
  title?: string;
  message?: string;
}

export default function UnderConstruction({
  title = "Página en construcción.",
  message = "Estoy preparando las herramientas y el código para esta sección. Vuelve muy pronto para probarlo."
}: UnderConstructionProps) {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
      <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-10 md:p-14 w-full">
        <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">
          Trabajando en ello
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4" dangerouslySetInnerHTML={{ __html: title.replace('construcción', '<br /><em>construcción.</em>') }}>
        </h1>
        <p className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-sm mx-auto">
          {message}
        </p>
        <Link 
          href="/" 
          className="inline-block bg-[#2563EB] hover:bg-[#3b82f6] text-white text-sm font-semibold py-3 px-8 rounded-lg transition-colors shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}