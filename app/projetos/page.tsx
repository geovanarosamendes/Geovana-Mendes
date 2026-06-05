"use client";

import ProjectsFilter from "@/components/projects/ProjectsFilter";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.projects.page.badge}</span>
          <h1>{t.projects.page.title}</h1>
          <p>{t.projects.page.description}</p>
        </div>

        <ProjectsFilter />
      </div>
    </section>
  );
}
