"use client";

import { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function AIDemoWidget() {
  // Generar un ID de sesión único para la memoria del chat
  const [sessionId] = useState(() => Math.random().toString(36).substring(2, 15));

  // Estados del formulario y configuración del bot
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("Salud / Servicios");
  const [objective, setObjective] = useState("");
  
  // Datos de contacto
  const [contactName, setContactName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const maxFreeMessages = 3;
  const maxUnlockedMessages = 7;

  // Estado del chat
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "¡Hola! Configura tu negocio a la izquierda y prueba cómo respondería mi IA a tus clientes en tiempo real." }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Manejar el envío de configuración / desbloqueo (Guarda datos recolectados)
  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !contactName || !email) {
      alert("Por favor completa al menos el nombre del negocio, tu nombre y tu correo.");
      return;
    }

    setIsUnlocked(true);
    
    try {
      await fetch("https://snobbish-chupacabra.pikapod.net/webhook/simulador-save-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessName, industry, objective, contactName, whatsapp, email })
      });
    } catch (error) {
      console.error("Error al registrar lead:", error);
    }
  };

  // Enviar mensaje en el chat con el Agente en tiempo real
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const currentLimit = isUnlocked ? maxUnlockedMessages : maxFreeMessages;
    if (messageCount >= currentLimit) {
      alert("Has alcanzado el límite de mensajes de prueba. Rellena tus datos a la izquierda para desbloquear más interacciones.");
      return;
    }

    const userText = inputMessage;
    setInputMessage("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setMessageCount((prev) => prev + 1);
    setIsLoading(true);

    try {
      const response = await fetch("https://snobbish-chupacabra.pikapod.net/webhook/simulacion-agente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionId,
          message: userText,
          context: { businessName, industry, objective }
        })
      });

      const data = await response.json();
      const aiReply = data.reply || data.output || "¡Entendido! ¿En qué más te puedo ayudar?";

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "¡Hola! Ocurrió un error conectando con el agente. Verifica que el webhook esté activo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentLimit = isUnlocked ? maxUnlockedMessages : maxFreeMessages;

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-[#3b82f6] text-sm font-semibold tracking-wider uppercase bg-[#1e293b] px-3 py-1 rounded-full border border-[#2d3a4f]">
          Demostración en vivo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
          Prueba el Asistente IA de tu Negocio
        </h2>
        <p className="text-[#cbd5e1] mt-2 max-w-xl mx-auto text-sm md:text-base">
          Configura los datos de tu empresa a la izquierda y chatea con la IA a la derecha para ver cómo automatizará tus ventas 24/7.
        </p>
      </div>

      {/* Grid de Dos Pantallas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* PANEL IZQUIERDO: Configuración y Datos (5 columnas) */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#2d3a4f] rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>⚙️</span> Configuración del Bot
            </h3>
            <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${isUnlocked ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
              ⚡ Mensajes: {messageCount}/{currentLimit}
            </span>
          </div>

          <form onSubmit={handleUnlock} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-[#cbd5e1] mb-1">Nombre de tu Negocio</label>
              <input 
                type="text" 
                required
                placeholder="Ej. Inmobiliaria Sur" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-[#0b0f19] border border-[#2d3a4f] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#3b82f6]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#cbd5e1] mb-1">Industria o Nicho</label>
              <select 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-[#0b0f19] border border-[#2d3a4f] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#3b82f6]"
              >
                <option value="Salud / Servicios">Salud / Servicios Profesionales</option>
                <option value="E-commerce / Retail">E-commerce / Retail</option>
                <option value="Restaurante / Gastronomía">Restaurante / Gastronomía</option>
                <option value="Inmobiliaria">Inmobiliaria / Bienes Raíces</option>
                <option value="Otro">Otro sector</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#cbd5e1] mb-1">¿Qué objetivo principal tiene el bot?</label>
              <input 
                type="text" 
                placeholder="Ej. Agendar citas y responder precios" 
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="w-full bg-[#0b0f19] border border-[#2d3a4f] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#3b82f6]"
              />
            </div>

            <hr className="border-[#2d3a4f] my-1" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#cbd5e1] mb-1">Tu Nombre</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-[#0b0f19] border border-[#2d3a4f] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#3b82f6]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#cbd5e1] mb-1">WhatsApp</label>
                <input 
                  type="text" 
                  placeholder="+569..." 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full bg-[#0b0f19] border border-[#2d3a4f] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#3b82f6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#cbd5e1] mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                required
                placeholder="tucorreo@empresa.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0b0f19] border border-[#2d3a4f] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#3b82f6]"
              />
            </div>

            <button 
              type="submit"
              className="mt-2 w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-2.5 rounded-lg text-sm transition-all shadow-lg"
            >
              {isUnlocked ? "✓ Datos Actualizados (7 Mensajes Activos)" : "Desbloquear 7 Mensajes y Probar IA"}
            </button>
          </form>

          {/* Gancho de ventas CTA Inferior */}
          <div className="mt-6 pt-5 border-t border-[#2d3a4f] text-center">
            <p className="text-xs text-[#94a3b8] mb-3">¿Quieres este agente operando en tu propio sitio web y WhatsApp?</p>
            <a 
              href="https://wa.me/56946976778?text=Hola%20Jordi,%20probé%20la%20demo%20del%20asistente%20IA%20y%20quiero%20mi%20propio%20bot%2024/7"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2.5 rounded-lg text-sm text-center transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]"
            >
              🚀 Solicitar mi Demo Completa
            </a>
          </div>
        </div>

        {/* PANEL DERECHO: Chat Interactivo Estilo WhatsApp (7 columnas) */}
        <div className="lg:col-span-7 bg-[#0b141a] border border-[#2d3a4f] rounded-2xl flex flex-col h-[550px] shadow-2xl overflow-hidden">
          
          {/* Header del Chat */}
          <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 border-b border-[#2d3a4f]">
            <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white font-bold text-lg shadow">
              🤖
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">
                {businessName ? `Asistente de ${businessName}` : "Asistente IA 24/7"}
              </h4>
              <p className="text-emerald-400 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> En línea (Simulador)
              </p>
            </div>
          </div>

          {/* Cuerpo de Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px]">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-[#005c4b] text-white self-end rounded-tr-none shadow" 
                    : "bg-[#202c33] text-[#e9edef] self-start rounded-tl-none border border-[#2d3a4f] shadow"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-[#202c33] text-[#e9edef] self-start p-3 rounded-xl rounded-tl-none border border-[#2d3a4f] text-sm animate-pulse">
                Escribiendo respuesta...
              </div>
            )}
          </div>

          {/* Barra de Entrada de Mensajes */}
          <form onSubmit={handleSendMessage} className="bg-[#1f2c34] p-3 flex items-center gap-2 border-t border-[#2d3a4f]">
            <input 
              type="text" 
              placeholder={messageCount >= currentLimit ? "Límite alcanzado. Actualiza tus datos a la izquierda." : "Escribe una pregunta para probar el bot..."}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={messageCount >= currentLimit}
              className="flex-1 bg-[#2a3942] text-white placeholder-[#8696a0] px-4 py-2.5 rounded-lg text-sm focus:outline-none disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={messageCount >= currentLimit || isLoading}
              className="bg-[#00a884] hover:bg-[#008f6f] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all disabled:opacity-50 shadow"
            >
              Enviar
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}