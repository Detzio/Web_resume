import type { Experience as ExperienceType } from '../../types';
import Section from '../ui/Section';
import './Experience.css';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <Section title="Expériences Professionnelles" id="section-experience" className="experience">
      <div className="experience__timeline">
        {experiences.map((exp) => (
          <article key={exp.id} className="experience__item">
            <div className="experience__timeline-marker" aria-hidden="true" />
            <div className="experience__content">
              <div className="experience__header">
                <h3 className="experience__title">{exp.title}</h3>
                <span className="experience__period">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>

              <div className="experience__company">
                <strong>{exp.company}</strong> • {exp.location}
              </div>

              <p className="experience__description">{exp.description}</p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="experience__achievements">
                  <h4 className="experience__achievements-title">Réalisations :</h4>
                  <ul className="experience__achievements-list">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="experience__technologies">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="experience__tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
