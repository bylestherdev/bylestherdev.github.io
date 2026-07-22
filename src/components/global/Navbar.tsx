"use client"; // <-- ¡ESTO ES VITAL! Sin esto, los botones no funcionan en Next.js App Router

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario baja más de 20px, activamos el estado "isScrolled"
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpieza
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "py-3 bg-[#0B0F19]/80 backdrop-blur-md border-b border-[#2d3a4f] shadow-lg" // Diseño cuando hay scroll (más pequeño y translúcido)
          : "py-5 bg-transparent" // Diseño inicial arriba del todo (más grande y transparente)
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Bylesther<span className="text-[#3b82f6]">dev</span>
            </span>
          </Link>

          {/* MENÚ ESCRITORIO (Oculto en móvil) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-[#cbd5e1] hover:text-white transition-colors">Inicio</Link>
            <Link href="#servicios" className="text-sm text-[#cbd5e1] hover:text-white transition-colors">Servicios</Link>
            <Link href="/simulador-ia" className="text-sm text-[#cbd5e1] hover:text-[#3b82f6] font-medium transition-colors">
              Simulador IA
            </Link>
            
            {/* Botón CTA */}
            <a 
              href="#contacto" 
              className="px-5 py-2 text-sm font-semibold text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Agenda una cita
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo en móvil) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#cbd5e1] hover:text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Icono "X" para cerrar
              <svg className="w-7 h-7 transition-transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono Hamburguesa para abrir
              <svg className="w-7 h-7 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#111827] border-b border-[#2d3a4f] shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-4 space-y-4">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base text-[#cbd5e1] hover:text-white font-medium pb-2 border-b border-[#1f2937]"
          >
            Inicio
          </Link>
          <Link 
            href="#servicios" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base text-[#cbd5e1] hover:text-white font-medium pb-2 border-b border-[#1f2937]"
          >
            Servicios
          </Link>
          <Link 
            href="/simulador-ia" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base text-[#3b82f6] font-semibold pb-2 border-b border-[#1f2937]"
          >
            Simulador IA
          </Link>
          <a 
            href="#contacto" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center mt-2 px-5 py-3 text-sm font-semibold text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-all"
          >
            Agenda una cita
          </a>
        </div>
      </div>
    </nav>
  );
}