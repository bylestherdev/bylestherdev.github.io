"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto de automatización?",
    answer: "Depende del alcance, pero la mayoría de los flujos de automatización con n8n están listos entre 1 y 3 semanas. Trabajo por etapas con entregas parciales, así que puedes ver avances desde la primera semana.",
  },
  {
    question: "¿Necesito tener ya un e-commerce para trabajar contigo?",
    answer: "No. Puedo ayudarte a crear una tienda desde cero en VTEX IO, o administrar y optimizar una que ya tengas. También trabajo con negocios que recién están evaluando si necesitan un e-commerce completo o algo más simple.",
  },
  {
    question: "¿Trabajan con negocios que no son de tecnología?",
    answer: "Sí, de hecho es la mayoría de mis clientes. Trabajo con emprendedores de rubros muy distintos — restaurantes, tiendas de belleza, clínicas, inmobiliarias, cursos online y más. Antes de proponer cualquier solución hago una auditoría para entender tu operación específica, sin importar el rubro.",
  },
  {
    question: "¿Cómo funciona el pago del proyecto?",
    answer: "Trabajo con un 50% de anticipo al iniciar el proyecto y el 50% restante al momento de la entrega. Para planes de mantenimiento mensual (Care), el cobro es recurrente mes a mes.",
  },
  {
    question: "¿Qué pasa si mi negocio no es e-commerce ni tiene redes sociales activas?",
    answer: "No hay problema — antes de proponer cualquier servicio hago una auditoría para identificar dónde está el mayor cuello de botella de tu operación, y desde ahí armamos la solución que corresponda: automatización, sitio web, o ambos.",
  },
  {
    question: "¿Qué incluye el servicio de SEO y GEO?",
    answer: "Optimizo tu sitio para que te encuentren tanto en buscadores tradicionales como Google, como en motores de IA generativa como ChatGPT o Perplexity. Esto incluye datos estructurados, velocidad de carga, y configuración técnica para que tu contenido sea fácil de leer tanto para personas como para sistemas de IA.",
  },
  {
    question: "¿Puedo saber cómo le está yendo a mi sitio una vez publicado?",
    answer: "Sí, configuro Google Analytics 4 y Google Search Console en tu proyecto, para que tengas datos reales de cuánta gente visita tu sitio, de dónde viene y cómo se comporta — no tienes que quedarte con la duda de si está funcionando.",
  },
  {
    question: "¿El código y la plataforma quedan a mi nombre?",
    answer: "Sí, el 100% de la propiedad del código y la plataforma es tuya. No hay dependencia de terceros ni de mí una vez entregado el proyecto, aunque siempre puedes contratar mantenimiento continuo si lo prefieres.",
  },
  {
    question: "¿Trabajas con negocios fuera de Chile?",
    answer: "Sí, trabajo principalmente con emprendedores digitales en Chile y también en el resto de LATAM.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24">
      {/* JSON-LD para motores de IA y buscadores */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="text-center mb-16">
        <span className="text-[#10B981] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
          Dudas frecuentes
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
          Preguntas frecuentes
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#111827] border border-[#2d3a4f] rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5 md:px-8 md:py-6"
                aria-expanded={isOpen}
              >
                <span className="text-white font-semibold text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-[#3b82f6] text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed px-6 pb-5 md:px-8 md:pb-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}