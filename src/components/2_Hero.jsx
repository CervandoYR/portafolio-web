import React from 'react';
import { Container } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" style={{ minHeight: '90vh' }} className="d-flex align-items-center justify-content-center text-center position-relative overflow-hidden pt-5">
      <Container className="z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="display-3 fw-bolder mb-3 gradient-text"
        >
          Cervando Yactayo Robles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lead text-secondary mb-4"
        >
          Estudiante de Ingeniería de Sistemas e Informática
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ height: '2.5rem' }}
          className="fs-5 text-neon-blue fw-medium"
        >
          <TypeAnimation
            sequence={[
              'Desarrollador Web', 2000,
              'Soporte TI', 2000,
              'Redes', 2000,
              'Análisis de Datos', 2000,
            ]}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-5"
        >
          <a href="#proyectos" className="btn-primary-custom m-2">
            Ver Proyectos <ArrowDown className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/cervando-yactayo-robles" target="_blank" rel="noopener noreferrer" className="btn-outline-custom m-2">
            LinkedIn <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </Container>

      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="position-absolute left-50"
        style={{ transform: 'translateX(-50%)', bottom: '3rem' }} // Se cambió bottom-0 por 3rem
      >
        <ArrowDown className="w-6 h-6 text-neon-blue" />
      </motion.div>
    </section>
  );
}