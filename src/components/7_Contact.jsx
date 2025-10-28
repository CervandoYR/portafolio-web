import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="section-container">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title gradient-text"
        >
          Contacto
        </motion.h2>

        <p className="text-center text-secondary fs-5 mx-auto mb-5" style={{ maxWidth: '600px' }}>
          ¡Conectemos! Estoy abierto a oportunidades laborales y nuevos proyectos.
        </p>
        {/* 1. Añadimos una Fila (Row) para centrar el contenido */}
        <Row className="justify-content-center">
          {/* 2. Añadimos una Columna contenedora (Col) con un ancho máximo (ej. lg={10}) */}
          <Col lg={10} xl={9}>
            {/* 3. Esta es tu Fila original, ahora está dentro de la columna centrada */}
            <Row className="g-4 align-items-center">
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <a href="mailto:yactayocervando@gmail.com" className="d-flex align-items-center fs-5 text-decoration-none text-secondary mb-3">
                    <Mail className="me-3 text-neon-blue" /> yactayocervando@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/cervando-yactayo-robles" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center fs-5 text-decoration-none text-secondary">
                    <Linkedin className="me-3 text-neon-blue" /> /cervando-yactayo-robles
                  </a>
                </motion.div>
              </Col>
              <Col md={6}>
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Tu Nombre" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Tu Email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={5} placeholder="Tu Mensaje" />
                  </Form.Group>
                  <Button type="submit" className="btn-primary-custom w-100">
                    Enviar Mensaje <Send className="w-5 h-5" />
                  </Button>
                </motion.form>
              </Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}