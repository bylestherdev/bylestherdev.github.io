import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="hero">
        <p className="hero-tag">Disponible para nuevos proyectos</p>
        <h1>
          Automatizo tus operaciones<br />
          y diseño tus<br />
          <em>plataformas para escalar.</em>
        </h1>
        <p className="hero-body">
          Construyo sistemas con IA que eliminan el trabajo manual, integro tus herramientas y desarrollo las plataformas digitales que tu negocio necesita para crecer sin contratar más.
        </p>
        <div className="hero-actions">
          <Link href="/contacto" className="btn-main">
            Agendar Consultoría de Eficiencia →
          </Link>
          <Link href="/servicios" className="btn-ghost">
            Ver servicios en detalle
          </Link>
        </div>
      </section>

      {/* MARQUEE — Stack de Confianza */}
      <div className="marquee-section">
        <p className="marquee-label">Tecnologías de Infraestructura Segura</p>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {["n8n", "WhatsApp Business API", "Gemini 1.5 Flash", "Instagram DM API", "Google Workspace", "Node.js", "React", "Next.js", "Stripe", "Docker", "Railway", "Vercel", "n8n", "WhatsApp Business API", "Gemini 1.5 Flash", "Instagram DM API", "Google Workspace", "Node.js", "React", "Next.js", "Stripe", "Docker", "Railway", "Vercel"].map((tech, idx) => (
              <span key={idx} className="marquee-item">
                <span className="marquee-dot"></span>{tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* NUMBERS SECTION */}
      <div className="section" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="numbers-grid">
          <div className="number-cell">
            <div className="number-val">&lt;<span>2</span>min</div>
            <div className="number-label">Respuesta automática al primer lead</div>
          </div>
          <div className="number-cell">
            <div className="number-val"><span>24/7</span></div>
            <div className="number-label">Tu negocio disponible sin intervención humana</div>
          </div>
          <div className="number-cell">
            <div className="number-val"><span>100</span>%</div>
            <div className="number-label">Propiedad de tu plataforma web y código</div>
          </div>
          <div className="number-cell">
            <div className="number-val"><span>50</span>%</div>
            <div className="number-label">Anticipo al iniciar · resto al entregar tu sistema</div>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div id="process">
        <div className="section">
          <p className="section-label">Cómo trabajamos</p>
          <div className="process-grid">
            <div className="process-cell">
              <div className="process-n">01</div>
              <h4>Consultoría inicial</h4>
              <p>Agendas una llamada estratégica. Mapeamos tus cuellos de botella y diseñamos la arquitectura exacta para automatizarlos.</p>
            </div>
            <div className="process-cell">
              <div className="process-n">02</div>
              <h4>Propuesta y Arquitectura</h4>
              <p>Recibes un documento técnico con el alcance, las herramientas a conectar, el precio cerrado y el plazo de ejecución.</p>
            </div>
            <div className="process-cell">
              <div className="process-n">03</div>
              <h4>Kickoff y Desarrollo</h4>
              <p>Con el anticipo cubierto, iniciamos la construcción de los flujos de IA o la plataforma web, manteniéndote informado.</p>
            </div>
            <div className="process-cell">
              <div className="process-n">04</div>
              <h4>Entrega y Documentación</h4>
              <p>Desplegamos tu sistema en producción. Recibes la documentación completa y soporte continuo opcional.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA FINAL SECTION */}
      <section id="cta">
        <div className="section">
          <h2>
            ¿Listo para escalar<br />
            tu negocio <em>de verdad?</em>
          </h2>
          <p>
            Agenda una consultoría gratuita. Sin compromiso, con un diagnóstico real de los procesos que te están frenando.
          </p>
          <div className="cta-row">
            <Link href="/contacto" className="btn-main">
              Agendar Consultoría →
            </Link>
            <Link href="/calculadora" className="btn-outline">
              Calcular dinero perdido en tareas manuales
            </Link>
          </div>
          <div className="cta-trust">
            <span className="cta-trust-item">Respuesta en menos de 24h</span>
            <span className="cta-trust-item">Soluciones sin vendor lock-in</span>
            <span className="cta-trust-item">Código escalable y profesional</span>
          </div>
        </div>
      </section>
    </>
  );
}