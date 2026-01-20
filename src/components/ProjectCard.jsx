import React from 'react';
import { ExternalLink, Github, Layers, Code2 } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    {/* Visual Header with Gradient Placeholder */}
    <div className="project-image-container">
      <div className="project-placeholder-gradient">
        <div className="placeholder-content">
          <Code2 size={40} className="placeholder-icon" />
          <div className="placeholder-bg-text">{project.title}</div>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="project-overlay">
        <a href={project.github} className="overlay-link" target="_blank" rel="noreferrer" title="View Source">
          <Github size={22} />
        </a>
      </div>
    </div>

    <div className="project-info">
      <div className="project-meta">
        <span className="project-category">Featured Project</span>
        <h3>{project.title}</h3>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="tech-stack">
        {project.tech.map((t, index) => (
          <span key={index} className="tech-tag">{t}</span>
        ))}
      </div>
      
      <div className="project-footer">
        <a href={project.github} className="project-link-btn" target="_blank" rel="noreferrer">
          Source Code <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;