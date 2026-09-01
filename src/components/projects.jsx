import React from 'react';
import { Smartphone, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { mobileProjects, webProjects } from '../data/projectsData';
import './projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>A showcase of mobile applications and web utilities I've built.</p>
        </div>

        {/* Mobile Applications */}
        <div className="category-header">
          <Smartphone size={22} />
          <h3>Mobile Applications</h3>
        </div>
        <div className="projects-grid">
          {mobileProjects.map(project => (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-thumb" />
                </div>
              )}
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Web Applications */}
        <div className="category-header web-header">
          <Globe size={22} />
          <h3>Web Applications</h3>
        </div>
        <div className="projects-grid">
          {webProjects.map(project => (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-thumb" />
                </div>
              )}
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}