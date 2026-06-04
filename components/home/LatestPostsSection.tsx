import { posts } from "@/data/posts";
import BlogCard from "@/components/blog/BlogCard";

export default function LatestPostsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Blog</span>
          <h2>Últimos artigos e aprendizados</h2>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}