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

        <div className="section-heading">
          <span className="eyebrow">Projeto</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>

        <div className="project-detail-card card">
          <h2>Tecnologias utilizadas</h2>

          <div className="project-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>

          <Link href={project.githubUrl} target="_blank" className="btn btn-primary">
            Ver no GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}