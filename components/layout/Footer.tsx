"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const menuItems = [
    { label: t.common.menu.home, href: "/" },
    { label: t.common.menu.projects, href: "/projetos" },
    { label: t.common.menu.blog, href: "/blog" },
    { label: t.common.menu.training, href: "/capacitacoes" },
    { label: t.common.menu.about, href: "/sobre" },
    { label: t.common.menu.contact, href: "/contato" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-logo">
              <span className="gradient-text">Geovana</span> Mendes
            </h3>

            <p className="footer-description">{t.common.footer.description}</p>
          </div>

          <div>
            <h4 className="footer-title">{t.common.footer.navigation}</h4>

            <div className="footer-links">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-title">{t.common.footer.connect}</h4>

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
            © {new Date().getFullYear()} Geovana Mendes. {t.common.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
