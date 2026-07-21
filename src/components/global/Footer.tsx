import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <span className="footer-l">bylestherdev © {new Date().getFullYear()}</span>
      <div className="footer-links">
        <a href="https://github.com/bylestherdev" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://instagram.com/bylestherdev" target="_blank" rel="noreferrer">Instagram</a>
        <Link href="/contacto">Contacto</Link>
        <Link href="/privacidad">Privacidad</Link>
        <Link href="/terminos">Términos</Link>
      </div>
    </footer>
  );
}