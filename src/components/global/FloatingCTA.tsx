"use client"; // Debe ser cliente porque usa el Hook y escucha el scroll

import Link from "next/link";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export default function FloatingCTA() {
  const isVisible = useScrollVisibility();

  return (
    <Link
      href="/contacto"
      className="float-cta"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      Optimizar mi negocio
    </Link>
  );
}