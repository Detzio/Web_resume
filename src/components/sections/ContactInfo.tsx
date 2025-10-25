import type { PersonalInfo } from '../../types';
import './ContactInfo.css';

interface ContactInfoProps {
  info: PersonalInfo;
}

/**
 * Section des informations de contact avec photo
 * Accessible et responsive
 */
const ContactInfo = ({ info }: ContactInfoProps) => {
  return (
    <header className="contact-info" role="banner">
      <div className="contact-info__container">
        {/* Photo de profil */}
        {info.profileImage && (
          <div className="contact-info__image-wrapper">
            <img
              src={info.profileImage}
              alt={`Photo de profil de ${info.firstName} ${info.lastName}`}
              className="contact-info__image"
            />
          </div>
        )}

        {/* Informations principales */}
        <div className="contact-info__details">
          <h1 className="contact-info__name">
            {info.firstName} {info.lastName}
          </h1>
          <p className="contact-info__title">{info.title}</p>

          {/* Coordonnées */}
          <div className="contact-info__links">
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
          </div>

          {/* Liens sociaux */}
          <div className="contact-info__social">
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
  );
};

export default ContactInfo;
