"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function CapacitacaoDetailPage() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language];

  const capacitacao = t.training.items.find((item) => item.slug === params.slug);

  if (!capacitacao) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container capacitacao-detail">
        <Link href="/capacitacoes" className="back-link">
          ← {t.common.actions.backToTraining}
        </Link>

        <article className="card capacitacao-detail-card">
          <div className="blog-card-header">
            <span className="project-category">{capacitacao.category}</span>
            <span className="project-subcategory">
              {capacitacao.subcategory}
            </span>
          </div>

          <h1>{capacitacao.title}</h1>

          <span className="capacitacao-institution">
            {capacitacao.institution}
          </span>

          <p>{capacitacao.description}</p>

          <div className="project-tags">
            <span className="badge">{capacitacao.status}</span>
          </div>
        </article>
      </div>
    </section>
  );
}
