import type { Skill, SkillCategory } from "../types";
import htmlCertif from "../assets/MIMO-HTML-certif.pdf";
import cssCertif from "../assets/MIMO-CSS-certif.pdf";
import jsCertif from "../assets/MIMO-JS-certif.pdf";
import sqlCertif from "../assets/MIMO-SQL-certif.pdf";
import powerbiFormation from "../assets/Certificat de réalisation - Formation POWERBI T.DUSSEAUX 11 2024.pdf";

/**
 * Compétences techniques organisées par catégorie
 */
export const skills: Skill[] = [
  // === FRONTEND ===
  {
    id: "skill-html",
    name: "HTML5",
    category: "frontend",
    description: "Langage de balisage pour structurer les pages web",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    certificate: htmlCertif,
  },
  {
    id: "skill-css",
    name: "CSS3",
    category: "frontend",
    description: "Feuilles de style en cascade pour le design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    certificate: cssCertif,
  },
  {
    id: "skill-react",
    name: "React",
    category: "frontend",
    description:
      "Bibliothèque JavaScript pour construire des interfaces utilisateur modernes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  // === FULLSTACK ===
  {
    id: "skill-javascript",
    name: "JavaScript",
    category: "fullstack",
    description: "Langage de programmation pour le web (frontend & backend)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    certificate: jsCertif,
  },
  {
    id: "skill-typescript",
    name: "TypeScript",
    category: "fullstack",
    description:
      "Superset de JavaScript avec typage statique (frontend & backend)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: "skill-php",
    name: "PHP",
    category: "fullstack",
    description: "Langage de programmation serveur pour le développement web",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    id: "skill-laravel",
    name: "Laravel",
    category: "fullstack",
    description: "Framework PHP fullstack moderne avec Blade templates",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    id: "skill-symfony",
    name: "Symfony",
    category: "fullstack",
    description: "Framework PHP fullstack professionnel avec Twig",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  },

  // === BACKEND ===
  {
    id: "skill-nodejs",
    name: "Node.js",
    category: "backend",
    description: "Runtime JavaScript côté serveur",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: "skill-express",
    name: "Express.js",
    category: "backend",
    description: "Framework web minimaliste pour Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    id: "skill-python",
    name: "Python",
    category: "backend",
    description: "Langage de programmation polyvalent pour le backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  // === MOBILE ===
  {
    id: "skill-kotlin",
    name: "Kotlin Multiplatform",
    category: "mobile",
    description:
      "Langage moderne pour applications multiplateforme (Android, iOS, Web)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },

  // === DATABASES ===
  {
    id: "skill-sql",
    name: "SQL",
    category: "database",
    description: "Langage de requête structuré pour les bases de données",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9TQlOhv6008rPfgyJBaF-UUXdszfxJO7uA&s",
    certificate: sqlCertif,
  },
  {
    id: "skill-postgresql",
    name: "PostgreSQL",
    category: "database",
    description: "Base de données relationnelle open source avancée",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "skill-mongodb",
    name: "MongoDB",
    category: "database",
    description: "Base de données NoSQL orientée documents",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  // === TOOLS & OTHER ===
  {
    id: "skill-git",
    name: "Git",
    category: "tools",
    description: "Système de contrôle de version distribué",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: "skill-github",
    name: "GitHub",
    category: "tools",
    description: "Plateforme de développement collaboratif",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: "skill-vscode",
    name: "VS Code",
    category: "tools",
    description: "Éditeur de code moderne et extensible",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    id: "skill-powerbi",
    name: "Power BI",
    category: "tools",
    description: "Outil de business intelligence et visualisation de données",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    certificate: powerbiFormation,
  },
  {
    id: "skill-figma",
    name: "Figma",
    category: "tools",
    description: "Outil de design collaboratif pour UI/UX",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    id: "skill-scala",
    name: "Scala",
    category: "fullstack",
    description: "Langage de programmation fonctionnelle et orientée objet",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
  },
];

export const skillsByCategory: SkillCategory[] = [
  {
    name: "🎨 Frontend",
    skills: skills.filter((skill) => skill.category === "frontend"),
  },
  {
    name: "🔄 Fullstack",
    skills: skills.filter((skill) => skill.category === "fullstack"),
  },
  {
    name: "⚙️ Backend",
    skills: skills.filter((skill) => skill.category === "backend"),
  },
  {
    name: "📱 Mobile",
    skills: skills.filter((skill) => skill.category === "mobile"),
  },
  {
    name: "📊 Bases de données",
    skills: skills.filter((skill) => skill.category === "database"),
  },
  {
    name: "🛠️ Outils & Technologies",
    skills: skills.filter((skill) => skill.category === "tools"),
  },
];
