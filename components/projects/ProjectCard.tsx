import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  technologies: string[];
  githubUrl: string;
}

export default function ProjectCard({
  slug,
  title,
  description,
  category,
  subcategory,
  technologies,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="card card-hover project-card">
      <div className="project-image-placeholder" />

      <div className="project-header">
        <span className="project-category">
          {category}
        </span>

        <span className="project-subcategory">
          {subcategory}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-tags">
        {technologies.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <Link href={`/projetos/${slug}`}>
          Ver detalhes →
        </Link>

        <Link href={githubUrl} target="_blank">
          GitHub →
        </Link>
      </div>
    </article>
  );
}