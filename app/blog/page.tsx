"use client";

import BlogFilter from "@/components/blog/BlogFilter";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function BlogPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container blog-page">
        <div className="section-heading">
          <span className="eyebrow">{t.blog.page.badge}</span>
          <h1>{t.blog.page.title}</h1>
          <p>{t.blog.page.description}</p>
        </div>

        <BlogFilter />
      </div>
    </section>
  );
}
