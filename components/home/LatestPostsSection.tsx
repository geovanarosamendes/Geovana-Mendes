"use client";

import BlogCard from "@/components/blog/BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function LatestPostsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.home.latestPosts.badge}</span>
          <h2>{t.home.latestPosts.title}</h2>
        </div>

        <div className="blog-grid">
          {t.blog.posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
