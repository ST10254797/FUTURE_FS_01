import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import { PROJECTS } from './data';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Contact />

      <footer className="footer">
        <p>© 2026 | Cristiano Ronaldo Naidoo | Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;