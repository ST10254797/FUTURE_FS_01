import React, { useState, useEffect } from 'react';
import { Terminal, Send } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Adds a shadow/background effect when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Terminal size={20} className="logo-icon" />
          <span>CRN<span className="highlight">.</span>Dev</span>
        </div>

        <div className="nav-links">
          <a href="#about" className="nav-item">About</a>
          <a href="#resume" className="nav-item">Resume</a>
          <a href="#projects" className="nav-item">Projects</a>
        </div>

        <div className="nav-cta">
          <a href="#contact" className="btn-nav-contact">
            <span>Contact</span>
            <Send size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;