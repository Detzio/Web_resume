// ============================================
// APP - Orchestration du CV Web
// ============================================

import ContactInfo from './components/sections/ContactInfo';
import ProfessionalGoal from './components/sections/ProfessionalGoal';
import TechnicalSkills from './components/sections/TechnicalSkills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';

import { personalInfo, professionalGoal } from './constants/personalInfo';
import { skillsByCategory } from './constants/skills';
import { experiences, education, projects } from './constants/data';

import './App.css';

/**
 * Composant principal du CV Web
 * Architecture clean et modulaire
 */
function App() {
  return (
    <div className="app">
      {/* En-tête avec informations de contact */}
      <ContactInfo info={personalInfo} />

      {/* Contenu principal du CV */}
      <main className="app__main">
        {/* Objectif professionnel */}
        <ProfessionalGoal goal={professionalGoal} />

        {/* Compétences techniques */}
        <TechnicalSkills skillCategories={skillsByCategory} />

        {/* Expériences professionnelles */}
        <Experience experiences={experiences} />

        {/* Projets */}
        <Projects projects={projects} />

        {/* Formation */}
        <Education education={education} />
      </main>

      {/* Pied de page */}
      <footer className="app__footer">
        <p>
          © {new Date().getFullYear()} {personalInfo.firstName}{' '}
          {personalInfo.lastName} • CV créé avec React & TypeScript
        </p>
      </footer>
    </div>
  );
}

export default App;
