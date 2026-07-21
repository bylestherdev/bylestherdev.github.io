import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        bylesther<span>dev</span>
      </Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/calculadora">Calculadora</Link></li>
          <li><Link href="/demo-ia">Demo IA</Link></li>
        </ul>
        <Link href="/contacto" className="nav-pill">
          Agendar consultoría →
        </Link>
      </div>
    </nav>
  );
}