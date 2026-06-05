"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container contact-page">
        <div className="section-heading">
          <span className="eyebrow">{t.contact.page.badge}</span>
          <h1>{t.contact.page.title}</h1>
          <p>{t.contact.page.description}</p>
        </div>

        <div className="contact-grid">
          <a
            href="mailto:geovanarosamendes@gmail.com"
            className="card card-hover contact-card"
          >
            <span>{t.contact.cards.email}</span>
            <strong>geovanarosamendes@gmail.com</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/geovana-mendes-456a97242"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover contact-card"
          >
            <span>{t.contact.cards.linkedin}</span>
            <strong>Geovana Mendes</strong>
          </a>

          <a
            href="https://github.com/geovanarosamendes"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover contact-card"
          >
            <span>{t.contact.cards.github}</span>
            <strong>@geovanarosamendes</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
