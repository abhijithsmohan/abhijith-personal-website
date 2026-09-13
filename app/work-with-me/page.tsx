import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Engagement gateway for digital marketing strategy, AI workflow integration, web development project leadership, and strategic collaboration.",
  openGraph: {
    title: "Work With Me",
    description:
      "Engagement gateway for digital marketing strategy, AI workflow integration, web development project leadership, and strategic collaboration.",
    url: "https://abhijithsmohan.in/work-with-me",
  },
  alternates: {
    canonical: getCanonicalUrl("/work-with-me"),
  },
};

const engagementPaths = [
  {
    title: "Marketing & Growth",
    description:
      "Social media operations, content strategy frameworks, brand revival workflows, and multi-channel campaign planning.",
  },
  {
    title: "AI & Business Integration",
    description:
      "AI-assisted media workflows, creative production automation, and integrating intelligent tools into team operations.",
  },
  {
    title: "Digital & Technology Building",
    description:
      "Website project management, technical requirements scoping, IT team leadership, and e-commerce storefront builds.",
  },
  {
    title: "Strategy & Advisory",
    description:
      "Market research analysis, digital positioning, data-driven campaign evaluation, and business model exploration.",
  },
  {
    title: "Partnerships & Collaborations",
    description:
      "Cultural event initiatives, community projects (Live by ONC), and joint digital venture exploration.",
  },
  {
    title: "Other Inquiries",
    description:
      "Custom consultations, speaking, industrial training discussions, or general advisory conversations.",
  },
];

export default function WorkWithMePage() {
  const jsonLdGraph = generatePageGraph({
    path: "/work-with-me",
    title: "Work With Me",
    description:
      "Engagement gateway for digital marketing strategy, AI workflow integration, web development project leadership, and strategic collaboration.",
  });

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        {/* Header */}
        <header className="mb-16 border-b border-[#1E2433] pb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
            Opportunity Gateway
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
            Work With Me
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#94A3B8]">
            Collaborate on digital marketing, AI workflow integration, web project execution, or strategic venture initiatives.
          </p>
        </header>

        <div className="space-y-16">
          {/* Engagement Paths */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Engagement Paths
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Key areas where I contribute strategic and operational value.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {engagementPaths.map((path, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                >
                  <span className="text-xs font-mono text-[#6366F1]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#F8FAFC]">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                    {path.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Alignment & Working Process */}
          <section className="space-y-8 rounded-xl border border-[#1E2433] bg-[#12151E] p-8 md:p-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Working Philosophy &amp; Alignment
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                What to expect when collaborating with me.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[#F8FAFC]">
                  1. Execution Clarity
                </h3>
                <p className="text-xs leading-relaxed text-[#94A3B8]">
                  Clear scope definition, transparent role boundaries, and milestone tracking without ambiguity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[#F8FAFC]">
                  2. Systems-First Approach
                </h3>
                <p className="text-xs leading-relaxed text-[#94A3B8]">
                  Building repeatable frameworks and workflows rather than isolated one-off tasks.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[#F8FAFC]">
                  3. Evidence &amp; Integrity
                </h3>
                <p className="text-xs leading-relaxed text-[#94A3B8]">
                  Grounded claim reporting, realistic budget execution, and direct communication.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Guidance */}
          <section className="rounded-xl border border-[#1E2433] bg-gradient-to-br from-[#12151E] to-[#1A1E2B] p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-[#F8FAFC]">
              Initiate a Conversation
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#94A3B8]">
              Reach out via primary professional channels or social profiles to discuss project scope, advisory needs, or collaboration.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://defineperspective.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[#6366F1] px-6 text-xs font-semibold text-[#F8FAFC] transition-colors hover:bg-[#818CF8]"
              >
                Define Perspective
              </a>
              <a
                href="https://www.instagram.com/defineperspective/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-[#1E2433] bg-[#12151E] px-6 text-xs font-semibold text-[#F8FAFC] transition-colors hover:border-[#333E56] hover:bg-[#1A1E2B]"
              >
                Instagram
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
