import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getKnowledgeArticles } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Knowledge & Writing",
  description:
    "Long-term essays, operational frameworks, and learning notes on Business, Marketing, AI, Technology, and Systems.",
  openGraph: {
    title: "Knowledge & Writing",
    description:
      "Long-term essays, operational frameworks, and learning notes on Business, Marketing, AI, Technology, and Systems.",
    url: "https://abhijithsmohan.in/knowledge",
  },
  alternates: {
    canonical: getCanonicalUrl("/knowledge"),
  },
};

export default function KnowledgePage() {
  const articles = getKnowledgeArticles();

  const jsonLdGraph = generatePageGraph({
    path: "/knowledge",
    title: "Knowledge & Writing",
    description:
      "Long-term essays, operational frameworks, and learning notes on Business, Marketing, AI, Technology, and Systems.",
  });

  const categories = [
    { name: "Business", description: "Business models, opportunity framing, and venture execution." },
    { name: "Marketing", description: "Digital growth, brand operations, and channel strategy." },
    { name: "AI", description: "Practical AI workflows, automation, and intelligent tools." },
    { name: "Technology", description: "Digital infrastructure, modern web architecture, and software." },
    { name: "Systems", description: "Process design, operational frameworks, and workflow optimization." },
  ];

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        {/* Header */}
        <header className="mb-16 border-b border-[#1E2433] pb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
            Writing &amp; Thinking
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
            Knowledge
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#94A3B8]">
            Long-term essays, operational frameworks, and structured learning notes on marketing, technology, and business integration.
          </p>
        </header>

        <div className="space-y-16">
          {/* Categories Overview */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC]">
              Core Knowledge Domains
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-[#1E2433] bg-[#12151E] p-4 transition-colors hover:border-[#333E56]"
                >
                  <h3 className="text-sm font-bold text-[#F8FAFC]">{cat.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Articles Listing or Editorial Empty State */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC]">
              Published Essays &amp; Notes
            </h2>

            {articles.length > 0 ? (
              <div className="space-y-6">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                  >
                    <div className="flex items-center justify-between text-xs text-[#64748B]">
                      <span>{article.publishedAt}</span>
                      <span>{article.readingTimeMinutes} min read</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-[#F8FAFC]">
                      <Link
                        href={`/knowledge/${article.slug}`}
                        className="hover:text-[#6366F1] transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#1E2433]">
                      <Link
                        href={`/knowledge/${article.slug}`}
                        className="text-xs font-semibold text-[#6366F1] hover:underline"
                      >
                        Read Article &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/50 p-12 text-center">
                <div className="mx-auto max-w-md space-y-3">
                  <p className="text-sm font-semibold text-[#F8FAFC]">
                    Essays &amp; Writing In Compilation
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Long-form essays and operational frameworks across Marketing, AI, Technology, and Business Systems are currently being authored and verified. Check back soon for initial releases.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/topics"
                      className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
                    >
                      Explore Topic Taxonomy &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </Container>
    </div>
  );
}
