"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="eyebrow">{t.home.hero.badge}</span>

          <h1>
            Geovana <span className="gradient-text">Mendes</span>
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

        <div className="hero-image-wrapper">
          <div className="hero-glow" />

          <div className="hero-image-card">
            <Image
              src="/images/profile/silhouette.png"
              alt={t.home.hero.imageAlt}
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
