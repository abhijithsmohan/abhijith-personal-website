import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import {
  getKnowledgeByTopic,
  getProjectsByTopic,
  getTopicBySlug,
  getTopics,
} from "@/lib/content";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

interface TopicPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const topics = getTopics();
  return topics.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return {
      title: "Topic Not Found",
    };
  }

  const canonicalUrl = getCanonicalUrl(`/topics/${topic.slug}`);

  return {
    title: `${topic.name} | Topics`,
    description: topic.description,
    openGraph: {
      title: `${topic.name}`,
      description: topic.description,
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function TopicDetailPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const jsonLdGraph = generatePageGraph({
    path: `/topics/${topic.slug}`,
    title: topic.name,
    description: topic.description,
  });

  const relatedProjects = getProjectsByTopic(slug);
  const relatedKnowledge = getKnowledgeByTopic(slug);

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/topics"
            className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
          >
            &larr; Back to topic taxonomy
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16 border-b border-[#1E2433] pb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
            Topic Hub
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
            {topic.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#94A3B8]">
            {topic.description}
          </p>
        </header>

        <div className="space-y-16">
          {/* Section 1: Associated Projects & Experiments */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Related Projects &amp; Experiments
              </h2>
              <span className="text-xs text-[#64748B] font-mono">
                {relatedProjects.length} records
              </span>
            </div>

            {relatedProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {relatedProjects.map((project) => (
                  <article
                    key={project.id}
                    className="flex flex-col justify-between rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
                        <span className="rounded bg-[#1A1E2B] px-2 py-0.5 font-medium text-[#6366F1]">
                          {project.projectType}
                        </span>
                        <span className="font-mono">{project.timeframe.start}</span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-[#F8FAFC]">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:text-[#6366F1] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-xs font-medium text-[#94A3B8]">
                        Role: {project.role}
                      </p>

                      <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#1E2433] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 2).map((t, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-[#1A1E2B] px-2 py-0.5 text-[10px] text-[#94A3B8]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-xs font-semibold text-[#6366F1] hover:underline"
                      >
                        View Project &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/50 p-12 text-center">
                <p className="text-sm text-[#94A3B8]">
                  No projects associated with this topic yet.
                </p>
              </div>
            )}
          </section>

          {/* Section 2: Associated Knowledge Articles */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Related Knowledge &amp; Essays
              </h2>
              <span className="text-xs text-[#64748B] font-mono">
                {relatedKnowledge.length} articles
              </span>
            </div>

            {relatedKnowledge.length > 0 ? (
              <div className="space-y-4">
                {relatedKnowledge.map((article) => (
                  <article
                    key={article.id}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                  >
                    <h3 className="text-lg font-bold text-[#F8FAFC]">
                      <Link
                        href={`/knowledge/${article.slug}`}
                        className="hover:text-[#6366F1] transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-[#94A3B8]">
                      {article.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/50 p-12 text-center">
                <p className="text-sm text-[#94A3B8]">
                  Knowledge articles for &quot;{topic.name}&quot; are currently in compilation.
                </p>
              </div>
            )}
          </section>
        </div>
      </Container>
    </div>
  );
}
