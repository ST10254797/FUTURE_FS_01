import React from 'react';
import { MessageCircle, Linkedin, Mail } from 'lucide-react';
import { CONTACT_LINKS } from '../data';

const Contact = () => (
  <section id="contact" className="section">
    <h2>Let's Connect</h2>
    <div className="contact-grid">
      <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noreferrer" className="contact-card wa">
        <MessageCircle size={32} />
        <span>WhatsApp</span>
        <p>Direct Message</p>
      </a>
      <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer" className="contact-card li">
        <Linkedin size={32} />
        <span>LinkedIn</span>
        <p>Professional Profile</p>
      </a>
      <a href={CONTACT_LINKS.email} className="contact-card em">
        <Mail size={32} />
        <span>Email</span>
        <p>Send an Inquiry</p>
      </a>
    </div>
  </section>
);

export default Contact;