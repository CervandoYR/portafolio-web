import React from 'react';
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;