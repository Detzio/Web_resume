import { useState } from 'react';
import type { Skill } from '../../types';
import Tooltip from './Tooltip';
import Modal from './Modal';
import CertificateModal from './CertificateModal';
import './SkillItem.css';

interface SkillItemProps {
  skill: Skill;
}

/**
 * Composant pour afficher une compétence technique
 * Avec tooltip pour plus d'informations et icône
 */
const SkillItem = ({ skill }: SkillItemProps) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const tooltipContent = skill.description || skill.name;

  const handleCertificateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCertificate(true);
  };

  return (
    <>
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
          {skill.certificate && (
            <button
              className="skill-item__certificate-badge"
              onClick={handleCertificateClick}
              aria-label={`Voir le certificat ${skill.name}`}
              title="Certificat disponible - Cliquer pour visualiser"
            >
              🎓
            </button>
          )}
        </div>
      </Tooltip>

      {skill.certificate && (
        <Modal
          isOpen={showCertificate}
          onClose={() => setShowCertificate(false)}
        >
          <CertificateModal
            skillName={skill.name}
            certificatePath={skill.certificate}
          />
        </Modal>
      )}
    </>
  );
};

export default SkillItem;
