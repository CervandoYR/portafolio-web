import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Experience() {
  // Estos estilos son muy específicos de la línea de tiempo, los ponemos aquí
  const timelineStyles = `
    .timeline-container { position: relative; max-width: 900px; margin: 0 auto; }
    .timeline-container::after { content: ''; position: absolute; width: 2px; background-color: var(--dark-border); top: 0; bottom: 0; left: 50%; margin-left: -1px; }
    .timeline-item { position: relative; margin-bottom: 50px; }
    .timeline-item:nth-child(even) { padding-left: 50%; }
    .timeline-item:nth-child(odd) { padding-right: 50%; }
    .timeline-item:nth-child(even)::before { left: 50%; transform: translateX(-50%); }
    .timeline-item:nth-child(odd)::before { right: 50%; transform: translateX(50%); }
    .timeline-content { position: relative; }
    .timeline-icon { position: absolute; top: 15px; z-index: 1; width: 12px; height: 12px; background: var(--neon-blue); border-radius: 50%; box-shadow: 0 0 10px var(--neon-blue); }
    .timeline-item:nth-child(even) .timeline-icon { left: 50%; margin-left: -6px; }
    .timeline-item:nth-child(odd) .timeline-icon { right: 50%; margin-right: -6px; }
    
    @media (max-width: 768px) {
      .timeline-container::after { left: 20px; }
      .timeline-item:nth-child(even), .timeline-item:nth-child(odd) { padding: 0 0 0 50px; }
      .timeline-item:nth-child(even)::before, .timeline-item:nth-child(odd)::before { left: 20px; }
      .timeline-icon, .timeline-item:nth-child(even) .timeline-icon, .timeline-item:nth-child(odd) .timeline-icon { left: 20px; margin-left: -6px; right: auto; }
    }
  `;

  return (
    <section id="experiencia" className="section-container" style={{ backgroundColor: 'var(--dark-card)'}}>
      <style>{timelineStyles}</style>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title gradient-text"
        >
          Experiencia Profesional
        </motion.h2>

        <div className="timeline-container">
          {/* Experiencia 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="timeline-item"
          >
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title>Desarrollador Web y Soporte TI</Card.Title>
                  
                  {/* --- CAMBIO AQUÍ --- */}
                  <Card.Subtitle className="mb-2 text-secondary">SERVITEK TECHNOLOGIES | (Mar 2022 - Actualidad)</Card.Subtitle>
                  
                  <ul>
                    <li>Lideré el desarrollo de la página web corporativa con Vue.js y Express.js.</li>
                    <li>Implementé un diseño responsive que incrementó la retención de usuarios móviles en un 30%.</li>
                    <li>Integré formularios de contacto validados, aumentando en un 25% las consultas.</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </motion.div>
          
          {/* Experiencia 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="timeline-item"
          >
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title>Soporte Técnico (Proyecto Asignado)</Card.Title>
                  
                  {/* --- CAMBIO AQUÍ --- */}
                  <Card.Subtitle className="mb-2 text-secondary">PROYECTO ASIGNADO EN MARKHAM | (Ene 2025 - Mar 2025)</Card.Subtitle>
                  
                  <ul>
                    <li>Brindé soporte técnico a más de 50 usuarios, reduciendo el tiempo de atención en un 20%.</li>
                    <li>Resolví más de 50 incidencias de conectividad.</li>
                    <li>Optimizé la instalación de aplicaciones académicas.</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}