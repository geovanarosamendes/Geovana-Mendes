import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container project-detail">
        <Link href="/projetos" className="back-link">
          ← Voltar para projetos
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
                <Link href={project.demoUrl} target="_blank" className="btn btn-primary">
                  Ver online
                </Link>
              )}

              <Link href={project.githubUrl} target="_blank" className="btn btn-secondary">
                Ver código
              </Link>
            </div>
          </div>
        </div>

        <div className="project-detail-sections">
          <div className="card project-info-card">
            <h2>Visão geral</h2>
            <p>{project.overview}</p>
          </div>

          <div className="card project-info-card">
            <h2>Problema</h2>
            <p>{project.problem}</p>
          </div>

          <div className="card project-info-card">
            <h2>Solução</h2>
            <p>{project.solution}</p>
          </div>

          <div className="card project-info-card">
            <h2>Arquitetura</h2>
            <p>{project.architecture}</p>
          </div>

          <div className="card project-info-card">
            <h2>Tecnologias utilizadas</h2>

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
              <h2>Galeria</h2>

              <ProjectGallery images={project.gallery} title={project.title} />
            </div>
          )}

          {project.relatedPostSlug && (
            <div className="card project-info-card">
              <h2>Estudo de caso relacionado</h2>

              <p>
                Leia também o artigo técnico relacionado a este projeto, com mais
                detalhes sobre decisões, desafios e aprendizados.
              </p>

              <Link
                href={`/blog/${project.relatedPostSlug}`}
                className="btn btn-primary"
              >
                Ler estudo de caso
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}