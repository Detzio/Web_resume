import type { SectionProps } from '../../types';
import './Section.css';

/**
 * Composant Section réutilisable pour structurer le CV
 * Respecte les principes d'accessibilité avec les balises sémantiques
 */
const Section = ({ title, id, className = '', children }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`cv-section ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <h2 
        id={id ? `${id}-title` : undefined}
        className="cv-section__title"
      >
        {title}
      </h2>
      <div className="cv-section__content">
        {children}
      </div>
    </section>
  );
};

export default Section;
