import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="eyebrow">Olá, eu sou</span>

          <h1>
            Geovana <span className="gradient-text">Mendes</span>
          </h1>

          <p>
            Desenvolvedora focada em backend, arquitetura de soluções,
            automação de processos e tecnologia aplicada a negócios.
          </p>

          <div className="hero-actions">
            <Link href="/projetos" className="btn btn-primary">
              Ver projetos
            </Link>

            <Link href="/contato" className="btn btn-secondary">
              Falar comigo
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-glow" />

          <div className="hero-image-card">
            <Image
              src="/images/profile/silhouette.png"
              alt="Silhueta temporária de Geovana Mendes"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}