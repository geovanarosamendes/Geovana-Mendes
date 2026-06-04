import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div>
            <h3 className="footer-logo">
              <span className="gradient-text">Geovana</span> Mendes
            </h3>

            <p className="footer-description">
              Desenvolvedora focada em backend, arquitetura de soluções,
              automação de processos e tecnologia aplicada a negócios.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Navegação</h4>

            <div className="footer-links">
              <Link href="/">Início</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/capacitacoes">Capacitações</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Conecte-se</h4>

            <div className="footer-socials">

              <a
                href="https://github.com/geovanarosamendes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/geovana-mendes-456a97242"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a href="mailto:geovanarosamendes@gmail.com">
                <MdEmail size={18} />
                E-mail
              </a>

            </div>
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Geovana Mendes.
            Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}