"use client";

import CapacitationFilter from "@/components/capacitacoes/CapacitationFilter";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function CapacitacoesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container capacitacoes-page">
        <div className="section-heading">
          <span className="eyebrow">{t.training.page.badge}</span>
          <h1>{t.training.page.title}</h1>
          <p>{t.training.page.description}</p>
        </div>

        <div className="bio-card card">
          <h2>{t.training.bio.title}</h2>
          <p>{t.training.bio.description}</p>
        </div>

        <CapacitationFilter />
      </div>
    </section>
  );
}
