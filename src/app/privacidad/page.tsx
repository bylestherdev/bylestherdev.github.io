import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Privacidad | bylestherdev",
  robots: "noindex, nofollow", // Evita que Google indexe páginas legales
};

export default function Privacidad() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto text-[#cbd5e1]">
      <h1 className="font-serif text-3xl md:text-5xl text-white mb-8">Políticas de Privacidad</h1>
      
      <div className="space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Última actualización: {new Date().toLocaleDateString('es-CL')}
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">1. Información que recopilamos</h2>
        <p>
          En <strong>bylestherdev</strong> recopilamos información personal que usted nos proporciona voluntariamente al contactarnos, como su nombre, dirección de correo electrónico, número de teléfono y detalles de su proyecto. Además, al navegar por nuestro sitio web, podemos recopilar automáticamente cierta información sobre su dispositivo y el uso del sitio.
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">2. Uso de la información</h2>
        <p>
          Utilizamos la información recopilada para:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Proveer, operar y mantener nuestro sitio web y servicios.</li>
          <li>Comunicarnos con usted para responder a sus solicitudes y cotizaciones.</li>
          <li>Mejorar, personalizar y expandir nuestros servicios.</li>
          <li>Fines de marketing y análisis (previa autorización donde sea aplicable).</li>
        </ul>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">3. Cookies, Analíticas y Píxeles de Seguimiento</h2>
        <p>
          Este sitio web utiliza o se reserva el derecho de utilizar herramientas de análisis y seguimiento de terceros, incluyendo, pero no limitándose a, <strong>Google Analytics</strong> y <strong>Meta Pixel (Facebook Pixel)</strong>.
        </p>
        <p>
          Estas tecnologías utilizan "cookies" y tecnologías similares para ayudar a analizar cómo los usuarios utilizan el sitio, medir la efectividad de las campañas publicitarias y orientar anuncios según las interacciones previas. Usted puede configurar su navegador para que rechace todas las cookies o para que le avise cuando se envíe una cookie.
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">4. Retención y Protección de Datos</h2>
        <p>
          Mantenemos las medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sus datos solo se conservan durante el tiempo necesario para los fines establecidos en esta política.
        </p>

        <h2 className="text-xl text-white font-semibold mt-8 mb-4">5. Contacto</h2>
        <p>
          Si tiene preguntas o inquietudes sobre estas Políticas de Privacidad, por favor contáctenos a través de <strong>jordilestherdev@gmail.com</strong>.
        </p>
      </div>
    </main>
  );
}