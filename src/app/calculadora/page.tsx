import type { Metadata } from "next";
import CalculadoraClient from "@/components/CalculadoraClient";

export const metadata: Metadata = {
  title: "Calculadora de Pérdidas por Falta de Automatización",
  description: "Calcula cuánto está perdiendo tu negocio en ventas y tiempo por no automatizar tus procesos con IA.",
};

export default function CalculadoraPage() {
  return <CalculadoraClient />;
}