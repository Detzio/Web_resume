import type { PersonalInfo, ProfessionalGoal, Language } from '../types';

export const personalInfo: PersonalInfo = {
  firstName: 'Thomas',
  lastName: 'Dusséaux',
  title: 'Développeur Full Stack',
  email: 't.dusseaux@proton.me',
  phone: '+33 6 35 39 26 16',
  location: 'Lille, France',
  linkedin: 'https://www.linkedin.com/in/thomas-dusséaux',
  github: 'https://github.com/Detzio',
  profileImage: '/PP.jpeg',
};

export const professionalGoal: ProfessionalGoal = {
  title: 'Objectif Professionnel',
  description:
    'Passionné par le développement web et les nouvelles technologies, je recherche un poste de développeur Full Stack où je pourrai mettre à profit mes compétences en React, TypeScript et Node.js pour créer des applications web modernes et performantes.',
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
