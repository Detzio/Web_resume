import type { Education as EducationType } from '../../types';
import Section from '../ui/Section';
import './Education.css';

interface EducationProps {
  education: EducationType[];
}

const Education = ({ education }: EducationProps) => {
  return (
    <Section title="Formation" id="education" className="education">
      <div className="education__list">
        {education.map((edu) => (
          <article key={edu.id} className="education__item">
            <div className="education__header">
              <h3 className="education__degree">{edu.degree}</h3>
              <span className="education__period">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>

            <div className="education__institution">
              <strong>{edu.institution}</strong> • {edu.location}
            </div>

            {edu.description && (
              <p className="education__description">{edu.description}</p>
            )}

            {edu.achievements && edu.achievements.length > 0 && (
              <ul className="education__achievements">
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Education;
