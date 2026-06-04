const specialties = [
  {
    title: "Arquitetura de Soluções",
    description:
      "Estruturação de sistemas escaláveis, organizados e preparados para evoluir com o negócio.",
  },
  {
    title: "Automação",
    description:
      "Criação de soluções para reduzir tarefas manuais, integrar processos e aumentar produtividade.",
  },
  {
    title: "Backend & APIs",
    description:
      "Desenvolvimento de APIs robustas, seguras e performáticas com foco em regras de negócio.",
  },
  {
    title: "Dados & IA",
    description:
      "Uso estratégico de dados, automações inteligentes e IA para apoiar decisões e processos.",
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">O que eu faço</span>
          <h2>Especialidades que conectam tecnologia e negócio</h2>
        </div>

        <div className="specialties-grid">
          {specialties.map((item) => (
            <article key={item.title} className="card card-hover specialty-card">
              <div className="specialty-icon">✦</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}