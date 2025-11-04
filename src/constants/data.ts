import type { Experience, Education, Project } from '../types';
import appNoteImage from '../assets/images/VisualAppNoteV1.png';
import casinoramaImage from '../assets/images/CasinoramaV1.png';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Intégrateur logiciel et formateur (Alternance)',
    company: 'Actemium Lille Digital Solutions',
    location: 'Lille, France',
    startDate: 'Octobre 2023',
    endDate: 'Septembre 2025',
    description:
      'Programmation logicielle no-code, low-code et Power BI',
    achievements: [
      'Consulting et formation des clients à la plateforme TeePee',
      'Développement de solutions no-code et low-code adaptées aux besoins clients',
      'Création de tableaux de bord et analyses avec Power BI',
      'Animation de sessions de formation pour les utilisateurs',
    ],
    technologies: ['No-code', 'Low-code', 'Power BI', 'TeePee'],
  },
  {
    id: 'exp-2',
    title: 'Employé polyvalent de restauration',
    company: 'Pitaya',
    location: 'Lille, France',
    startDate: 'Saisonnier 2022',
    endDate: '',
    description:
      'Poste polyvalent en restauration rapide',
    achievements: [
      'Réception et contrôle des produits',
      'Entretien et hygiène des locaux',
      'Préparation culinaire',
    ],
    technologies: [],
  },
  {
    id: 'exp-3',
    title: 'Animateur pour personne en situation de handicap',
    company: 'Association',
    location: 'Lille, France',
    startDate: 'Saisonnier 2017',
    endDate: '',
    description:
      'Animation et accompagnement de personnes en situation de handicap',
    achievements: [
      'Accompagnement de groupes lors de sorties ludiques',
      'Organisation et animation des activités de détente et de loisirs',
      'Adaptation des activités aux besoins spécifiques de chaque personne',
    ],
    technologies: [],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Mastère Architecture des Logiciels',
    institution: 'ESGI (École Supérieure de Génie Informatique)',
    location: 'Paris, France',
    startDate: 'Septembre 2025',
    endDate: 'En cours',
    description: 'Formation avancée en architecture logicielle et conception de systèmes',
  },
  {
    id: 'edu-2',
    degree: 'Bachelor Architecture des Logiciels',
    institution: 'ESGI (École Supérieure de Génie Informatique)',
    location: 'Paris, France',
    startDate: 'Septembre 2023',
    endDate: 'Septembre 2025',
    description: 'Formation en développement logiciel, web et mobile',
    achievements: [
      'Programmation de logiciels, de pages web et d\'applications mobile',
      'Gestion de projets et introduction à l\'entrepreneuriat',
    ],
  },
  {
    id: 'edu-3',
    degree: 'Licence Histoire Géographie',
    institution: 'Université de Lille',
    location: 'Lille, France',
    startDate: 'Janvier 2019',
    endDate: 'Juin 2022',
    description: 'Formation universitaire en sciences humaines',
    achievements: [
      'Concevoir des contenus scientifiques et délivrer des cours',
      'Traiter l\'information (Analyse, recherche, classement)',
    ],
  },
  {
    id: 'edu-4',
    degree: 'Bac STI2D',
    institution: 'Lycée',
    location: 'France',
    startDate: '2017',
    endDate: 'Juin 2017',
    description: 'Sciences et Technologies de l\'Industrie et du Développement Durable',
    achievements: [
      'Sécurité système, réseau et cloud',
      'Computing Mobilité et objet connecté',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'CV Web Interactif',
    description:
      'Application de CV en ligne avec React et TypeScript, déployée sur GitHub Pages',
    technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
    highlights: [
      'Architecture modulaire et clean code',
      'Composants réutilisables',
      'Accessibilité WCAG 2.1',
      'Responsive design',
    ],
  },
  {
    id: 'project-2',
    name: 'Docker-Android-App',
    description:
      'Application mobile / outil de monitoring de conteneurs, avec interface mobile pour gérer/visualiser des conteneurs Docker',
    technologies: ['Kotlin', 'Android', 'API Docker'],
    link: 'https://github.com/Detzio/Docker-Android-App',
    highlights: [
      'Architecture modulaire (UI / service / données)',
      'Gestion des logs et métriques des conteneurs',
      'Interface mobile intuitive',
      'Intégration API Docker',
    ],
  },
  {
    id: 'project-3',
    name: 'MiniSocialWebPage',
    description:
      'Mini-site de réseau social avec gestion d\'utilisateurs, posts et interactions',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Detzio/MiniSocialWebPage',
    highlights: [
      'Gestion d\'utilisateurs et posts',
      'Interactions sociales',
      'UI interactive et responsive',
      'Design moderne',
    ],
  },
  {
    id: 'project-4',
    name: 'Casinorama',
    description:
      'Mon premier gros projet scolaire en Java. À l\'époque, nous collaborions via partage de fichier sur Discord. Ce projet nous a appris les bases de Java et de l\'algorithmie.',
    technologies: ['Java'],
    link: 'https://github.com/Detzio/Casinorama',
    image: casinoramaImage,
    previewImages: [casinoramaImage],
    detailedDescription:
      'Mon premier gros projet scolaire en Java. À l\'époque, nous collaborions via partage de fichier sur Discord, ce qui était un vrai défi d\'organisation ! Ce projet nous a permis d\'apprendre les bases de Java, de comprendre l\'algorithmie et de gérer la logique métier d\'un jeu de casino avec ses probabilités.',
    highlights: [
      'Logique métier et probabilités',
      'Architecture propre',
      'Système de jeu complet',
      'Collaboration en équipe',
      'Premiers pas en Java',
    ],
  },
  {
    id: 'project-5',
    name: 'SteamCheck',
    description:
      'Application pour interagir avec l\'API Steam (statuts, jeux, etc.)',
    technologies: ['Kotlin'],
    link: 'https://github.com/Detzio/SteamCheck',
    highlights: [
      'Appels API externes',
      'Parsing JSON',
      'Interface utilisateur moderne',
      'Gestion des données Steam',
    ],
  },
  {
    id: 'project-6',
    name: 'app_note',
    description:
      'L\'un de mes premiers projets d\'application de prise de notes locale',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Detzio/app_note',
    image: appNoteImage,
    previewImages: [appNoteImage],
    highlights: [
      'Stockage local (localStorage / IndexedDB)',
      'Création, édition, suppression de notes',
      'UI/UX intuitive',
      'Interface responsive',
    ],
  },
];
