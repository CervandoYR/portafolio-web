import React from 'react';
import { Container } from 'react-bootstrap';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-4 text-center" style={{ borderTop: '1px solid var(--dark-border)'}}>
      <Container>
        <div className="mb-3">
          <a href="https://www.linkedin.com/in/cervando-yactayo-robles" target="_blank" rel="noopener noreferrer" className="text-secondary mx-2">
            <Linkedin />
          </a>
          <a href="mailto:yactayocervando@gmail.com" className="text-secondary mx-2">
            <Mail />
          </a>
          {/* Añade tu link de GitHub */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary mx-2">
            <Github />
          </a>
        </div>
        <p className="text-secondary">&copy; {new Date().getFullYear()} Cervando Yactayo Robles. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}