import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | bylestherdev",
  description: "Ponte en contacto para automatizar tus procesos o desarrollar tu plataforma web.",
};

export default function Contacto() {
  return (
    <main className="w-full min-h-screen pt-40 md:pt-48 pb-32 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
      
      {/* Header Centrado */}
      <div className="w-full text-center mb-16 md:mb-20">
        <span className="text-[#10B981] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
          Hablemos
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Inicia tu transformación<br /><em className="text-[#3b82f6] not-italic">digital hoy.</em>
        </h1>
        <p className="text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Agenda una consultoría, envíame un mensaje directo o revisa mi trabajo. Respondo en menos de 24 horas.
        </p>
      </div>

      {/* Grid de Contacto Responsivo */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/56946976778?text=Hola%20Jordi,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
          target="_blank" rel="noreferrer"
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-[#10B981] transition-all hover:-translate-y-1 group"
        >
          <span className="text-[#10B981] text-4xl mb-4 block">✆</span>
          <h3 className="text-white text-lg md:text-xl font-semibold mb-1">WhatsApp</h3>
          <p className="text-[#94a3b8] text-sm md:text-base group-hover:text-white transition-colors">+56 9 4697 6778</p>
        </a>

        {/* Email */}
        <a 
          href="mailto:jordilestherdev@gmail.com" 
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-[#3b82f6] transition-all hover:-translate-y-1 group"
        >
          <span className="text-[#3b82f6] text-4xl mb-4 block">✉</span>
          <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Correo Electrónico</h3>
          <p className="text-[#94a3b8] text-sm md:text-base group-hover:text-white transition-colors break-all text-center">jordilestherdev@gmail.com</p>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/bylestherdev" 
          target="_blank" rel="noreferrer"
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-[#E1306C] transition-all hover:-translate-y-1 group"
        >
          <span className="text-[#E1306C] text-4xl mb-4 block">@</span>
          <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Instagram</h3>
          <p className="text-[#94a3b8] text-sm md:text-base group-hover:text-white transition-colors">@bylestherdev</p>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/bylestherdev" 
          target="_blank" rel="noreferrer"
          className="flex flex-col items-center justify-center p-8 bg-[#111827] border border-[#2d3a4f] rounded-xl hover:border-white transition-all hover:-translate-y-1 group"
        >
          <span className="text-white text-4xl mb-4 block">{'</>'}</span>
          <h3 className="text-white text-lg md:text-xl font-semibold mb-1">GitHub</h3>
          <p className="text-[#94a3b8] text-sm md:text-base group-hover:text-white transition-colors">bylestherdev</p>
        </a>
      </div>
    </main>
  );
}