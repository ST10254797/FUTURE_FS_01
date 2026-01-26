import React from 'react';
import { SKILLS } from '../data';
import { ArrowRight, Terminal, User, Code2 } from 'lucide-react';

const Hero = () => {
  const myPhoto = "profile_pic.jpg"; 

  return (
    <header id="about" className="hero-section">
      <div className="hero-container">
        
        {/* LEFT SIDE: PERSONAL BRAND */}
        <div className="hero-content">
          <div className="badge-intro">
            <Terminal size={14} /> <span>Available for Hire</span>
          </div>
          
          <div className="hero-title-group">
            <h1>
              Hi, I'm <br />
              <span className="highlight">Cristiano Ronaldo Naidoo</span>
            </h1>
          </div>
          
          <div className="about-me-bio">
            <p className="subtitle">
              I am a <strong>Full Stack Intern</strong> with a passion for building 
              digital products that are as fast as they are beautiful.
            </p>
            <p className="bio-extra">
              Based in Durban, I bridge the gap between complex backend logic 
              and fluid frontend experiences. Currently mastering the <strong>MERN stack</strong>.
            </p>
          </div>

          <div className="skills-showcase">
            <div className="skills-header">
              <Code2 size={18} className="accent-icon" />
              <h3>Technical Toolkit</h3>
            </div>
            <div className="skill-tags-v2">
              {SKILLS.map((skill, index) => (
                <div key={index} className="skill-card-mini">
                  <span className="skill-dot"></span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: LARGE VISUAL ALIGNED WITH TEXT */}
        <div className="hero-visual">
          <div className="visual-stack-v2">
            <div className="profile-wrapper">
              {myPhoto ? (
                <img 
                  src={myPhoto} 
                  alt="Cristiano Ronaldo Naidoo" 
                  className="hero-profile-img-large" 
                />
              ) : (
                <div className="hero-profile-placeholder-large">
                  <User size={60} />
                </div>
              )}
              {/* Decorative glow behind image */}
              <div className="image-glow"></div>
            </div>

            <div className="visual-card-v2">
              <div className="card-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="file-name">identity.ts</span>
              </div>
              <div className="card-body">
                <code>
                  <span className="code-keyword">type</span> <span className="code-class">Dev</span> = &#123; <br />
                  &nbsp;&nbsp;focus: <span className="code-string">'Scalability'</span>, <br />
                  &nbsp;&nbsp;passions: [<span className="code-string">'UX'</span>, <span className="code-string">'Performance'</span>] <br />
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