import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { KnowledgeList } from "@/components/knowledge/knowledge-list";
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

          {/* Interactive Knowledge List */}
          <KnowledgeList articles={articles} categories={categories} />
        </div>
      </Container>
    </div>
  );
}
