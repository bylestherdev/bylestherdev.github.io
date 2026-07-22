"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full isolate z-[100] bg-[#0B0F19] border-b border-[#2d3a4f]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[100]">
        
        {/* Logo */}
        <Link href="/" className="font-sans font-bold text-xl tracking-tight text-white">
          ByLesther<span className="text-[#3b82f6]">Dev</span>
        </Link>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/servicios" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Servicios</Link>
          <Link href="/calculadora" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Calculadora</Link>
          <Link href="/simulador-ia" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Simulador IA</Link>
          <Link href="/contacto" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Contacto</Link>
        </nav>

        {/* Botón WhatsApp Desktop */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/56946976778?text=Hola%20Jordi,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
            target="_blank" 
            rel="noreferrer"
            className="py-2.5 px-5 text-sm font-medium text-white bg-[#10B981] hover:bg-[#059669] rounded-lg transition-all inline-flex items-center gap-2"
          >
            <span>✆</span>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Botón Hamburguesa Mobile */}
        <button 
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          className="md:hidden relative z-[110] text-[#cbd5e1] hover:text-white p-2 focus:outline-none"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

      </div>

      {/* Menú Móvil */}
      <div 
        className={`fixed inset-0 top-20 bg-[#0B0F19] z-[90] md:hidden flex flex-col px-6 py-8 justify-between shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen 
            ? "translate-x-0 opacity-100 pointer-events-auto" 
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="menumobile flex flex-col gap-6 text-center pt-4">
          <Link 
            href="/servicios" 
            onClick={() => setIsOpen(false)}
            className="text-white text-xl font-medium py-3"
          >
            Servicios
          </Link>
          <Link 
            href="/calculadora" 
            onClick={() => setIsOpen(false)}
            className="text-white text-xl font-medium py-3"
          >
            Calculadora
          </Link>
          <Link 
            href="/simulador-ia" 
            onClick={() => setIsOpen(false)}
            className="text-white text-xl font-medium py-3"
          >
            Simulador IA
          </Link>
          <Link 
            href="/contacto" 
            onClick={() => setIsOpen(false)}
            className="text-white text-xl font-medium py-3"
          >
            Contacto
          </Link>
        </nav>

        <div className="pb-8">
          <a 
            href="https://wa.me/56946976778?text=Hola%20Jordi,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
            target="_blank" 
            rel="noreferrer"
            className="w-full py-4 text-center text-white bg-[#10B981] hover:bg-[#059669] rounded-xl font-medium flex items-center justify-center gap-2 text-base shadow-lg"
          >
            <span>✆</span>
            <span>Escríbeme por WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}