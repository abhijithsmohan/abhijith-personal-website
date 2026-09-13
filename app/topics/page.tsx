import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getProjectsByTopic, getTopics } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Topic Taxonomy",
  description:
    "Explore projects, experiments, and knowledge aggregated by core topics: Marketing & Growth, AI & Business Integration, Technology & Digital Building, and Business Strategy.",
  openGraph: {
    title: "Topic Taxonomy",
    description:
      "Explore projects, experiments, and knowledge aggregated by core topics: Marketing & Growth, AI & Business Integration, Technology & Digital Building, and Business Strategy.",
    url: "https://abhijithsmohan.in/topics",
  },
  alternates: {
    canonical: getCanonicalUrl("/topics"),
  },
};

export default function TopicsPage() {
  const topics = getTopics();

  const jsonLdGraph = generatePageGraph({
    path: "/topics",
    title: "Topic Taxonomy",
    description:
      "Explore projects, experiments, and knowledge aggregated by core topics: Marketing & Growth, AI & Business Integration, Technology & Digital Building, and Business Strategy.",
  });

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        {/* Page Header */}
        <header className="mb-16 border-b border-[#1E2433] pb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
            Content Architecture
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
            Topic Taxonomy
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#94A3B8]">
            Topic clusters connecting client projects, research studies, digital experiments, and long-term thinking.
          </p>
        </header>

        {/* Topics Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {topics.map((topic) => {
            const relatedProjects = getProjectsByTopic(topic.slug);

            return (
              <div
                key={topic.id}
                className="flex flex-col justify-between rounded-xl border border-[#1E2433] bg-[#12151E] p-6 md:p-8 transition-colors hover:border-[#333E56]"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
                    <span className="uppercase tracking-wider font-semibold text-[#6366F1]">
                      {topic.capabilityCategory}
                    </span>
                    <span>{relatedProjects.length} Related Projects</span>
                  </div>

                  <h2 className="mt-3 text-xl font-bold text-[#F8FAFC]">
                    <Link
                      href={`/topics/${topic.slug}`}
                      className="hover:text-[#6366F1] transition-colors"
                    >
                      {topic.name}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                    {topic.description}
                  </p>

                  {/* Associated Projects Preview */}
                  {relatedProjects.length > 0 && (
                    <div className="mt-6 border-t border-[#1E2433] pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                        Associated Work:
                      </p>
                      <ul className="mt-2 space-y-1.5 text-xs text-[#94A3B8]">
                        {relatedProjects.map((p) => (
                          <li key={p.id} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#6366F1]" />
                            <Link
                              href={`/projects/${p.slug}`}
                              className="hover:underline hover:text-[#F8FAFC]"
                            >
                              {p.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E2433]">
                  <Link
                    href={`/topics/${topic.slug}`}
                    className="text-xs font-semibold text-[#6366F1] hover:underline"
                  >
                    View Topic Hub &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
