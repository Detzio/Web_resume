import type { PersonalInfo, ProfessionalGoal, Language } from "../types";
import profilePhoto from "../assets/images/PP.png";

export const personalInfo: PersonalInfo = {
  firstName: "Thomas",
  lastName: "Dusséaux",
  title: "Développeur junior",
  email: "t.dusseaux@proton.me",
  phone: "+33 6 35 39 26 16",
  location: "Lille, France",
  linkedin: "https://www.linkedin.com/in/thomas-dusséaux",
  github: "https://github.com/Detzio",
  profileImage: profilePhoto,
};

export const professionalGoal: ProfessionalGoal = {
  title: "Objectif Professionnel",
  description:
    "Passionné par la digitalisation et l'innovation, je cherche à rejoindre une équipe dynamique où je pourrai contribuer au développement de solutions performantes et évolutives. Mon objectif est de continuer à apprendre et à évoluer en tant que développeur, tout en apportant une valeur ajoutée significative aux projets auxquels je participe.",
};

export const languages: Language[] = [
  { name: "Français", level: "C2 (courant)" },
  { name: "Anglais", level: "B2 (intermédiaire)" },
];

export const interests: string[] = [
  "Programmation",
  "Histoire - géographie",
  "Sports nautiques",
  "Voyages",
  "Echecs et jeux de gestions",
];
