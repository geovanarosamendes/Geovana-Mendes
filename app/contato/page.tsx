export default function ContactPage() {
  return (
    <section className="section">
      <div className="container contact-page">
        <div className="section-heading">
          <span className="eyebrow">Contato</span>
          <h1>Vamos conversar?</h1>
          <p>
            Estou aberta a oportunidades, projetos, parcerias e conversas sobre
            tecnologia, automação, backend e soluções digitais.
          </p>
        </div>

        <div className="contact-grid">
          <a
            href="mailto:geovanarosamendes@gmail.com"
            className="card card-hover contact-card"
          >
            <span>E-mail</span>
            <strong>geovanarosamendes@gmail.com</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/geovana-mendes-456a97242"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover contact-card"
          >
            <span>LinkedIn</span>
            <strong>Geovana Mendes</strong>
          </a>

          <a
            href="https://github.com/geovanarosamendes"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover contact-card"
          >
            <span>GitHub</span>
            <strong>@geovanarosamendes</strong>
          </a>
        </div>
      </div>
    </section>
  );
}