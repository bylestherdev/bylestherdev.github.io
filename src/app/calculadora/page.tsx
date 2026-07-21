"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CalculadoraPage() {
  // Estados del usuario
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Estados de la calculadora
  const [hoursPerWeek, setHoursPerWeek] = useState(5); 
  const [costPerHour, setCostPerHour] = useState(15);
  const [leadsLost, setLeadsLost] = useState(0);
  const [ticketValue, setTicketValue] = useState(100);

  // Estado para el valor del Dólar (Valor de respaldo: 930)
  const [exchangeRate, setExchangeRate] = useState(930);

  // Estados de los checkboxes (Dolores)
  const [painPoints, setPainPoints] = useState({
    manualData: false,
    repetitiveQuestions: false,
    lostLeads: false,
    manualFollowUp: false,
    tenPlusHours: false,
  });

 // 1. Fetch a la API del dólar en tiempo real al cargar la página
  useEffect(() => {
    const fetchDolar = async () => {
      try {
        // Usamos DolarAPI, que no tiene problemas de CORS en localhost
        const response = await fetch('https://cl.dolarapi.com/v1/cotizaciones/usd');
        
        if (!response.ok) {
          throw new Error('Error al conectar con la API del dólar');
        }
        
        const data = await response.json();
        
        if (data && data.venta) {
          setExchangeRate(data.venta); // Toma el valor oficial de venta del día
        }
      } catch (error) {
        console.warn("No se pudo obtener el valor del dólar en vivo. Usando valor de respaldo (930).", error);
      }
    };
    
    fetchDolar();
  }, []);
  
  // 2. Función para convertir a CLP (Usa Math.round para números enteros exactos)
  const toCLP = (usd: number) => Math.round(usd * exchangeRate).toLocaleString('es-CL');

  const PAIN_POINTS_DATA = [
    { id: 'manualData', label: 'Copiamos datos manualmente entre apps (CRM, sheets, WhatsApp)', penaltyHours: 5 },
    { id: 'repetitiveQuestions', label: 'Respondemos las mismas preguntas de clientes todos los días', penaltyHours: 4 },
    { id: 'lostLeads', label: 'Los leads se pierden porque no alcanzamos a responder a tiempo', penaltyHours: 3 },
    { id: 'manualFollowUp', label: 'Hacemos seguimiento manual por WhatsApp sin un sistema claro', penaltyHours: 4 },
    { id: 'tenPlusHours', label: 'El equipo gasta más de 10 horas/semana en tareas repetitivas', penaltyHours: 10 },
  ];

  // Fórmulas
  const operationalLoss = hoursPerWeek * costPerHour * 4; 
  const opportunityLoss = leadsLost * ticketValue;
  const totalLoss = operationalLoss + opportunityLoss;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePainPoint = (key: keyof typeof painPoints, penalty: number) => {
    const isCurrentlyChecked = painPoints[key];
    setPainPoints({ ...painPoints, [key]: !isCurrentlyChecked });

    if (!isCurrentlyChecked) {
      setHoursPerWeek(prev => prev + penalty);
    } else {
      setHoursPerWeek(prev => Math.max(1, prev - penalty));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando a n8n:", { formData, painPoints, exchangeRate, totals: { operationalLoss, opportunityLoss, totalLoss } });
    setStep(5); // Pantalla final de éxito
  };

  return (
    <main className="w-full min-h-screen pt-32 pb-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        
        {/* =========================================
            PANEL IZQUIERDO: FLUJO PASO A PASO
        ========================================= */}
        <div className="w-full lg:w-1/2 flex flex-col pt-8">
          
          {/* PASO 1: Nombre */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
                Descubre cuánto dinero <em className="text-[#3b82f6] not-italic">dejas sobre la mesa.</em>
              </h1>
              <p className="text-[#94a3b8] mb-8 text-lg">
                Para empezar este diagnóstico gratuito, dime cómo te llamas.
              </p>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre o el de tu empresa" 
                className="w-full bg-[#111827] border border-[#2d3a4f] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[#3b82f6] mb-6"
              />
              <button 
                onClick={() => setStep(2)}
                disabled={!formData.name.trim()}
                className="btn-action w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso →
              </button>
            </div>
          )}

          {/* PASO 2: Checkboxes de dolor */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                ¿Tu equipo pierde horas <em className="text-[#3b82f6] not-italic">en tareas que no escalan?</em>
              </h2>
              <p className="text-[#94a3b8] mb-8">
                Hola {formData.name}, marca las situaciones que vives en tu negocio hoy (observa el panel derecho):
              </p>
              
              <div className="space-y-4 mb-8">
                {PAIN_POINTS_DATA.map((item) => (
                  <label key={item.id} className="flex items-start gap-4 cursor-pointer group">
                    <div className={`w-6 h-6 rounded flex items-center justify-center border mt-0.5 shrink-0 transition-colors ${painPoints[item.id as keyof typeof painPoints] ? 'bg-[#3b82f6] border-[#3b82f6]' : 'bg-[#1a2235] border-[#2d3a4f] group-hover:border-[#3b82f6]'}`}>
                      {painPoints[item.id as keyof typeof painPoints] && <span className="text-white text-sm">✓</span>}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={painPoints[item.id as keyof typeof painPoints]}
                      onChange={() => togglePainPoint(item.id as keyof typeof painPoints, item.penaltyHours)}
                    />
                    <span className="text-[#cbd5e1]">{item.label}</span>
                  </label>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="px-6 py-3.5 rounded-lg text-[#cbd5e1] border border-[#2d3a4f] hover:bg-[#1a2235]">Atrás</button>
                <button onClick={() => setStep(3)} className="btn-action flex-grow">Continuar →</button>
              </div>
            </div>
          )}

          {/* PASO 3: Ventas Perdidas */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                Hablemos de <em className="text-[#10B981] not-italic">oportunidades.</em>
              </h2>
              <p className="text-[#94a3b8] mb-8">
                La lentitud también cuesta ventas. Ajusta estos valores según tu realidad mensual:
              </p>
              
              <div className="space-y-8 mb-8">
                <div>
                  <div className="flex justify-between text-[#cbd5e1] mb-3">
                    <span>Leads perdidos por no responder rápido</span>
                    <span className="font-bold text-white">{leadsLost} clientes/mes</span>
                  </div>
                  <input type="range" min="0" max="100" step="1" value={leadsLost} onChange={(e) => setLeadsLost(Number(e.target.value))} className="w-full accent-[#10B981]" />
                </div>

                <div>
                  <div className="flex justify-between text-[#cbd5e1] mb-3">
                    <span>Ticket promedio de tu servicio</span>
                    <span className="font-bold text-white text-right">
                      ${ticketValue} USD <span className="text-[#94a3b8] block sm:inline font-normal text-sm">(${toCLP(ticketValue)} CLP)</span>
                    </span>
                  </div>
                  {/* Actualizado a máximo 1000 y saltos de 1 en 1 */}
                  <input type="range" min="1" max="1000" step="1" value={ticketValue} onChange={(e) => setTicketValue(Number(e.target.value))} className="w-full accent-[#10B981]" />
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="px-6 py-3.5 rounded-lg text-[#cbd5e1] border border-[#2d3a4f] hover:bg-[#1a2235]">Atrás</button>
                <button onClick={() => setStep(4)} className="btn-action flex-grow">Ver resumen final →</button>
              </div>
            </div>
          )}

          {/* PASO 4: Captura de Datos Final */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Tu diagnóstico <em className="text-[#3b82f6] not-italic">está listo.</em>
              </h2>
              <p className="text-[#94a3b8] mb-8">
                {formData.name}, a tu derecha puedes ver el impacto total en tu negocio. Ingresa tus datos para enviarte este reporte detallado y habilitar la solución.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5 mb-8">
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleInputChange}
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-[#111827] border border-[#2d3a4f] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[#3b82f6]"
                />
                <input 
                  type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                  placeholder="WhatsApp (Ej: +569...)" 
                  className="w-full bg-[#111827] border border-[#2d3a4f] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[#3b82f6]"
                />
                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setStep(3)} className="px-6 py-3.5 rounded-lg text-[#cbd5e1] border border-[#2d3a4f] hover:bg-[#1a2235]">Atrás</button>
                  <button type="submit" className="btn-action flex-grow !bg-[#10B981] hover:!bg-[#059669]">
                    Obtener mi diagnóstico →
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* PASO 5: CTA Final Dinámico */}
          {step === 5 && (
            <div className="animate-fade-in lg:text-left pt-6">
              <p className="text-[#cbd5e1] mb-8 text-xl leading-relaxed">
                Estás perdiendo <strong className="text-[#10B981]">${totalLoss.toLocaleString()} USD (${toCLP(totalLoss)} CLP)</strong> al mes. Es hora de poner a trabajar a la IA por ti. Haz clic en el botón de abajo para recuperar ese dinero.
              </p>
              
              <a 
                href={`https://wa.me/56946976778?text=Hola%20Jordi,%20mi%20diagnóstico%20dio%20una%20pérdida%20de%20$${totalLoss.toLocaleString()}%20USD%20y%20quiero%20automatizar.`}
                target="_blank"
                rel="noreferrer"
                className="btn-action w-full text-center md:w-auto inline-block py-4 px-8 text-lg font-bold"
              >
                Quiero recuperar ese tiempo →
              </a>
            </div>
          )}

        </div>

        {/* =========================================
            PANEL DERECHO: CALCULADORA STICKY
        ========================================= */}
        <div className="w-full lg:w-1/2 sticky top-32">
          <div className="bg-[#111827] border border-[#2d3a4f] rounded-2xl p-8 lg:p-10 shadow-2xl">
            <span className="text-[#94a3b8] text-xs font-bold tracking-widest uppercase mb-8 block">
              Calculadora de Pérdida
            </span>

            {/* Sliders base */}
            <div className="space-y-8 mb-10">
              <div>
                <div className="flex justify-between text-[#cbd5e1] mb-3 text-sm">
                  <span>Horas perdidas por semana</span>
                  <span className="font-bold text-white">{hoursPerWeek} hrs</span>
                </div>
                <input type="range" min="1" max="100" step="1" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} className="w-full accent-[#3b82f6]" />
              </div>

              <div>
                <div className="flex justify-between items-end text-[#cbd5e1] mb-3 text-sm">
                  <span>Costo hora de tu equipo</span>
                  <div className="text-right">
                    <span className="font-bold text-white">${costPerHour} USD</span>
                    <span className="block text-[#94a3b8] text-xs">(${toCLP(costPerHour)} CLP)</span>
                  </div>
                </div>
                <input type="range" min="5" max="100" step="1" value={costPerHour} onChange={(e) => setCostPerHour(Number(e.target.value))} className="w-full accent-[#3b82f6]" />
              </div>
            </div>

            {/* Caja de Resultados */}
            <div className="bg-[#1a2235] border border-[#2d3a4f] rounded-xl p-6 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#10B981]"></div>
              <p className="text-[#cbd5e1] text-sm mb-2">Pierdes aproximadamente</p>
              
              <div className="flex flex-col mb-6 border-b border-[#2d3a4f] pb-4">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#10B981] transition-all">
                    ${totalLoss.toLocaleString()} USD
                  </h3>
                  <span className="text-[#94a3b8]">/mes</span>
                </div>
                <span className="text-[#10B981] font-semibold text-lg">
                  (${toCLP(totalLoss)} CLP)
                </span>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8]">Pérdida operativa (Sueldos):</span>
                  <div className="text-right">
                    <span className="text-white font-medium block">${operationalLoss.toLocaleString()} USD</span>
                    <span className="text-[#94a3b8] text-xs">(${toCLP(operationalLoss)} CLP)</span>
                  </div>
                </div>
                {opportunityLoss > 0 && (
                  <div className="flex justify-between items-center border-t border-[#2d3a4f] pt-4">
                    <span className="text-[#94a3b8]">Oportunidades (Ventas):</span>
                    <div className="text-right">
                      <span className="text-[#10B981] font-medium block">${opportunityLoss.toLocaleString()} USD</span>
                      <span className="text-[#10B981]/70 text-xs">(${toCLP(opportunityLoss)} CLP)</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}