import React from 'react';
import { FileText, Download, Eye, ExternalLink } from 'lucide-react';

const ResumeSection = () => {
  const resumeLink = "/Updated_Cristiano_R_Naidoo_CV.pdf"; 

  return (
    <section id="resume" className="section">
      <div className="resume-glow-wrapper">
        <div className="resume-cta-container">
          <div className="resume-content-layout">
            <div className="resume-text">
              <div className="badge-intro" style={{ marginBottom: '1rem' }}>
                <FileText size={14} /> <span>Curriculum Vitae</span>
              </div>
              <h2>Ready to dive deeper?</h2>
              <p>
                My resume provides a detailed look at my technical expertise, 
                academic background, and the projects I've spearheaded.
              </p>
            </div>

            <div className="resume-visual-preview">
              <div className="preview-document">
                <div className="document-line long"></div>
                <div className="document-line med"></div>
                <div className="document-line short"></div>
                <FileText size={40} className="floating-icon" />
              </div>
            </div>
          </div>

          <div className="resume-actions">
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-view"
            >
              <Eye size={18} /> View CV
            </a>

            <a 
              href={resumeLink} 
              download="CR_Naidoo_CV.pdf" 
              className="btn-download"
            >
              <Download size={18} /> Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;