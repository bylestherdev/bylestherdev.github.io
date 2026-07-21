import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | bylestherdev",
  description: "Ponte en contacto para automatizar tus procesos o desarrollar tu plataforma web.",
};

export default function Contacto() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
      <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">Hablemos</p>
      <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6">
        Inicia tu transformación<br /><em>digital hoy.</em>
      </h1>
      <p className="text-[#94a3b8] text-lg max-w-xl mx-auto leading-relaxed mb-12">
        Agenda una consultoría, envíame un mensaje directo o revisa mi trabajo. Respondo en menos de 24 horas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/56946976778?text=Hola%20Jordi,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
          target="_blank" 
          rel="noreferrer"
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-[#10B981] transition-colors group"
        >
          <span className="text-[#10B981] text-3xl mb-3 block">✆</span>
          <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
          <p className="text-[#94a3b8] text-sm group-hover:text-white transition-colors">+56 9 4697 6778</p>
        </a>

        {/* Email */}
        <a 
          href="mailto:jordilestherdev@gmail.com" 
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-[#3b82f6] transition-colors group"
        >
          <span className="text-[#3b82f6] text-3xl mb-3 block">✉</span>
          <h3 className="text-white font-semibold mb-1">Correo Electrónico</h3>
          <p className="text-[#94a3b8] text-sm group-hover:text-white transition-colors">jordilestherdev@gmail.com</p>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/bylestherdev" 
          target="_blank" 
          rel="noreferrer"
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-[#E1306C] transition-colors group"
        >
          <span className="text-[#E1306C] text-3xl mb-3 block">@</span>
          <h3 className="text-white font-semibold mb-1">Instagram</h3>
          <p className="text-[#94a3b8] text-sm group-hover:text-white transition-colors">@bylestherdev</p>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/bylestherdev" 
          target="_blank" 
          rel="noreferrer"
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-white transition-colors group"
        >
          <span className="text-white text-3xl mb-3 block">{'</>'}</span>
          <h3 className="text-white font-semibold mb-1">GitHub</h3>
          <p className="text-[#94a3b8] text-sm group-hover:text-white transition-colors">bylestherdev</p>
        </a>
      </div>
    </main>
  );
}