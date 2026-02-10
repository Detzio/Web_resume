import { useEffect } from 'react';
import type { PersonalInfo } from '../../types';
import { useActiveSection, type SectionId } from '../../hooks/useActiveSection';
import './ContactInfo.css';

interface ContactInfoProps {
  info: PersonalInfo;
}

const sections: { id: SectionId; label: string }[] = [
  { id: 'goal', label: 'Objectif' },
  { id: 'education', label: 'Formation' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
];

const ContactInfo = ({ info }: ContactInfoProps) => {
  const { activeSection, scrollToSection } = useActiveSection();

  useEffect(() => {
    // Fermer la nav mobile au redimensionnement
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Navigation auto-reset on resize
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="contact-info-wrapper">
      <header className="contact-info" role="banner">
        <div className="contact-info__container">
        {info.profileImage && (
          <div className="contact-info__image-wrapper">
            <img
              src={info.profileImage}
              alt={`Photo de profil de ${info.firstName} ${info.lastName}`}
              className="contact-info__image"
            />
          </div>
        )}

        <div className="contact-info__details">
          <h1 className="contact-info__name">
            {info.firstName} {info.lastName}
          </h1>
          <p className="contact-info__title">{info.title}</p>

          <div className="contact-info__actions">
            <a
              href={`mailto:${info.email}`}
              className="contact-info__social-link"
              aria-label={`Envoyer un email à ${info.email}`}
            >
              📧 {info.email}
            </a>

            <a
              href={`tel:${info.phone.replace(/\s/g, '')}`}
              className="contact-info__social-link"
              aria-label={`Appeler au ${info.phone}`}
            >
              📞 {info.phone}
            </a>

            <span className="contact-info__social-link">
              📍 {info.location}
            </span>

            {info.linkedin && (
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__social-link"
                aria-label="Profil LinkedIn"
              >
                💼 LinkedIn
              </a>
            )}

            {info.github && (
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__social-link"
                aria-label="Profil GitHub"
              >
                🔗 GitHub
              </a>
            )}

            {info.portfolio && (
              <a
                href={info.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__social-link"
                aria-label="Portfolio personnel"
              >
                🌐 Portfolio
              </a>
            )}
          </div>
        </div>
      </div>
    </header>

    {/* Navigation header sticky */}
    <nav className="section-nav" role="navigation">
      <div className="section-nav__container">
        <div className="section-nav__menu">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`section-nav__link ${
                activeSection === section.id ? 'section-nav__link--active' : ''
              }`}
              onClick={() => {
                scrollToSection(section.id);
              }}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
    </div>
  );
};

export default ContactInfo;
