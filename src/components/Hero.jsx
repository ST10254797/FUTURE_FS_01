import React from 'react';
import { SKILLS } from '../data';
import { ArrowRight, Terminal, User } from 'lucide-react';

const Hero = () => {
  // Replace with your actual image path in the public folder, e.g., "/profile.jpg"
  const myPhoto = "https://via.placeholder.com/150"; 

  return (
    <header id="about" className="hero-section">
      <div className="hero-container">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="hero-content">
          <div className="badge-intro">
            <Terminal size={14} /> <span>Available for Hire</span>
          </div>
          
          <h1>
            Hi, I'm <br />
            <span className="highlight">Cristiano Ronaldo Naidoo</span>
          </h1>
          
          <p className="subtitle">
            Building the future of the web as a <strong>Full Stack Intern</strong>. 
            Specializing in high-performance React applications.
          </p>
          
          <div className="skill-tags">
            {SKILLS.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill.name}
              </span>
            ))}
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PHOTO STACKED ABOVE CARD */}
        <div className="hero-visual">
          <div className="visual-stack">
            
            {/* PHOTO CONTAINER (NOW ABOVE THE CARD) */}
            <div className="profile-container">
              {myPhoto ? (
                <img 
                  src={myPhoto} 
                  alt="Cristiano Ronaldo Naidoo" 
                  className="hero-profile-img" 
                />
              ) : (
                <div className="hero-profile-placeholder">
                  <User size={40} />
                </div>
              )}
            </div>

            {/* THE TERMINAL CARD */}
            <div className="visual-card">
              <div className="card-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="file-name">intern.js</span>
              </div>
              
              <div className="card-body">
                <code>
                  <span className="code-keyword">const</span> intern = &#123; <br />
                  &nbsp;&nbsp;name: <span className="code-string">'Cristiano'</span>, <br />
                  &nbsp;&nbsp;role: <span className="code-string">'FullStack'</span>, <br />
                  &nbsp;&nbsp;status: <span className="code-string">'Learning'</span> <br />
                  &#125;;
                </code>
              </div>
            </div>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;