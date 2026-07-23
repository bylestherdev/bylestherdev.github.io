import type { Metadata } from "next";
import FAQ from "@/components/FAQ"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | ByLesther Dev",
  description: "Resuelve tus dudas sobre automatización con IA, e-commerce, plazos de entrega, formas de pago y más. Todo lo que necesitas saber antes de cotizar tu proyecto.",
};

export default function Faqs() {
  return (
    <main className="w-full min-h-screen pt-40 md:pt-48 pb-32 px-6 md:px-12">
      <FAQ />
    </main>
  );
}