import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Awards />
            <Extracurricular />
            <Contact />
            <footer className="bg-white py-8">
              <div className="container mx-auto px-6 text-center text-gray-600">
                <p>© {new Date().getFullYear()} Nicholas Carson. All rights reserved.</p>
              </div>
            </footer>
          </div>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;