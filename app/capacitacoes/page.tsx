import CapacitationFilter from "@/components/capacitacoes/CapacitationFilter";

export default function CapacitacoesPage() {
  return (
    <section className="section">
      <div className="container capacitacoes-page">
        <div className="section-heading">
          <span className="eyebrow">Capacitações</span>

          <h1>Formação, cursos e evolução profissional</h1>

          <p>
            Minha jornada combina formação acadêmica em tecnologia, estudos
            contínuos em desenvolvimento de software, banco de dados, backend,
            dados e práticas de gestão.
          </p>
        </div>

        <div className="bio-card card">
          <h2>Formação acadêmica</h2>

          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em
            desenvolvimento web, backend, arquitetura de soluções, banco de
            dados, automações e tecnologia aplicada a negócios.
          </p>
        </div>

        <CapacitationFilter />
      </div>
    </section>
  );
}