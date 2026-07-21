import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Privacidad | bylestherdev",
  robots: "noindex, nofollow",
};

export default function Privacidad() {
  return (
    <main className="w-full min-h-screen pt-40 md:pt-48 pb-32 px-6 md:px-12 max-w-3xl mx-auto text-[#cbd5e1]">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 text-center md:text-left">
        Políticas de Privacidad
      </h1>
      
      <div className="space-y-8 text-base md:text-lg leading-relaxed">
        <p className="text-[#94a3b8] italic">
          Última actualización: {new Date().toLocaleDateString('es-CL')}
        </p>

        <section>
          <h2 className="text-2xl text-white font-semibold mt-10 mb-5">1. Información que recopilamos</h2>
          <p>
            En <strong className="text-white">bylestherdev</strong> recopilamos información personal que usted nos proporciona voluntariamente al contactarnos, como su nombre, dirección de correo electrónico, número de teléfono y detalles de su proyecto. Además, al navegar por nuestro sitio web, podemos recopilar automáticamente cierta información sobre su dispositivo y el uso del sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-semibold mt-10 mb-5">2. Uso de la información</h2>
          <p className="mb-4">Utilizamos la información recopilada para:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Proveer, operar y mantener nuestro sitio web y servicios.</li>
            <li>Comunicarnos con usted para responder a sus solicitudes y cotizaciones.</li>
            <li>Mejorar, personalizar y expandir nuestros servicios.</li>
            <li>Fines de marketing y análisis (previa autorización donde sea aplicable).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-white font-semibold mt-10 mb-5">3. Cookies, Analíticas y Píxeles de Seguimiento</h2>
          <p className="mb-4">
            Este sitio web utiliza o se reserva el derecho de utilizar herramientas de análisis y seguimiento de terceros, incluyendo, pero no limitándose a, <strong className="text-white">Google Analytics</strong> y <strong className="text-white">Meta Pixel (Facebook Pixel)</strong>.
          </p>
          <p>
            Estas tecnologías utilizan "cookies" y tecnologías similares para ayudar a analizar cómo los usuarios utilizan el sitio, medir la efectividad de las campañas publicitarias y orientar anuncios según las interacciones previas. Usted puede configurar su navegador para que rechace todas las cookies o para que le avise cuando se envíe una cookie.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-semibold mt-10 mb-5">4. Retención y Protección de Datos</h2>
          <p>
            Mantenemos las medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sus datos solo se conservan durante el tiempo necesario para los fines establecidos en esta política.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-semibold mt-10 mb-5">5. Contacto</h2>
          <p>
            Si tiene preguntas o inquietudes sobre estas Políticas de Privacidad, por favor contáctenos a través de <strong className="text-white">jordilestherdev@gmail.com</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}