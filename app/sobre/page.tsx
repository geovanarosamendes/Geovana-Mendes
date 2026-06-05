"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container about-page">
        <div className="section-heading">
          <span className="eyebrow">{t.about.page.badge}</span>
          <h1>{t.about.page.title}</h1>
          <p>{t.about.page.description}</p>
        </div>

        <div className="about-grid">
          {t.about.cards.map((card) => (
            <div key={card.title} className="card about-card">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
