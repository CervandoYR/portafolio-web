import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { School, ShieldCheck } from 'lucide-react';

export default function Education() {
  return (
    <section id="educacion" className="section-container" style={{ backgroundColor: 'var(--dark-card)'}}>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title gradient-text"
        >
          Educación y Certificaciones
        </motion.h2>
        
        <Row className="g-4">
          {/* Educación */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-100"
            >
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title as="h3" className="mb-3 d-flex align-items-center"><School className="me-2 text-neon-blue" /> Educación</Card.Title>
                  
                  {/* --- CAMBIOS AQUÍ --- */}
                  <h5 className="fw-bold text-light">Ingeniería de Sistemas e informática (8º ciclo)</h5>
                  <p className="text-secondary">Universidad Tecnológica del Perú (UTP)</p>
                  <small className="text-secondary">Reconocimiento: Décimo superior en 5° y 7º ciclo.</small>
                
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          {/* Certificaciones */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-100"
            >
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title as="h3" className="mb-3 d-flex align-items-center"><ShieldCheck className="me-2 text-neon-blue" /> Certificaciones</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cisco: CCNA Introduction to Networks</ListGroup.Item>
                    <ListGroup.Item>Cisco: Introducción a la Ciberseguridad</ListGroup.Item>
                    <ListGroup.Item>IBM: Team Essentials for AI</ListGroup.Item>
                    <ListGroup.Item>Microsoft Excel Nivel Intermedio</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}