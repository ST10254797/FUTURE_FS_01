import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const ResumeSection = () => {
  // Replace this with the actual name of the file you put in your /public folder
  const resumeLink = "/Updated_Cristiano_R_Naidoo_CV.pdf"; 

  return (
    <section id="resume" className="section">
      <div className="resume-cta-container">
        <div className="resume-icon-box">
           <FileText size={48} className="highlight" />
        </div>
        <h2>Professional Resume</h2>
        <p>View or download my full professional background and qualifications.</p>
        
        <div className="resume-actions">
          {/* VIEW BUTTON */}
          <a 
            href={resumeLink} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-view"
          >
            <Eye size={20} /> View Resume
          </a>

          {/* DOWNLOAD BUTTON */}
          <a 
            href={resumeLink} 
            download="CR_Naidoo_CV.pdf" 
            className="btn-download"
          >
            <Download size={20} /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;