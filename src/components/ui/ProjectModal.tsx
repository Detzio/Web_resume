import { useState } from 'react';
import type { Project } from '../../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
}

const ProjectModal = ({ project }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.previewImages || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-modal">
      <h2 className="project-modal__title">{project.name}</h2>

      {/* Image Gallery */}
      {images.length > 0 && (
        <div className="project-modal__gallery">
          <div className="project-modal__gallery-main">
            <img
              src={images[currentImageIndex]}
              alt={`${project.name} - Aperçu ${currentImageIndex + 1}`}
              className="project-modal__gallery-image"
            />
            {images.length > 1 && (
              <>
                <button
                  className="project-modal__gallery-nav project-modal__gallery-nav--prev"
                  onClick={prevImage}
                  aria-label="Image précédente"
                >
                  ‹
                </button>
                <button
                  className="project-modal__gallery-nav project-modal__gallery-nav--next"
                  onClick={nextImage}
                  aria-label="Image suivante"
                >
                  ›
                </button>
                <div className="project-modal__gallery-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`project-modal__gallery-indicator ${
                        index === currentImageIndex ? 'active' : ''
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="project-modal__gallery-thumbs">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`project-modal__gallery-thumb ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`Miniature ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Technologies */}
      <div className="project-modal__technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="project-modal__tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="project-modal__description">
        <h3>📝 Description</h3>
        <p>{project.detailedDescription || project.description}</p>
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="project-modal__highlights">
          <h3>✨ Points forts</h3>
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="project-modal__links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal__link"
          >
            🔗 Voir sur GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal__link project-modal__link--primary"
          >
            🌐 Voir le code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
