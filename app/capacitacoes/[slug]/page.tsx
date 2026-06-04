import { capacitacoes } from "@/data/capacitacoes";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CapacitacaoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CapacitacaoDetailPage({
  params,
}: CapacitacaoPageProps) {
  const { slug } = await params;

  const capacitacao = capacitacoes.find((item) => item.slug === slug);

  if (!capacitacao) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container capacitacao-detail">
        <Link href="/capacitacoes" className="back-link">
          ← Voltar para capacitações
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