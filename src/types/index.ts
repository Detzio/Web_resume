// ============================================
// TYPES PRINCIPAUX POUR LE CV WEB
// ============================================

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  profileImage?: string;
}

export interface ProfessionalGoal {
  title: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'fullstack' | 'backend' | 'mobile' | 'database' | 'tools' | 'other';
  description?: string;
  icon?: string; // URL ou chemin de l'icône
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Présent';
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  highlights?: string[];
  previewImages?: string[];
  detailedDescription?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SectionProps {
  title: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}
