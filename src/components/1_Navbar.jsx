import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AppNavbar() {

  // Función para limpiar tildes y espacios
  const generateHref = (label) => {
    return '#' + label
      .toLowerCase()
      // Esto elimina tildes y acentos (ej. "mí" -> "mi")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
      // Esto reemplaza espacios (ej. "sobre mi" -> "sobre-mi")
      .replace(/ /g, '-');
  };

  const links = ['Inicio', 'Sobre Mí', 'Experiencia', 'Proyectos', 'Educación', 'Contacto']
    // --- CAMBIO AQUÍ ---
    // Ahora usamos la función generateHref
    .map(label => ({ label, href: generateHref(label) }));

  return (
    <Navbar variant="dark" expand="md" sticky="top" className="glass">
      <Container>
        <Navbar.Brand href="#inicio">
          <motion.div
            whileHover={{ rotate: [0, 360], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="w-8 h-8 text-neon-blue" />
          </motion.div>
          <span className="font-bold text-xl gradient-text ms-2">CYR</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {links.map(link => (
              <Nav.Link key={link.href} href={link.href} className="mx-2">
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}