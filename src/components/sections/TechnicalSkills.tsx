import type { SkillCategory } from '../../types';
import Section from '../ui/Section';
import SkillItem from '../ui/SkillItem';
import './TechnicalSkills.css';

interface TechnicalSkillsProps {
  skillCategories: SkillCategory[];
}

/**
 * Section des compétences techniques organisées par catégories
 */
const TechnicalSkills = ({ skillCategories }: TechnicalSkillsProps) => {
  return (
    <Section title="Compétences Techniques" id="section-skills" className="technical-skills">
      <div className="technical-skills__categories">
        {skillCategories.map((category) => (
          <div key={category.name} className="technical-skills__category">
            <h3 className="technical-skills__category-title">{category.name}</h3>
            <div
              className="technical-skills__list"
              role="list"
              aria-label={`Compétences ${category.name}`}
            >
              {category.skills.map((skill) => (
                <SkillItem key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechnicalSkills;
