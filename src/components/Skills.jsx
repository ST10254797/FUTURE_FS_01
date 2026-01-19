import React from 'react';
import { SKILLS } from '../data';
// Import all icons here
import { Code2, Globe, Cpu, Database, Layout, GitBranch, Terminal, Layers } from 'lucide-react';

// A small helper to match strings to icons
const IconMap = {
  Layout: <Layout size={24} />,
  Code2: <Code2 size={24} />,
  Cpu: <Cpu size={24} />,
  Globe: <Globe size={24} />,
  Database: <Database size={24} />,
  GitBranch: <GitBranch size={24} />,
  Layers: <Layers size={24} />,
  Terminal: <Terminal size={24} />
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-title">
        <h2>Technical Stack</h2>
        <p>Technologies I use to bring ideas to life</p>
      </div>
      
      <div className="skills-container">
        {SKILLS.map((skill, index) => (
          <div key={index} className="skill-card">
            {/* We look up the icon based on the string name in data.js */}
            <div className="skill-icon">{IconMap[skill.iconName]}</div>
            <div className="skill-info">
              <h4>{skill.name}</h4>
              <span>{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;