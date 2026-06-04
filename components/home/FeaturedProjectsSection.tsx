import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjectsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Portfólio</span>

          <h2>Projetos em destaque</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
               key={project.slug} {...project}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl} slug={""}            />
          ))}
        </div>
      </div>
    </section>
  );
}