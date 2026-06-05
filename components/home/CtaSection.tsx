"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function CtaSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section-sm">
      <div className="container">
        <div className="cta-card">
          <span className="eyebrow">{t.home.cta.badge}</span>

          <h2>{t.home.cta.title}</h2>

          <p>{t.home.cta.description}</p>

          <div className="cta-actions">
            <Link href="/contato" className="btn btn-primary">
              {t.home.cta.primaryButton}
            </Link>

            <Link href="/projetos" className="btn btn-secondary">
              {t.home.cta.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
