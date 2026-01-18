import React from 'react';
import { SKILLS } from '../data';

const Hero = () => (
  <header id="about" className="hero-section">
    <div className="hero-content">
      <h1>Hi, I'm <span className="highlight">Cristiano Ronaldo Naidoo</span></h1>
      <p className="subtitle">Full Stack Web Development Intern at <strong>Future Interns</strong></p>
      <div className="skill-tags">
        {SKILLS.map(skill => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  </header>
);

export default Hero;