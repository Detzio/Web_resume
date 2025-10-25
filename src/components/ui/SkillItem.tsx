import type { Skill } from '../../types';
import Tooltip from './Tooltip';
import './SkillItem.css';

interface SkillItemProps {
  skill: Skill;
}

/**
 * Composant pour afficher une compétence technique
 * Avec tooltip pour plus d'informations et icône
 */
const SkillItem = ({ skill }: SkillItemProps) => {
  const tooltipContent = skill.description || skill.name;

  return (
    <Tooltip content={tooltipContent}>
      <div className="skill-item" role="listitem">
        {skill.icon && (
          <div className="skill-item__icon">
            {skill.icon.startsWith('http') ? (
              <img src={skill.icon} alt={`${skill.name} icon`} />
            ) : (
              <span>{skill.icon}</span>
            )}
          </div>
        )}
        <span className="skill-item__name">{skill.name}</span>
      </div>
    </Tooltip>
  );
};

export default SkillItem;
