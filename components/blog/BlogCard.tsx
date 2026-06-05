"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

type BlogPost = (typeof translations)["en-US"]["blog"]["posts"][number];

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <article className="card card-hover blog-card">
      <div className="blog-card-header">
        <span className="project-category">{post.category}</span>
        <span className="project-subcategory">{post.subcategory}</span>
      </div>

      <h3>{post.title}</h3>

      <p>{post.description}</p>

      <div className="blog-card-footer">
        <span>{post.readTime}</span>
        <Link href={`/blog/${post.slug}`}>{t.blog.card.readArticle} →</Link>
      </div>
    </article>
  );
}
