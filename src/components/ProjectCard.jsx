import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.tech.map(t => <span key={t}>{t}</span>)}
      </div>
      <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
        Source Code <ExternalLink size={16} />
      </a>
    </div>
  </div>
);

export default ProjectCard;