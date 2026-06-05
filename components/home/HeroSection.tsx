"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero-section hero-background">
      <div className="hero-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">{t.home.hero.badge}</span>

          <h1>
            Geovana <span>Mendes</span>
          </h1>

          <p>{t.home.hero.subtitle}</p>

          <div className="hero-actions">
            <Link href="/projetos" className="btn btn-primary">
              {t.home.hero.primaryButton}
            </Link>

            <Link href="/contato" className="btn btn-secondary">
              {t.home.hero.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}