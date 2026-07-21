import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | bylestherdev",
  robots: "noindex, nofollow",
};

export default function Terminos() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto text-[#cbd5e1]">
      <h1 className="font-serif text-3xl md:text-5xl text-white mb-8">Términos y Condiciones</h1>
      
      <div className="space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Última actualización: {new Date().toLocaleDateString('es-CL')}
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">1. Aceptación de los Términos</h2>
        <p>
          Al acceder y utilizar el sitio web <strong>bylestherdev</strong>, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios ni nuestro sitio web.
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">2. Servicios Ofrecidos</h2>
        <p>
          bylestherdev ofrece servicios de consultoría, desarrollo de software a medida, implementación de E-commerce (VTEX IO y otros) y automatización de procesos mediante Inteligencia Artificial. Cada proyecto está sujeto a un contrato o propuesta comercial independiente (formato PDF o digital) que detallará los alcances específicos, cronogramas y costos.
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">3. Cotizaciones y Pagos</h2>
        <p>
          Las tarifas mencionadas en el sitio web son de referencia ("desde"). El costo final se determina tras la consultoría inicial. 
          Como estándar de trabajo, se requiere un <strong>pago de anticipo del 50%</strong> para iniciar cualquier proyecto, y el <strong>50% restante a la entrega</strong>, a menos que se acuerde expresamente lo contrario por escrito.
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">4. Propiedad Intelectual</h2>
        <p>
          Todo el código, diseño y arquitectura entregados al cliente pasan a ser propiedad intelectual del mismo una vez que se ha liquidado el 100% del pago acordado del proyecto. bylestherdev se reserva el derecho de utilizar los proyectos realizados como parte de su portafolio comercial, a menos que se firme un Acuerdo de Confidencialidad (NDA).
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">5. Limitación de Responsabilidad</h2>
        <p>
          bylestherdev no será responsable de ningún daño indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar los servicios proporcionados, ni por interrupciones atribuibles a proveedores externos (ej. caída de servidores, fallos en APIs de terceros como OpenAI o plataformas como VTEX).
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">6. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
        </p>
      </div>
    </main>
  );
}