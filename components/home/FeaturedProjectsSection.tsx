"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function FeaturedProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.home.featuredProjects.badge}</span>
          <h2>{t.home.featuredProjects.title}</h2>
        </div>

        <div className="projects-grid">
          {t.projects.items.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
