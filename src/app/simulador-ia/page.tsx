import AIDemoWidget from "@/components/AIDemoWidget";
import Navbar from "@/components/Navbar"; // O tu navbar global si ya lo tienes en el layout

export default function SimuladorPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-24 pb-16">
      {/* Puedes agregar un contenedor o breadcrumb si lo deseas */}
      <AIDemoWidget />
    </main>
  );
}