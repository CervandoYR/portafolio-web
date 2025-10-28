import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { CheckCircle, AlertTriangle } from 'lucide-react';

import Navbar from './components/1_Navbar';
import Hero from './components/2_Hero';
import About from './components/3_About';
import Experience from './components/4_Experience';
import Projects from './components/5_Projects';
import Education from './components/6_Education';
import Contact from './components/7_Contact';
import Footer from './components/8_Footer';
import BackgroundParticles from './components/9_BackgroundParticles';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact 
          onSuccess={() => setSubmitted(true)} 
          onError={(msg) => setError(msg)}
        />
      </main>
      <Footer />

      {/* Añadimos las clases 'position-fixed', 'bottom-0' y 'end-0'
        para forzar el 'position: fixed' en la esquina inferior derecha.
      */}
      <ToastContainer
        // position="bottom-end"  <-- Esta línea ya no es necesaria
        className="p-3 position-fixed bottom-0 end-0" // <-- Añade las clases aquí
        style={{ zIndex: 1050 }}
      >
        {/* Toast de Éxito */}
        <Toast
          onClose={() => setSubmitted(false)}
          show={submitted}
          delay={3000}
          autohide
          bg="success"
          className="text-white"
        >
          <Toast.Body className="d-flex align-items-center">
            <CheckCircle className="me-2" />
            ¡Mensaje enviado con éxito!
          </Toast.Body>
        </Toast>
        
        {/* Toast de Error */}
        <Toast
          onClose={() => setError(null)}
          show={!!error}
          delay={3000}
          autohide
          bg="danger"
          className="text-white"
        >
          <Toast.Body className="d-flex align-items-center">
            <AlertTriangle className="me-2" />
            {error}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;