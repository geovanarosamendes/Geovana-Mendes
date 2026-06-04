import BlogFilter from "@/components/blog/BlogFilter";

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container blog-page">
        <div className="section-heading">
          <span className="eyebrow">Blog</span>
          <h1>Artigos e aprendizados</h1>
          <p>
            Experiências, estudos e reflexões sobre desenvolvimento de software,
            arquitetura, automação, IA e tecnologia aplicada a negócios.
          </p>
        </div>

        <BlogFilter />
      </div>
    </section>
  );
}