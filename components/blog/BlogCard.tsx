import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  readTime: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  category,
  subcategory,
  readTime,
}: BlogCardProps) {
  return (
    <article className="card card-hover blog-card">
      <div className="blog-card-header">
        <span className="project-category">{category}</span>
        <span className="project-subcategory">{subcategory}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="blog-card-footer">
        <span>{readTime}</span>
        <Link href={`/blog/${slug}`}>Ler artigo →</Link>
      </div>
    </article>
  );
}