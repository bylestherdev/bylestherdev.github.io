import AIDemoWidget from "@/components/AIDemoWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulador de Asistente de IA 24/7",
  description: "Prueba en vivo cómo un asistente con IA puede responder y atender a tus clientes las 24 horas, sin intervención humana.",
};

export default function SimuladorPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-24 pb-16">
      {/* Puedes agregar un contenedor o breadcrumb si lo deseas */}
      <AIDemoWidget />
    </main>
  );
}