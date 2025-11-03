import type { PersonalInfo, ProfessionalGoal, Language } from '../types';
import profilePhoto from '../assets/images/PP.jpeg';

export const personalInfo: PersonalInfo = {
  firstName: 'Thomas',
  lastName: 'Dusséaux',
  title: 'Développeur Full Stack',
  email: 't.dusseaux@proton.me',
  phone: '+33 6 35 39 26 16',
  location: 'Lille, France',
  linkedin: 'https://www.linkedin.com/in/thomas-dusséaux',
  github: 'https://github.com/Detzio',
  profileImage: profilePhoto,
};

export const professionalGoal: ProfessionalGoal = {
  title: 'Objectif Professionnel',
  description:
    'J’entame un mastère en développement et recherche une alternance (3 sem. entreprise / 1 sem. école). Étudiant en développement, je vois le code comme un terrain de jeu où la logique rencontre la créativité. Curieux de nature et rigoureux dans mon travail, je cherche aujourd’hui une alternance pour transformer mes idées en projets concrets, apprendre des meilleurs et continuer à progresser, un commit à la fois. Ce qui m’anime : comprendre le “pourquoi” derrière chaque ligne de code et avancer avec des personnes qui partagent la même envie de créer et d’évoluer.',
    
};

export const languages: Language[] = [
  { name: 'Français', level: 'C2 (courant)' },
  { name: 'Anglais', level: 'B2 (intermédiaire)' },
];

export const interests: string[] = [
    'Programmation',
    'Histoire - géographie',
    'Natation',
    'Nature',
    'Voyages',
    'Echecs et jeux de gestions',
];
