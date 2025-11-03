import './CertificateModal.css';

interface CertificateModalProps {
  skillName: string;
  certificatePath: string;
}

const CertificateModal = ({ skillName, certificatePath }: CertificateModalProps) => {
  return (
    <div className="certificate-modal">
      <h2 className="certificate-modal__title">
        🎓 Certificat - {skillName}
      </h2>
      
      <div className="certificate-modal__content">
        <iframe
          src={certificatePath}
          className="certificate-modal__pdf"
          title={`Certificat ${skillName}`}
        />
      </div>

      <div className="certificate-modal__actions">
        <a
          href={certificatePath}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-modal__button certificate-modal__button--primary"
        >
           Ouvrir dans un nouvel onglet
        </a>
      </div>
    </div>
  );
};

export default CertificateModal;
