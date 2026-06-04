import ProjectsFilter from "@/components/projects/ProjectsFilter";

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Portfólio</span>
          <h1>Projetos desenvolvidos</h1>
          <p>
            Uma seleção de projetos que mostram minha experiência com backend,
            automação, integrações, arquitetura e tecnologia aplicada a negócios.
          </p>
        </div>

        <ProjectsFilter />
      </div>
    </section>
  );
}