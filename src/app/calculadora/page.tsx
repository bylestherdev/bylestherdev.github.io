import type { Metadata } from "next";
import CalculadoraClient from "@/components/CalculadoraClient";

export const metadata: Metadata = {
  title: "Calculadora de Tiempo Recuperable | Automatización con IA — By Lesther Dev",
  description: "Descubre cuánto tiempo y valor podrías recuperar automatizando tus procesos con IA.",
};

export default function CalculadoraPage() {
  return <CalculadoraClient />;
}