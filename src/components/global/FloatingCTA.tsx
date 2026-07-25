"use client";

import { useEffect, useRef, useState } from "react";

// Aparece después de bajar esta cantidad de px (aprox. pasado el hero)
const SHOW_AFTER_PX = 500;
// Se oculta cuando falten estos px para llegar al final de la página (footer)
const HIDE_BEFORE_FOOTER_PX = 400;

const CHAT_WEBHOOK_URL = "https://snobbish-chupacabra.pikapod.net/webhook/floating-chat";
const WHATSAPP_FALLBACK_URL =
  "https://wa.me/56946976778?text=Hola%20Jordi%2C%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hola! Soy el asistente de By Lesther Dev. Cuéntame qué necesitas y te ayudo, o si prefieres hablar directo por WhatsApp, también puedes.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const sessionIdRef = useRef<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Genera un id de sesión estable por visita, para que n8n pueda mantener contexto de la conversación
  useEffect(() => {
    const existing = window.sessionStorage.getItem("floating_chat_session_id");
    if (existing) {
      sessionIdRef.current = existing;
    } else {
      const newId = crypto.randomUUID();
      window.sessionStorage.setItem("floating_chat_session_id", newId);
      sessionIdRef.current = newId;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const pastHero = scrollY > SHOW_AFTER_PX;
      const nearFooter = scrollY + windowHeight >= documentHeight - HIDE_BEFORE_FOOTER_PX;

      setIsVisible(pastHero && !nearFooter);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMessage: ChatMessage = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch(CHAT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mensaje: trimmed,
          session_id: sessionIdRef.current,
          pagina_origen: window.location.pathname,
          fecha: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Respuesta no válida del webhook");

      const data = await response.json();
      // Se asume que n8n responde con { reply: "texto de la respuesta" }.
      // Ajustar esta línea cuando definamos el formato final del nodo de respuesta.
      const replyText: string =
        data?.reply || "Gracias por tu mensaje, en un momento te responde el equipo.";

      setMessages((prev) => [...prev, { role: "assistant", text: replyText }]);
    } catch (error) {
      console.error("Error al conectar con el asistente:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "No pude conectarme en este momento. Puedes escribirnos directo por WhatsApp con el link de abajo.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-[92vw] max-w-sm h-[70vh] max-h-[520px] bg-[#111827] border border-[#2d3a4f] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header del chat */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#2d3a4f] bg-[#0B0F19]">
            <div>
              <p className="text-white font-semibold text-sm">By Lesther Dev</p>
              <p className="text-[#94a3b8] text-xs">Asistente con IA</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
              className="text-[#94a3b8] hover:text-white text-xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  "max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed " +
                  (msg.role === "user"
                    ? "bg-[#3b82f6] text-white ml-auto rounded-br-sm"
                    : "bg-[#1a2235] text-[#e2e8f0] mr-auto rounded-bl-sm")
                }
              >
                {msg.text}
              </div>
            ))}
            {isSending && (
              <div className="bg-[#1a2235] text-[#94a3b8] mr-auto rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm w-fit">
                Escribiendo...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#2d3a4f] p-3 bg-[#0B0F19]">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje..."
                disabled={isSending}
                className="flex-1 bg-[#111827] border border-[#2d3a4f] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6] disabled:opacity-50"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={isSending || !input.trim()}
                aria-label="Enviar mensaje"
                className="bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0"
              >
                →
              </button>
            </div>
            
            <a
              href={WHATSAPP_FALLBACK_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#10B981] text-xs font-medium hover:underline"
            >
              Prefiero hablar por WhatsApp directo →
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente de IA"}
        className={
          "flex items-center justify-center w-14 h-14 rounded-full bg-[#10B981] hover:bg-[#059669] shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all duration-300 " +
          (isVisible || isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none")
        }
      >
        <span className="text-2xl leading-none text-white">{isOpen ? "×" : "💬"}</span>
      </button>
    </div>
  );
}