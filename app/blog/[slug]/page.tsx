import { posts } from "@/data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container blog-detail">
        <Link href="/blog" className="back-link">
          ← Voltar para o blog
        </Link>

        <article className="blog-article">
          <span className="badge">{post.category}</span>

          <h1>{post.title}</h1>

          <p className="blog-article-description">{post.description}</p>

          <span className="blog-read-time">{post.readTime}</span>

          <div className="blog-article-content card">
            <p>
              Este artigo ainda está em construção. Em breve, este espaço terá
              o conteúdo completo com explicações, exemplos práticos e
              aprendizados do projeto.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}