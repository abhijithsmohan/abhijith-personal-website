import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getKnowledgeArticleBySlug, getKnowledgeArticles, getProjectBySlug } from "@/lib/content";
import type { KnowledgeArticle, Project } from "@/types/content";
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
    title: article.title,
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
    article: article,
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
            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              {article.category && (
                <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#6366F1] uppercase tracking-wider">
                  {article.category}
                </span>
              )}
              {article.contentType && (
                <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#94A3B8] uppercase tracking-wider">
                  {article.contentType}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              {article.title}
            </h1>

            <p className="mt-4 text-lg text-[#94A3B8] leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#64748B] font-mono border-t border-[#1E2433] pt-6">
              {article.author && (
                <span className="font-semibold text-[#94A3B8]">
                  By {article.author}
                </span>
              )}
              <span>•</span>
              <span>Published: {article.publishedAt}</span>
              {article.updatedAt && article.updatedAt !== article.publishedAt && (
                <>
                  <span>•</span>
                  <span>Updated: {article.updatedAt}</span>
                </>
              )}
              <span>•</span>
              <span>{article.readingTimeMinutes} min read</span>
            </div>

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
            {article.keyTakeaway && (
              <div className="rounded-xl border border-[#6366F1]/30 bg-gradient-to-r from-[#6366F1]/10 to-transparent p-6 mb-8">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6366F1] mb-2">Key Takeaway</p>
                <p className="text-base font-medium text-[#F8FAFC] m-0">{article.keyTakeaway}</p>
              </div>
            )}

            {article.content ? (
              article.content
                .split(/\n\n+/)
                .map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))
            ) : (
              <p>{article.excerpt}</p>
            )}

            {article.sources && article.sources.length > 0 && (
              <div className="mt-12 pt-6 border-t border-[#1E2433]">
                <h3 className="text-sm font-bold text-[#F8FAFC] mb-3">Sources & References</h3>
                <ul className="space-y-2">
                  {article.sources.map((source, idx) => (
                    <li key={idx} className="text-xs text-[#94A3B8]">
                      {source.url ? (
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#6366F1] transition-colors underline decoration-[#1E2433] underline-offset-4">
                          {source.title}
                        </a>
                      ) : (
                        <span>{source.title}</span>
                      )}
                      {source.author && <span className="ml-1 text-[#64748B]">— {source.author}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Contextual CTA */}
          {article.cta && (
            <div className="mt-16 rounded-xl border border-[#1E2433] bg-[#12151E] p-8 text-center space-y-4">
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                {article.cta.label}
              </h3>
              {article.cta.description && (
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                  {article.cta.description}
                </p>
              )}
              <div className="pt-4">
                <Link
                  href={article.cta.href}
                  className="inline-flex items-center justify-center rounded-md bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4F46E5] transition-colors"
                >
                  {article.cta.label}
                </Link>
              </div>
            </div>
          )}

          {/* Related Content Container */}
          <div className="mt-16 space-y-12">
            {/* Related Projects */}
            {article.relatedProjectSlugs && article.relatedProjectSlugs.length > 0 && (
              <section className="space-y-6 border-t border-[#1E2433] pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  Applied Work & Projects
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {article.relatedProjectSlugs
                    .map((slug) => getProjectBySlug(slug))
                    .filter((project): project is Project => project !== undefined)
                    .map((project: Project) => (
                      <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="group flex flex-col justify-between rounded-xl border border-[#1E2433] bg-[#12151E] p-5 transition-colors hover:border-[#333E56]"
                      >
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#6366F1] mb-2">
                            {project.roleType}
                          </p>
                          <h3 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors line-clamp-2">
                            {project.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-xs font-semibold text-[#64748B] group-hover:text-[#94A3B8] transition-colors flex items-center gap-1">
                          View Case Study <span aria-hidden="true">&rarr;</span>
                        </p>
                      </Link>
                    ))}
                </div>
              </section>
            )}

            {/* Related Articles */}
            {article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0 && (
              <section className="space-y-6 border-t border-[#1E2433] pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  Related Knowledge
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {article.relatedArticleSlugs
                    .map((slug) => getKnowledgeArticleBySlug(slug))
                    .filter((a): a is KnowledgeArticle => a !== undefined && a.status === "published")
                    .map((related: KnowledgeArticle) => (
                      <Link
                        key={related.id}
                        href={`/knowledge/${related.slug}`}
                        className="group flex flex-col justify-between rounded-xl border border-[#1E2433] bg-[#12151E] p-5 transition-colors hover:border-[#333E56]"
                      >
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#6366F1] mb-2">
                            {related.category}
                          </p>
                          <h3 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-xs font-semibold text-[#64748B] group-hover:text-[#94A3B8] transition-colors flex items-center gap-1">
                          Read <span aria-hidden="true">&rarr;</span>
                        </p>
                      </Link>
                    ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
