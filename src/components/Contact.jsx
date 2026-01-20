import React from 'react';
import { MessageCircle, Linkedin, Mail, ArrowUpRight, Send } from 'lucide-react';
import { CONTACT_LINKS } from '../data';

const Contact = () => (
  <section id="contact" className="section">
    <div className="contact-wrapper">
      
      {/* Left Side: Call to Action */}
      <div className="contact-info-side">
        <div className="badge-intro">
          <Send size={14} /> <span>Get In Touch</span>
        </div>
        <h2>Let's build something <span className="highlight">extraordinary</span>.</h2>
        <p>
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, my inbox is always open!
        </p>
        <div className="availability-status">
          <span className="pulse-dot"></span>
          Available for new projects
        </div>
      </div>

      {/* Right Side: Interactive Cards */}
      <div className="contact-cards-side">
        <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noreferrer" className="contact-card-v2 wa">
          <div className="card-icon"><MessageCircle size={24} /></div>
          <div className="card-content">
            <span>WhatsApp</span>
            <p>Chat with me directly</p>
          </div>
          <ArrowUpRight className="card-arrow" size={18} />
        </a>

        <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer" className="contact-card-v2 li">
          <div className="card-icon"><Linkedin size={24} /></div>
          <div className="card-content">
            <span>LinkedIn</span>
            <p>Connect professionally</p>
          </div>
          <ArrowUpRight className="card-arrow" size={18} />
        </a>

        <a href={`mailto:${CONTACT_LINKS.email}`} className="contact-card-v2 em">
          <div className="card-icon"><Mail size={24} /></div>
          <div className="card-content">
            <span>Email</span>
            <p>Send a formal inquiry</p>
          </div>
          <ArrowUpRight className="card-arrow" size={18} />
        </a>
      </div>
      
    </div>
  </section>
);

export default Contact;