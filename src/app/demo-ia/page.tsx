import type { Metadata } from "next";
import UnderConstruction from "@/components/global/UnderConstruction";

export const metadata: Metadata = {
  title: "Demo Chatbot IA | bylestherdev",
  description: "Prueba nuestro agente conversacional con IA en diferentes rubros.",
  robots: "noindex, nofollow",
};

export default function DemoIAPage() {
  return (
    <UnderConstruction 
      title="Demo IA en construcción." 
      message="Pronto podrás interactuar con un asistente virtual impulsado por Gemini y OpenAI simulando diferentes industrias."
    />
  );
}