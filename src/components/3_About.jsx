import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Code, Server, Database, Network } from 'lucide-react';

const skills = [
  { Icon: Code, title: 'Frontend', items: 'Vue.js, React, HTML, CSS' },
  { Icon: Server, title: 'Backend', items: 'Express, Django, Spring Boot' },
  { Icon: Database, title: 'Bases de Datos', items: 'MySQL, PostgreSQL' },
  { Icon: Network, title: 'Redes y Soporte', items: 'Cisco, Soporte TI' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section-container">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title gradient-text"
        >
          Sobre Mí
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-secondary fs-5 mx-auto mb-5"
          style={{ maxWidth: '720px' }}
        >
          Estudiante del 8.º ciclo en la UTP. Experiencia en desarrollo web, redes y soporte TI.
        </motion.p>

        <Row className="g-4">
          {skills.map((skill, i) => (
            <Col md={6} lg={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="h-100"
              >
                <Card className="card-custom card-hover text-center group">
                  <Card.Body>
                    <skill.Icon className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
                    <Card.Title as="h3">{skill.title}</Card.Title>
                    <Card.Text className="fs-6">{skill.items}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}