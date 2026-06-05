"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language];

  const post = t.blog.posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container blog-detail">
        <Link href="/blog" className="back-link">
          ← {t.blog.detail.back}
        </Link>

        <article className="blog-article">
          <span className="badge">{post.category}</span>

          <h1>{post.title}</h1>

          <p className="blog-article-description">{post.description}</p>

          <span className="blog-read-time">{post.readTime}</span>

          <div className="blog-article-content card">
            <p>{t.blog.detail.underConstruction}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
