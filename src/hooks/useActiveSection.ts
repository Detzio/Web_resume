import { useState, useEffect } from "react";

export type SectionId =
  | "goal"
  | "education"
  | "experience"
  | "projects"
  | "skills";

interface SectionThreshold {
  id: SectionId;
  label: string;
  offsetTop: number;
}

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [sectionThresholds, setSectionThresholds] = useState<
    SectionThreshold[]
  >([]);

  useEffect(() => {
    // Récupérer les positions des sections
    const updateThresholds = () => {
      const sections: SectionThreshold[] = [
        { id: "goal", label: "Objectif Professionnel", offsetTop: 0 },
        { id: "education", label: "Formation", offsetTop: 0 },
        { id: "experience", label: "Expérience", offsetTop: 0 },
        { id: "projects", label: "Projets", offsetTop: 0 },
        { id: "skills", label: "Compétences", offsetTop: 0 },
      ];

      sections.forEach((section) => {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          section.offsetTop = element.offsetTop;
        }
      });

      setSectionThresholds(sections);
    };

    // Attendre que le DOM soit complètement chargé
    const timeoutId = setTimeout(updateThresholds, 100);

    // Recalculer au redimensionnement
    window.addEventListener("resize", updateThresholds);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateThresholds);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionThresholds.length === 0) return;

      const scrollPosition = window.scrollY + 150; // Offset pour le header

      let active: SectionId | null = null;

      // Trouver la section active
      for (let i = sectionThresholds.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionThresholds[i].offsetTop) {
          active = sectionThresholds[i].id;
          break;
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionThresholds]);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    activeSection,
    sectionThresholds,
    scrollToSection,
  };
};
