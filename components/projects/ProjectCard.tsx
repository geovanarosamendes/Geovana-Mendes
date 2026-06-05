"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

type Project = (typeof translations)["en-US"]["projects"]["items"][number];

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <article className="card card-hover project-card">
      <div className="project-image-placeholder" />

      <div className="project-header">
        <span className="project-category">{project.category}</span>
        <span className="project-subcategory">{project.subcategory}</span>
      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <Link href={`/projetos/${project.slug}`}>
          {t.common.actions.viewProject} →
        </Link>
      </div>
    </article>
  );
}
