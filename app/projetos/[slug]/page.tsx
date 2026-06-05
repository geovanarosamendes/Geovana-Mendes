"use client";

import ProjectGallery from "@/components/projects/ProjectGallery";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language];

  const project = t.projects.items.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container project-detail">
        <Link href="/projetos" className="back-link">
          ← {t.common.actions.backToProjects}
        </Link>

        <div className="project-detail-hero card">
          <div>
            <div className="blog-card-header">
              <span className="project-category">{project.category}</span>
              <span className="project-subcategory">{project.subcategory}</span>
            </div>

            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <div className="project-detail-actions">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  className="btn btn-primary"
                >
                  {t.common.actions.viewOnline}
                </Link>
              )}

              <Link
                href={project.githubUrl}
                target="_blank"
                className="btn btn-secondary"
              >
                {t.common.actions.viewCode}
              </Link>
            </div>
          </div>
        </div>

        <div className="project-detail-sections">
          <div className="card project-info-card">
            <h2>{t.projects.detail.overview}</h2>
            <p>{project.overview}</p>
          </div>

          <div className="card project-info-card">
            <h2>{t.projects.detail.problem}</h2>
            <p>{project.problem}</p>
          </div>

          <div className="card project-info-card">
            <h2>{t.projects.detail.solution}</h2>
            <p>{project.solution}</p>
          </div>

          <div className="card project-info-card">
            <h2>{t.projects.detail.architecture}</h2>
            <p>{project.architecture}</p>
          </div>

          <div className="card project-info-card">
            <h2>{t.projects.detail.technologies}</h2>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.gallery.length > 0 && (
            <div className="project-info-card">
              <h2>{t.projects.detail.gallery}</h2>

              <ProjectGallery images={project.gallery} title={project.title} />
            </div>
          )}

          {project.relatedPostSlug && (
            <div className="card project-info-card">
              <h2>{t.projects.detail.relatedCaseStudy}</h2>

              <p>{t.projects.detail.relatedCaseStudyDescription}</p>

              <Link
                href={`/blog/${project.relatedPostSlug}`}
                className="btn btn-primary"
              >
                {t.common.actions.readCaseStudy}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
