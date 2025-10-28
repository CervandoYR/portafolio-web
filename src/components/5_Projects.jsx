import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Sistema de encuestas",
    description: "Líder de proyecto académico para un sistema de encuestas funcional.",
    tags: ["Java", "Spring Boot", "MySQL"],
    img: "https://placehold.co/600x400/111118/00D1FF?text=Encuestas+App",
  },
  {
    title: "Gestión de empleados",
    description: "Sistema de gestión de asistencia y marcación de empleados.",
    tags: ["Django", "Python", "PostgreSQL"],
    img: "https://placehold.co/600x400/111118/4ade80?text=Gestión+RRHH",
  },
  {
    title: "Plataforma educativa",
    description: "Plataforma para la gestión de estudiantes y docentes.",
    tags: ["Django", "Python", "PostgreSQL"],
    img: "https://placehold.co/600x400/111118/7c3aed?text=Plataforma+Edu",
  },
];

// Mapeo de tags a colores
const tagColors = { 
  "Java": "badge-blue", 
  "Spring Boot": "badge-blue", 
  "MySQL": "badge-blue", 
  "Django": "badge-green", 
  "Python": "badge-green", 
  "PostgreSQL": "badge-green" 
};

export default function Projects() {
  return (
    <section id="proyectos" className="section-container">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title gradient-text"
        >
          Proyectos Destacados
        </motion.h2>

        <Row className="g-4">
          {projectData.map((project, i) => (
            <Col md={6} lg={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="h-100"
              >
                <Card className="card-custom card-hover">
                  <Card.Img variant="top" src={project.img} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    
                    <div className="mt-3">
                      {project.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          className={`${tagColors[tag] || 'badge-blue'} me-1 mb-1`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
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