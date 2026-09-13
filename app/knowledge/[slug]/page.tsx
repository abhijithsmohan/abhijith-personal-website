import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getKnowledgeArticleBySlug, getKnowledgeArticles } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

interface KnowledgeArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getKnowledgeArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: KnowledgeArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const canonicalUrl = getCanonicalUrl(`/knowledge/${article.slug}`);

  return {
    title: `${article.title} | Knowledge`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title}`,
      description: article.excerpt,
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function KnowledgeArticlePage({
  params,
}: KnowledgeArticlePageProps) {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLdGraph = generatePageGraph({
    path: `/knowledge/${article.slug}`,
    title: article.title,
    description: article.excerpt,
  });

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/knowledge"
              className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
            >
              &larr; Back to all knowledge articles
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12 border-b border-[#1E2433] pb-8">
            <div className="flex items-center gap-3 text-xs text-[#64748B] font-mono">
              <span>Published: {article.publishedAt}</span>
              <span>•</span>
              <span>{article.readingTimeMinutes} min read</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              {article.title}
            </h1>

            <p className="mt-4 text-lg text-[#94A3B8] leading-relaxed">
              {article.excerpt}
            </p>

            {article.topics && article.topics.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {article.topics.map((t) => (
                  <Link
                    key={t.id}
                    href={`/topics/${t.slug}`}
                    className="rounded bg-[#1A1E2B] px-2.5 py-1 text-xs font-medium text-[#6366F1] hover:underline"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Article Body */}
          <article className="prose prose-invert max-w-none text-[#94A3B8] leading-relaxed space-y-6">
            {article.content ? (
              article.content
                .split(/\n\n+/)
                .map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))
            ) : (
              <p>{article.excerpt}</p>
            )}
          </article>
        </div>
      </Container>
    </div>
  );
}
