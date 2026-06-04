import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="cta-card">
          <span className="eyebrow">Vamos construir algo?</span>

          <h2>Tem uma ideia, projeto ou oportunidade?</h2>

          <p>
            Estou aberta a projetos, parcerias e oportunidades onde tecnologia,
            automação e estratégia possam gerar valor real.
          </p>

          <div className="cta-actions">
            <Link href="/contato" className="btn btn-primary">
              Entrar em contato
            </Link>

            <Link href="/projetos" className="btn btn-secondary">
              Ver portfólio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}