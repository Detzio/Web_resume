import { useState } from 'react';
import type { Project as ProjectType } from '../../types';
import Section from '../ui/Section';
import Modal from '../ui/Modal';
import ProjectModal from '../ui/ProjectModal';
import './Projects.css';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <>
      <Section title="Projets Personnels & Scolaires" id="projects" className="projects">
        <div className="projects__header">
          <p className="projects__description">
            Découvrez mes projets sur{' '}
            <a
              href="https://github.com/Detzio"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__github-link"
            >
              🔗 GitHub
            </a>
          </p>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {project.image && (
                <div className="project-card__image-wrapper">
                  <img
                    src={project.image}
                    alt={`Capture d'écran du projet ${project.name}`}
                    className="project-card__image"
                  />
                  <div className="project-card__overlay">
                    <span className="project-card__view-more">
                      👁️ Voir plus
                    </span>
                  </div>
                </div>
              )}

              <div className="project-card__content">
                <h3 className="project-card__title">{project.name}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-card__tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-card__highlights">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                    {project.highlights.length > 3 && (
                      <li className="project-card__highlights-more">
                        +{project.highlights.length - 3} autres points...
                      </li>
                    )}
                  </ul>
                )}

                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label={`Code source du projet ${project.name} sur GitHub`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      🔗 GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--primary"
                      aria-label={`Voir le projet ${project.name} en ligne`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 Voir le code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </>
  );
};

export default Projects;
