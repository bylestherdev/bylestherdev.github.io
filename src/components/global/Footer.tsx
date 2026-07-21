import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] border-t border-[#2d3a4f] py-10 mt-auto">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="font-bold text-lg text-white mb-1">
            bylesther<span className="text-[#3b82f6]">dev</span>
          </p>
          <p className="text-[#94a3b8] text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/privacidad" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
            Privacidad
          </Link>
          <Link href="/terminos" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
            Términos
          </Link>
          <a href="https://instagram.com/bylestherdev" target="_blank" rel="noreferrer" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}