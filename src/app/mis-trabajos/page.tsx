import UnderConstruction from "@/components/global/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis Trabajos — By Lesther Dev",
  description: "Descubre los sitios web y proyectos en los que he trabajado.",
};

export default function MisTrabajoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-24 pb-16">
      <UnderConstruction 
        title="Mis trabajos"
        message="Estoy preparando una galería con los sitios web y proyectos en los que he trabajado. Vuelve muy pronto para verlos."
      />
    </main>
  );
}
