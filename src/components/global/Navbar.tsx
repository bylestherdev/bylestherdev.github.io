"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-[#2d3a4f]">
      <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-sans font-bold text-xl tracking-tight text-white">
          bylesther<span className="text-[#3b82f6]">dev</span>
        </Link>

        {/* Links de Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/servicios" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Servicios</Link>
          <Link href="/calculadora" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Calculadora</Link>
          <Link href="/simulador-ia" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Simulador IA</Link>
          <Link href="/contacto" className="text-[#cbd5e1] hover:text-white transition-colors text-sm font-medium">Contacto</Link>
        </nav>

        {/* Botón CTA Desktop - WhatsApp Directo */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/56946976778?text=Hola%20Jordi,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
            target="_blank" 
            rel="noreferrer"
            className="btn-action !py-2.5 !px-5 !text-sm !bg-[#10B981] hover:!bg-[#059669] !shadow-[0_4px_20px_rgba(16,185,129,0.3)] !inline-flex items-center justify-center gap-2.5"
          >
            <span className="text-lg leading-none">✆</span>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Botón Menú Mobile (Hamburguesa) Interactivo */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#cbd5e1] hover:text-white focus:outline-none p-1"
          aria-label="Abrir menú"
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

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-lg border-b border-[#2d3a4f] px-6 py-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/servicios" 
              onClick={() => setIsOpen(false)}
              className="text-[#cbd5e1] hover:text-white text-base font-medium py-2 border-b border-[#2d3a4f]/40"
            >
              Servicios
            </Link>
            <Link 
              href="/calculadora" 
              onClick={() => setIsOpen(false)}
              className="text-[#cbd5e1] hover:text-white text-base font-medium py-2 border-b border-[#2d3a4f]/40"
            >
              Calculadora
            </Link>
            <Link 
              href="/simulador-ia" 
              onClick={() => setIsOpen(false)}
              className="text-[#cbd5e1] hover:text-white text-base font-medium py-2 border-b border-[#2d3a4f]/40"
            >
              Simulador IA
            </Link>
            <Link 
              href="/contacto" 
              onClick={() => setIsOpen(false)}
              className="text-[#cbd5e1] hover:text-white text-base font-medium py-2"
            >
              Contacto
            </Link>
          </nav>

          {/* Botón de WhatsApp dentro del menú móvil */}
          <a 
            href="https://wa.me/56946976778?text=Hola%20Jordi,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
            target="_blank" 
            rel="noreferrer"
            className="btn-action w-full py-3 text-center !bg-[#10B981] hover:!bg-[#059669] flex items-center justify-center gap-2 mt-2"
          >
            <span className="text-lg leading-none">✆</span>
            <span>Escríbeme por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}