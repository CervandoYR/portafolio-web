
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin } from 'lucide-react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-zykfi6EIdCrK5b5WffujVWLEZT08rJwIqvOH0c8jot1rFBTd6Mx6jtIXrgrLF033zg/exec";

// Recibimos las props 'onSuccess' y 'onError' desde App.jsx
export default function Contact({ onSuccess, onError }) {
  const [loading, setLoading] = useState(false);
  //Eliminamos los estados 'submitted' y 'error' de aquí

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onError(null); // Limpiamos errores anteriores
    
    const formData = new FormData(e.target);

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        onSuccess(); // 4. Llamamos a la función onSuccess (de App.jsx)
        e.target.reset();
      } else {
        onError(data.error || 'Ocurrió un error desconocido.'); // 5. Llamamos a onError
      }
      setLoading(false);
    })
    .catch(err => {
      onError('Error de conexión. Inténtalo de nuevo.'); // 6. Llamamos a onError
      setLoading(false);
    });
  };

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

        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
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
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Tu Nombre" name="name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Tu Email" name="email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Tu Mensaje" 
                      name="message" 
                      required 
                      style={{ resize: 'none' }}
                    />
                  </Form.Group>
                  

                  <Button type="submit" className="btn-primary-custom w-100" disabled={loading}>
                    {loading ? 'Enviando...' : (
                      <>
                        Enviar Mensaje <Send className="w-5 h-5" />
                      </>
                    )}
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