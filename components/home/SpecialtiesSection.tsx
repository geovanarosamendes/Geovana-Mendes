"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function SpecialtiesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.home.specialties.badge}</span>
          <h2>{t.home.specialties.title}</h2>
        </div>

        <div className="specialties-grid">
          {t.home.specialties.items.map((item) => (
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
