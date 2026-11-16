import { useState, cloneElement } from 'react';
import { Blocks, Smartphone, Server, Globe, ExternalLink, FileCode, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import {
  blockchainProjects,
  mobileProjects,
  backendProjects,
  webProjects
} from '../data/projectsData';
import ImageViewerModal from './ImageViewerModal';
import './projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    {
      id: 'blockchain',
      title: 'Blockchain / Web3 Development',
      icon: <Blocks size={22} />,
      projects: blockchainProjects
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone size={22} />,
      projects: mobileProjects
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={22} />,
      projects: backendProjects
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <Globe size={22} />,
      projects: webProjects
    }
  ];

  const handleOpenImage = (project) => {
    if (!project.image) return;
    setSelectedImage({
      imageSrc: project.image,
      imageAlt: project.imageAlt || project.title,
      title: project.title,
      fileName: project.imageMetadata?.fileName || project.image.split('/').pop(),
      fileSize: project.imageMetadata?.fileSize || null
    });
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const visibleCategories =
    activeFilter === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>
            A showcase of decentralized blockchain protocols, mobile applications, backend services, and web platforms I've built.
          </p>
        </div>

        {/* Category Navigation Filter */}
        <div className="category-filters" role="tablist" aria-label="Project categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              <span className="filter-icon">{cat.icon}</span>
              {cat.title.replace(' Development', '')}
            </button>
          ))}
        </div>

        {/* Project Categories */}
        {visibleCategories.map((cat) => (
          <div key={cat.id} className="category-block">
            <div className="category-header">
              {cat.icon}
              <h3>{cat.title}</h3>
            </div>

            <div className="projects-grid">
              {cat.projects.map((project) => (
                <div key={project.id} className="project-card">
                  {/* Image / Intentional Placeholder */}
                  {project.image ? (
                    <div
                      className="project-image-container has-image"
                      onClick={() => handleOpenImage(project)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleOpenImage(project);
                        }
                      }}
                      title="Click to view full preview"
                      aria-label={`View full preview of ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="project-thumb"
                      />
                      <div className="image-overlay-badge">
                        <Eye size={14} /> Preview
                      </div>
                    </div>
                  ) : (
                    <div
                      className="project-image-container placeholder-container"
                      aria-hidden="true"
                    >
                      <div className="placeholder-content">
                        <div className="placeholder-icon">
                          {cat.icon && cloneElement(cat.icon, { size: 36 })}
                        </div>
                        <span className="placeholder-label">Preview Asset Pending</span>
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="project-info">
                    <div className="project-top-meta">
                      <span className="project-category">{project.category}</span>
                      {project.status && (
                        <span
                          className={`status-pill ${
                            project.status.toLowerCase().includes('progress')
                              ? 'status-in-progress'
                              : 'status-live'
                          }`}
                        >
                          <span className="status-dot"></span>
                          {project.status}
                        </span>
                      )}
                    </div>

                    <h4>{project.title}</h4>

                    {project.contribution && (
                      <div className="contribution-note">
                        <strong>Role / Scope:</strong> {project.contribution}
                      </div>
                    )}

                    <p>{project.description}</p>

                    <div className="tech-stack">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                          title="View Source Code on GitHub"
                        >
                          <FaGithub size={15} /> Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link live-link"
                          title="Open Live Application"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                      {project.backend && (
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link backend-link"
                          title="Open Backend Service"
                        >
                          <Server size={15} /> Backend
                        </a>
                      )}
                      {project.contract && (
                        <a
                          href={project.contract}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link contract-link"
                          title="View Verified Smart Contract on Sepolia Etherscan"
                        >
                          <FileCode size={15} /> Contract
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reusable Image Viewer Lightbox Modal */}
      <ImageViewerModal
        key={selectedImage?.imageSrc || 'modal'}
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.imageSrc}
        imageAlt={selectedImage?.imageAlt}
        title={selectedImage?.title}
        fileName={selectedImage?.fileName}
        fileSize={selectedImage?.fileSize}
        onClose={handleCloseImage}
      />
    </section>
  );
}
