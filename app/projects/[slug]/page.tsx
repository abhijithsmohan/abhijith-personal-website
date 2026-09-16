import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getProjects, getKnowledgeArticleBySlug } from "@/lib/content";
import type { KnowledgeArticle, Project } from "@/types/content";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const canonicalUrl = getCanonicalUrl(`/projects/${project.slug}`);

  // Custom SEO titles and descriptions for flagship case studies
  if (project.slug === "planet-jewel") {
    return {
      title: "Planet Jewel — Digital Marketing Case Study",
      description:
        "A case study of Abhijith S Mohan's work as a Digital Promoter at Planet Jewel across digital marketing, content, photography, video, campaigns and customer-facing digital activity.",
      openGraph: {
        title: "Planet Jewel — Digital Marketing Case Study",
        description:
          "A case study of Abhijith S Mohan's work as a Digital Promoter at Planet Jewel across digital marketing, content, photography, video, campaigns and customer-facing digital activity.",
        url: canonicalUrl,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  if (project.slug === "live-by-onc") {
    return {
      title: "Live by ONC — Community & Cultural Initiative",
      description:
        "A case study of Abhijith S Mohan's role as a co-founder and founding member of Live by ONC, a community and cultural initiative in Thiruvananthapuram.",
      openGraph: {
        title: "Live by ONC — Community & Cultural Initiative",
        description:
          "A case study of Abhijith S Mohan's role as a co-founder and founding member of Live by ONC, a community and cultural initiative in Thiruvananthapuram.",
        url: canonicalUrl,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  if (project.slug === "dp-ai-labs") {
    return {
      title: "DP AI Labs — Technology & AI Leadership",
      description:
        "An ongoing case study of Abhijith S Mohan's work as IT Team Lead and Project Manager at DP AI Labs across technology projects, team coordination and digital product exploration.",
      openGraph: {
        title: "DP AI Labs — Technology & AI Leadership",
        description:
          "An ongoing case study of Abhijith S Mohan's work as IT Team Lead and Project Manager at DP AI Labs across technology projects, team coordination and digital product exploration.",
        url: canonicalUrl,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  if (project.slug === "tohva") {
    return {
      title: "TOHVA — Natural Stone Jewellery",
      description:
        "A case study of Abhijith S Mohan's work as Project Coordinator on TOHVA, combining AI-assisted product photography, creative coordination and commercial product presentation.",
      openGraph: {
        title: "TOHVA — Natural Stone Jewellery",
        description:
          "A case study of Abhijith S Mohan's work as Project Coordinator on TOHVA, combining AI-assisted product photography, creative coordination and commercial product presentation.",
        url: canonicalUrl,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  if (project.slug === "pooja-vysh-makeovers") {
    return {
      title:
        "Pooja Vysh Makeovers — Bridal Beauty Brand Strategy",
      description:
        "A case study of Abhijith S Mohan's freelance work with Pooja Vysh Makeovers, covering social media strategy, content systems, AI-assisted creative production and bridal client experience.",
      openGraph: {
        title:
          "Pooja Vysh Makeovers — Bridal Beauty Brand Strategy",
        description:
          "A case study of Abhijith S Mohan's freelance work with Pooja Vysh Makeovers, covering social media strategy, content systems, AI-assisted creative production and bridal client experience.",
        url: canonicalUrl,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  if (project.slug === "mcdonalds-digital-marketing-analysis") {
    return {
      title: "McDonald's India Digital Marketing Analysis",
      description:
        "An industrial digital marketing analysis of McDonald's India completed by Abhijith S Mohan during his Digital Marketing Internship at Plasmid, exploring localization, social media, content, influencers, digital promotions and optimization.",
      openGraph: {
        title: "McDonald's India Digital Marketing Analysis",
        description:
          "An industrial digital marketing analysis of McDonald's India completed by Abhijith S Mohan during his Digital Marketing Internship at Plasmid, exploring localization, social media, content, influencers, digital promotions and optimization.",
        url: canonicalUrl,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.shortDescription || project.tagline || project.summary,
    openGraph: {
      title: `${project.title}`,
      description: project.shortDescription || project.tagline || project.summary,
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

function RelatedKnowledgeBlock({ project }: { project: Project }) {
  if (!project.relatedKnowledgeSlugs || project.relatedKnowledgeSlugs.length === 0) return null;
  
  const relatedArticles = project.relatedKnowledgeSlugs
    .map((slug: string) => getKnowledgeArticleBySlug(slug))
    .filter((a: KnowledgeArticle | undefined) => a !== undefined && a.status === "published");

  if (relatedArticles.length === 0) return null;

  return (
    <section className="space-y-6 border-t border-[#1E2433] pt-12">
      <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
        Related Knowledge
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article: KnowledgeArticle | undefined) => {
          if (!article) return null;
          return (
            <Link
              key={article.id}
              href={`/knowledge/${article.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-[#1E2433] bg-[#12151E] p-5 transition-colors hover:border-[#333E56]"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6366F1] mb-2">
                  {article.category}
                </p>
                <h3 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </div>
              <p className="mt-4 text-xs font-semibold text-[#64748B] group-hover:text-[#94A3B8] transition-colors flex items-center gap-1">
                Read <span aria-hidden="true">&rarr;</span>
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLdGraph = generatePageGraph({
    path: `/projects/${project.slug}`,
    title: project.title,
    description: project.shortDescription || project.tagline || project.summary,
    project,
  });

  // Bespoke editorial layout for Pooja Vysh Makeovers case study
  if (project.slug === "pooja-vysh-makeovers") {
    return (
      <div className="py-16 md:py-24">
        <JsonLd schema={jsonLdGraph} />
        <Container>
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
            >
              &larr; Back to all projects
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12 border-b border-[#1E2433] pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#6366F1]">
                Freelance / Client Work
              </span>
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#94A3B8]">
                Role: Freelance
              </span>
              <span className="text-[#64748B] font-mono">
                Status: Completed Client Work
              </span>
              <span className="text-[#64748B] font-mono">
                Timeframe: June 2024 – August 2024
              </span>
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#64748B]">
                Bridal Beauty Brand · Kerala / India
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg font-medium text-[#94A3B8] leading-relaxed">
              {project.tagline}
            </p>

            <p className="mt-3 text-sm text-[#6366F1]">
              Individual Role: <strong className="font-semibold">{project.role}</strong>
            </p>
          </header>

          {/* Main Narrative Area */}
          <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
            {/* 1. OVERVIEW (Editorial text, no cards) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Overview
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
                <p>
                  Pooja Vysh Makeovers is a bridal makeup and beauty brand.
                </p>
                <p>
                  Abhijith worked as a freelance creative and marketing consultant, contributing to social media strategy, content planning, workflow development and AI-assisted creative production.
                </p>
                <p>
                  The work focused on helping structure how the brand could communicate its expertise, showcase bridal work, educate potential clients and present a more organized client experience.
                </p>
              </div>
            </section>

            {/* 2. THE CONTEXT (Editorial text + lightweight border list) */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                The Context
              </h2>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                A bridal makeup brand needs more than portfolio images. Its digital presence needs to communicate multiple dimensions of the client experience:
              </p>

              <div className="grid gap-3 sm:grid-cols-2 text-sm text-[#94A3B8] border-l-2 border-[#6366F1]/40 pl-4 py-1">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Expertise &amp; Technical Mastery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Bridal Transformation Stories</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Trust &amp; Reliability</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Preparation &amp; Guidance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Beauty Knowledge &amp; Advice</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Personality &amp; Connection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Social Proof &amp; Testimonials</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                  <span>Overall Client Experience</span>
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#94A3B8]">
                The project therefore involved building a clearer content direction and supporting creative materials around the bridal customer journey.
              </p>
            </section>

            {/* 3. STRATEGY (Social Media & Content Strategy) */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  Social Media &amp; Content Strategy
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[#94A3B8]">
                  The strategy was designed around multiple dimensions of a bridal beauty brand rather than only posting finished makeup work.
                </p>
              </div>

              {/* Process Bar */}
              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-4 text-center overflow-x-auto">
                <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm whitespace-nowrap">
                  Education <span className="text-[#6366F1]">&rarr;</span> Capability <span className="text-[#6366F1]">&rarr;</span> Connection <span className="text-[#6366F1]">&rarr;</span> Authenticity <span className="text-[#6366F1]">&rarr;</span> Trust <span className="text-[#6366F1]">&rarr;</span> Positioning <span className="text-[#6366F1]">&rarr;</span> Usefulness
                </p>
              </div>

              {/* Compact 2-Column Grid for 8 Pillars */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      1. Bridal Education
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Builds Authority
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Explaining bridal makeup longevity, skin prep advice, and trial session expectations.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      2. Skin-Finish Expertise
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Demonstrates Mastery
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Detailed breakdowns of HD/airbrush skin finishes and lighting compatibility.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      3. Bridal Portfolio
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Demonstrates Capability
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Highlighting transformation stories and bridal looks across different traditions.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      4. Personal Brand
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Creates Connection
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Artist background, philosophy, and approach to personalized client care.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      5. Behind the Scenes
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Adds Authenticity
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    On-location setup, kit preparation, and real wedding morning moments.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      6. Social Proof
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Builds Trust
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Client testimonials, bride reviews, and real event feedback.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      7. Luxury Experience
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Positioning
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Premium product breakdowns and personalized trial service experience details.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                      8. Makeup Tips
                    </h3>
                    <span className="text-[10px] font-medium text-[#94A3B8] bg-[#1A1E2B] px-2 py-0.5 rounded">
                      Useful Content
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Touch-up advice for wedding day and seasonal skincare recommendations.
                  </p>
                </div>
              </div>

              <p className="text-sm italic text-[#94A3B8]">
                Education builds authority. Portfolio demonstrates capability. Personal brand creates connection. BTS adds authenticity. Social proof builds trust. Luxury experience communicates positioning. Makeup tips create useful/shareable content.
              </p>
            </section>

            {/* 4. MY ROLE (3 clean editorial columns) */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">My Role</h2>
                <p className="mt-1 text-sm font-semibold text-[#6366F1]">
                  Role: Creative &amp; Freelance Marketing Consultant
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3 border-l border-[#1E2433] pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    Marketing &amp; Strategy
                  </h3>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Social media consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Content strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Content mix recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Content pillar development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Brand communication thinking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Bridal audience/content journey planning</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 border-l border-[#1E2433] pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    Workflow &amp; Team
                  </h3>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Suggested content workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Created workflow for client&apos;s team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Organized planning-to-production flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Supported execution consistency</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 border-l border-[#1E2433] pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    Creative Production
                  </h3>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Brochure design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>AI-assisted visual creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Bridal preparation guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Creative direction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Client-facing content structure</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm italic text-[#94A3B8]">
                I contributed through social media consulting, content strategy, workflow development, creative direction, AI-assisted design, bridal-content planning, and marketing thinking.
              </p>
            </section>

            {/* 5. WHAT I WORKED ON (4 workstreams with emphasis on concrete outputs) */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  What I Worked On
                </h2>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  Core workstreams bridging strategy, workflow development, and client collateral.
                </p>
              </div>

              <div className="space-y-8">
                {/* Workstream 1 */}
                <div className="space-y-2 border-b border-[#1E2433] pb-6">
                  <h3 className="text-lg font-bold text-[#F8FAFC]">
                    1. Content Pillars Framework
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    An editorial content structure built around eight pillars to move the brand beyond random posting into a repeatable content system.
                  </p>
                  <p className="text-xs text-[#64748B]">
                    Covers: Bridal Education • Skin-Finish Expertise • Bridal Portfolio • Personal Brand • Behind the Scenes • Social Proof • Luxury Experience • Makeup Tips
                  </p>
                </div>

                {/* Workstream 2 */}
                <div className="space-y-3 border-b border-[#1E2433] pb-6">
                  <h3 className="text-lg font-bold text-[#F8FAFC]">
                    2. Team Workflow &amp; Execution System
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    To make content creation organized and repeatable for the client&apos;s team, a structured execution system was developed. The objective was to make content execution repeatable rather than dependent on ad-hoc ideas.
                  </p>
                  <div className="rounded-md border border-[#1E2433] bg-[#12151E] p-3 text-center overflow-x-auto">
                    <p className="text-xs font-mono text-[#F8FAFC] whitespace-nowrap">
                      Idea <span className="text-[#6366F1]">&rarr;</span> Content Planning <span className="text-[#6366F1]">&rarr;</span> Creative Direction <span className="text-[#6366F1]">&rarr;</span> Production <span className="text-[#6366F1]">&rarr;</span> Review <span className="text-[#6366F1]">&rarr;</span> Publishing <span className="text-[#6366F1]">&rarr;</span> Learning
                    </p>
                  </div>
                </div>

                {/* Workstream 3: AI Brochure (Emphasized output) */}
                <div className="rounded-xl border border-[#6366F1]/30 bg-gradient-to-r from-[#6366F1]/10 to-transparent p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#F8FAFC]">
                      3. AI-Assisted Brochure &amp; Creative Production
                    </h3>
                    <span className="rounded bg-[#6366F1]/20 px-2.5 py-1 text-[11px] font-semibold text-[#6366F1]">
                      Client Collateral Output
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    Abhijith designed a client-facing brochure using AI-assisted creative production. Visuals were created with AI assistance, enhancing creative presentation while ensuring practical production execution.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs text-[#94A3B8] pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>About the makeup artist</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Services / packages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Engagement &amp; reception packages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Booking information &amp; policies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Bridal experience details</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Supporting client information</span>
                    </div>
                  </div>
                </div>

                {/* Workstream 4: Bridal Prep Guide (Emphasized output) */}
                <div className="rounded-xl border border-[#6366F1]/30 bg-gradient-to-r from-[#6366F1]/10 to-transparent p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#F8FAFC]">
                      4. Bridal Preparation Guide
                    </h3>
                    <span className="rounded bg-[#6366F1]/20 px-2.5 py-1 text-[11px] font-semibold text-[#6366F1]">
                      Educational Client Asset
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    A dedicated Bridal Preparation Guide created as part of the client work as an educational and client-experience asset to help brides prepare effectively for makeup sessions and wedding events.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-3 text-xs text-[#94A3B8] pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Welcome &amp; philosophy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Skin preparation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Hair &amp; beauty prep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Wedding day essentials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Event information</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Important bridal notes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Kanchipuram saree prep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Pre-bridal treatments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Final day-of notes</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. FROM STRATEGY TO EXECUTION (Stacked Process Diagram) */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                From Strategy to Execution
              </h2>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                The project connected strategic marketing thinking directly with practical creative output and client-facing materials.
              </p>

              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 text-center overflow-x-auto">
                <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm whitespace-nowrap">
                  Understand Brand <span className="text-[#6366F1]">&rarr;</span> Understand Audience <span className="text-[#6366F1]">&rarr;</span> Content Pillars <span className="text-[#6366F1]">&rarr;</span> Create Workflow <span className="text-[#6366F1]">&rarr;</span> Creative Assets <span className="text-[#6366F1]">&rarr;</span> Client Experience
                </p>
              </div>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                This framework ensured strategy translated into structured execution.
              </p>
            </section>

            {/* 7. SELECTED WORK & OUTPUTS (Lightweight 2-column list) */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  Selected Work &amp; Outputs
                </h2>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  Key deliverables produced during the consulting engagement.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    SOCIAL MEDIA STRATEGY DIRECTION
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Social media strategy direction and content mix recommendations.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    CONTENT PILLAR FRAMEWORK
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Eight-part content pillar framework for structured social media publishing.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    TEAM WORKFLOW STRUCTURE
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Repeatable team workflow structure from idea to publishing and learning.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    AI-ASSISTED BROCHURE
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Client-facing digital and print brochure designed with AI-assisted creative production.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    BRIDAL PREPARATION GUIDE
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Comprehensive educational guide covering skin prep, saree prep, and wedding day essentials.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    CLIENT-FACING BRAND MATERIALS
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Creative direction and client-facing brand materials.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. LEARNING & SKILLS (Grouped supporting section) */}
            <section className="space-y-8 border-t border-[#1E2433] pt-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC]">
                  What I Learned
                </h2>
                <ul className="space-y-2 text-sm text-[#94A3B8]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Marketing strategy has to translate into execution.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Content pillars help turn a broad brand into a repeatable content system.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Client work requires balancing strategy with practical requirements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>AI can accelerate creative production when combined with human direction and review.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Client-facing assets are part of the customer experience, not just design deliverables.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Skills Developed
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-1.5 border-l border-[#1E2433] pl-3">
                    <h4 className="text-xs font-semibold text-[#6366F1]">MARKETING STRATEGY</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Content strategy • Social media planning • Audience thinking • Brand communication
                    </p>
                  </div>
                  <div className="space-y-1.5 border-l border-[#1E2433] pl-3">
                    <h4 className="text-xs font-semibold text-[#6366F1]">CREATIVE &amp; AI</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      AI-assisted design • Creative direction • Visual communication • Brochure development
                    </p>
                  </div>
                  <div className="space-y-1.5 border-l border-[#1E2433] pl-3">
                    <h4 className="text-xs font-semibold text-[#6366F1]">CONSULTING &amp; EXECUTION</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Client communication • Requirement interpretation • Workflow design • Practical implementation
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. OUTCOME (Editorial conclusion) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Outcome
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
                <p>
                  The project produced a clearer content direction, a structured workflow for the client&apos;s team, and practical client-facing creative assets including a brochure and bridal preparation guide.
                </p>
                <p>
                  The work also gave Abhijith hands-on experience in combining marketing strategy, content systems, AI-assisted design and client requirements.
                </p>
              </div>
            </section>

            {/* 10. THE BIGGER STORY (Progression comparison) */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                The Bigger Story
              </h2>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                Pooja Vysh Makeovers represents an important step in connecting marketing strategy with complete client-facing experiences.
              </p>

              <div className="space-y-4 rounded-xl border border-[#1E2433] bg-[#12151E] p-6">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Planet Jewel
                  </span>
                  <div className="overflow-x-auto">
                    <p className="text-xs font-mono font-semibold text-[#94A3B8] whitespace-nowrap">
                      Marketing <span className="text-[#6366F1]">&rarr;</span> Content <span className="text-[#6366F1]">&rarr;</span> Creative Production <span className="text-[#6366F1]">&rarr;</span> Customer Interaction
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#1E2433] pt-3 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    Pooja Vysh Makeovers
                  </span>
                  <div className="overflow-x-auto">
                    <p className="text-xs font-mono font-semibold text-[#F8FAFC] whitespace-nowrap">
                      Marketing Strategy <span className="text-[#6366F1]">&rarr;</span> Content System <span className="text-[#6366F1]">&rarr;</span> Workflow <span className="text-[#6366F1]">&rarr;</span> AI-Assisted Creative <span className="text-[#6366F1]">&rarr;</span> Client Experience
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                That experience showed the transition from executing marketing activities toward thinking about systems, strategy and complete customer-facing experiences.
              </p>
            </section>

            {/* 11. EVIDENCE (Honest placeholder) */}
            <section className="space-y-4 border-t border-[#1E2433] pt-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Evidence &amp; Work
              </h2>
              <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/40 p-6 text-center">
                <p className="text-xs text-[#94A3B8]">
                  Selected project materials will be added as client work assets are organized.
                </p>
              </div>
            </section>

            <RelatedKnowledgeBlock project={project} />

            {/* 12. CLOSING CTA */}
            <section className="rounded-xl border border-[#1E2433] bg-gradient-to-br from-[#12151E] to-[#1A1E2B] p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
                Strategy should become something people can actually experience.
              </h2>
              <p className="mx-auto max-w-xl text-sm md:text-base text-[#94A3B8] leading-relaxed">
                Pooja Vysh Makeovers demonstrated how marketing strategy, structured workflows, AI-assisted creative work, and educational client collateral come together to form a cohesive brand experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button variant="secondary" href="/projects">
                  Explore More Work
                </Button>
                <Button variant="primary" href="/work-with-me">
                  Work With Me
                </Button>
              </div>
            </section>
          </div>
        </Container>
      </div>
    );
  }

  // Bespoke research-oriented layout for McDonald's India Digital Marketing Analysis
  if (project.slug === "mcdonalds-digital-marketing-analysis") {
    return (
      <div className="py-16 md:py-24">
        <JsonLd schema={jsonLdGraph} />
        <Container>
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
            >
              &larr; Back to all projects
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12 border-b border-[#1E2433] pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#6366F1]">
                Industrial / Academic Analysis
              </span>
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#94A3B8]">
                Role: Digital Marketing Intern — Plasmid
              </span>
              <span className="text-[#64748B] font-mono">
                Status: Completed Internship Project
              </span>
              <span className="text-[#64748B] font-mono">
                Timeframe: July 1, 2024 – September 1, 2024
              </span>
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#64748B]">
                Plasmid Innovation Ltd · Subject: McDonald&apos;s India
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg font-medium text-[#94A3B8] leading-relaxed">
              {project.tagline}
            </p>

            <p className="mt-3 text-sm text-[#6366F1]">
              Individual Role: <strong className="font-semibold">{project.role}</strong>
            </p>
          </header>

          {/* Main Narrative Area */}
          <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
            {/* 1. OVERVIEW */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Overview
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
                <p>
                  This digital marketing analysis was completed during Abhijith S Mohan&apos;s two-month Digital Marketing Internship at Plasmid Innovation Ltd (July 1, 2024 – September 1, 2024).
                </p>
                <p>
                  The analysis examined how McDonald&apos;s India uses digital marketing to maintain brand relevance, connect with regional audiences, and support customer engagement across diverse consumer touchpoints.
                </p>
                <p>
                  The work explored key marketing dimensions including localization, social media, content strategy, influencer marketing, app-based promotions, regional campaigns, emotional branding, data analytics, geo-targeting, experimentation, and campaign optimization.
                </p>
              </div>
            </section>

            {/* 2. THE CONTEXT */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                The Context
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
                <p className="text-lg font-medium text-[#F8FAFC]">
                  Central Analytical Question: &ldquo;How does a large global brand adapt its digital marketing approach to the Indian market while maintaining a recognizable global identity?&rdquo;
                </p>
                <p>
                  This question served as the primary thesis for the research, examining the structural relationship between global brand equity and localized market execution:
                </p>
              </div>

              {/* Analytical Process Diagram */}
              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm">
                  Global Brand <span className="text-[#6366F1]">&rarr;</span> Indian Market <span className="text-[#6366F1]">&rarr;</span> Localization <span className="text-[#6366F1]">&rarr;</span> Digital Channels <span className="text-[#6366F1]">&rarr;</span> Audience Engagement <span className="text-[#6366F1]">&rarr;</span> Data &amp; Optimization
                </p>
              </div>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                The project provided a structured framework for evaluating how enterprise marketing principles operate across regional Indian consumer segments.
              </p>
            </section>

            {/* 3. MY ROLE */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">My Role</h2>
                <p className="mt-1 text-sm font-semibold text-[#6366F1]">
                  Role: Digital Marketing Intern — Plasmid Innovation Ltd
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3 border-l border-[#1E2433] pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    Research
                  </h3>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Studied McDonald&apos;s India digital presence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Examined digital marketing activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Reviewed content &amp; campaign approaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Studied localization &amp; engagement</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 border-l border-[#1E2433] pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    Analysis
                  </h3>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Analyzed social media strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Examined content strategy &amp; formats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Studied influencer &amp; regional marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Reviewed app promotions &amp; engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Examined geo-targeting &amp; testing</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 border-l border-[#1E2433] pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    Synthesis
                  </h3>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Connected observations into analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Identified strategic marketing patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Documented industrial analysis report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6366F1] font-bold">•</span>
                      <span>Mapped tactics to business objectives</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-[#1E2433] bg-[#12151E]/60 p-4 text-xs text-[#94A3B8] italic">
                <strong>Scope Clarification:</strong> As an intern at Plasmid, my role was focused on research, analytical breakdown, and synthesis of public digital marketing activities. The analysis did not involve direct access to internal McDonald&apos;s private data or management of official McDonald&apos;s campaigns.
              </div>
            </section>

            {/* 4. ANALYTICAL FRAMEWORK (10 DIMENSIONS) */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  Analytical Framework (10 Dimensions)
                </h2>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  The analysis evaluated McDonald&apos;s India&apos;s digital strategy across 10 core dimensions.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    1. Localization Strategy
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Examined how McDonald&apos;s adapts menu messaging, dietary considerations, and cultural communication to regional Indian markets while preserving core brand standards.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    2. Social Media Channels
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Analyzed platform-specific communication across Instagram, X, and YouTube, observing how tone and visual formats vary to maximize audience engagement.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    3. Content Strategy &amp; Formats
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Reviewed product highlight visuals, short-form video reels, promotional creatives, and timely occasion-based content.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    4. Influencer Partnerships
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Studied how collaborations with national and regional content creators help bridge global scale with local consumer trust.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    5. App &amp; Digital Promotions
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Examined the integration of digital offer communications, app download incentives, and mobile ordering awareness campaigns.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    6. Regional Campaigns
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Analyzed regional festival campaigns and multilingual messaging tailored to North/East and South/West operating zones.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    7. Emotional Branding
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Evaluated campaign storytelling built around nostalgia, family moments, friendship, and everyday consumer situations.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    8. Data Analytics &amp; Insights
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Studied conceptual data-driven marketing frameworks, performance tracking principles, and audience segmentation concepts.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    9. Geo-Targeting Tactics
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Reviewed location-based digital advertising principles, store-proximity marketing, and localized drive-thru promotion concepts.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1E2433]/70 bg-[#12151E]/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                    10. Testing &amp; Optimization
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Examined iterative experimentation concepts, creative variant testing, and digital campaign optimization frameworks.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. FROM OBSERVATION TO INSIGHT */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                From Observation to Insight
              </h2>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                The project helped develop a structured analytical methodology for evaluating digital marketing strategy rather than observing social media posts in isolation.
              </p>

              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 text-center overflow-x-auto">
                <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm whitespace-nowrap">
                  Observe <span className="text-[#6366F1]">&rarr;</span> Analyze <span className="text-[#6366F1]">&rarr;</span> Identify Pattern <span className="text-[#6366F1]">&rarr;</span> Connect Principle <span className="text-[#6366F1]">&rarr;</span> Form Insight
                </p>
              </div>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                This process transformed raw channel observations into actionable strategic understanding.
              </p>
            </section>

            {/* 6. SELECTED WORK & OUTPUTS */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  Project Output &amp; Deliverables
                </h2>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  Research deliverables completed during the Plasmid internship.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    INDUSTRIAL ANALYSIS DOCUMENT
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Structured digital marketing analysis report completed during Plasmid internship.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    STRATEGIC FRAMEWORK
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    10-part analytical framework evaluating enterprise digital marketing channels.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    LOCALIZATION STUDY
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Analysis of regional campaign adaptation and cultural communication in India.
                  </p>
                </div>

                <div className="border-l-2 border-[#6366F1] pl-3 py-1 space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    CHANNEL &amp; DATA INSIGHTS
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Synthesized insights on social media, influencer strategy, app engagement, and geo-targeting.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. LEARNING & SKILLS */}
            <section className="space-y-8 border-t border-[#1E2433] pt-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC]">
                  Key Learnings
                </h2>
                <ul className="space-y-2 text-sm text-[#94A3B8]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Global brands need local relevance to succeed in diverse markets.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Digital marketing is not only about posting content; it requires structural channel alignment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Different digital channels serve distinct roles across the consumer decision journey.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Content, audience understanding, and business objectives must remain tightly connected.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Data and experimentation improve marketing decisions and campaign effectiveness.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>Strong digital marketing combines creative storytelling with analytical discipline.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Skills Developed
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-1.5 border-l border-[#1E2433] pl-3">
                    <h4 className="text-xs font-semibold text-[#6366F1]">DIGITAL MARKETING</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Social media analysis • Content strategy analysis • Digital campaign analysis • Audience understanding
                    </p>
                  </div>
                  <div className="space-y-1.5 border-l border-[#1E2433] pl-3">
                    <h4 className="text-xs font-semibold text-[#6366F1]">RESEARCH &amp; ANALYTICS</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Marketing research • Competitive brand analysis • Data-oriented thinking • Pattern identification
                    </p>
                  </div>
                  <div className="space-y-1.5 border-l border-[#1E2433] pl-3">
                    <h4 className="text-xs font-semibold text-[#6366F1]">STRATEGIC THINKING</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Connecting tactics to objectives • Localization thinking • Channel strategy • Marketing optimization
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. OUTCOME */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Outcome
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
                <p>
                  The project strengthened Abhijith&apos;s ability to analyze digital marketing strategies, understand how large brands adapt communication to different audiences, and connect individual marketing activities with broader strategic objectives.
                </p>
                <p>
                  It also provided an early foundation for moving from learning marketing concepts toward applying them in practical, real-world operational work.
                </p>
              </div>
            </section>

            {/* 9. THE BIGGER STORY */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                The Bigger Story
              </h2>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                McDonald&apos;s Digital Marketing Analysis marks the starting point of Abhijith&apos;s professional development progression, evolving from academic analysis toward real-world execution and technology leadership:
              </p>

              <div className="space-y-4 rounded-xl border border-[#1E2433] bg-[#12151E] p-6">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Project &amp; Career Progression
                  </span>
                  <div className="overflow-x-auto">
                    <p className="text-xs font-mono font-semibold text-[#94A3B8] whitespace-nowrap">
                      Plasmid (Analysis) <span className="text-[#6366F1]">&rarr;</span> Planet Jewel (Execution) <span className="text-[#6366F1]">&rarr;</span> Live by ONC (Co-founding) <span className="text-[#6366F1]">&rarr;</span> Pooja Vysh (Strategy) <span className="text-[#6366F1]">&rarr;</span> TOHVA (AI Workflows) <span className="text-[#6366F1]">&rarr;</span> DP AI Labs (Tech Leadership)
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#1E2433] pt-3 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                    Strategic Focus Progression
                  </span>
                  <div className="overflow-x-auto">
                    <p className="text-xs font-mono font-semibold text-[#F8FAFC] whitespace-nowrap">
                      Analysis <span className="text-[#6366F1]">&rarr;</span> Execution <span className="text-[#6366F1]">&rarr;</span> Strategy <span className="text-[#6366F1]">&rarr;</span> Systems <span className="text-[#6366F1]">&rarr;</span> AI + Technology + Business Building
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                This journey reflects a steady transition from analyzing digital marketing systems to executing campaigns, designing strategy, building initiatives, and leading technology teams.
              </p>
            </section>

            {/* 10. EVIDENCE & SOURCE CONTEXT */}
            <section className="space-y-6 border-t border-[#1E2433] pt-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Evidence &amp; Source Context
              </h2>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                  Primary Internship Record
                </h3>
                <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-xs text-[#64748B]">
                    <span>Organization: Plasmid Innovation Ltd</span>
                    <span className="font-mono">July 1, 2024 – Sept 1, 2024</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F8FAFC]">
                    Digital Marketing Internship Certificate &amp; Industrial Training Record
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Verified internship record at Plasmid Innovation Ltd covering digital marketing strategies, industrial analysis, and campaign frameworks.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Analysis Document Archive
                </h3>
                <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/40 p-6 text-center">
                  <p className="text-xs text-[#94A3B8]">
                    The original analysis document will be added as project evidence when the internship project archive is organized.
                  </p>
                </div>
              </div>
            </section>

            <RelatedKnowledgeBlock project={project} />

            {/* 11. CLOSING CTA */}
            <section className="rounded-xl border border-[#1E2433] bg-gradient-to-br from-[#12151E] to-[#1A1E2B] p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
                Good marketing starts with understanding what is happening beneath the content.
              </h2>
              <p className="mx-auto max-w-xl text-sm md:text-base text-[#94A3B8] leading-relaxed">
                This industrial analysis demonstrated how digital marketing operates as a strategic system combining audience research, channel optimization, and data-driven insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button variant="secondary" href="/projects">
                  Explore More Work
                </Button>
                <Button variant="primary" href="/work-with-me">
                  Work With Me
                </Button>
              </div>
            </section>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
          >
            &larr; Back to all projects
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-[#1E2433] pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {project.projectType && (
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#6366F1]">
                {project.projectType}
              </span>
            )}
            <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#94A3B8]">
              Role: {project.roleType}
            </span>
            <span className="text-[#64748B] font-mono">
              Status: {project.status || "Ongoing"}
            </span>
            {project.timeframe.start && (
              <span className="text-[#64748B] font-mono">
                Started: {project.timeframe.start}
              </span>
            )}
            {project.organization?.description && (
              <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#64748B]">
                {project.organization.description}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
            {project.slug === "planet-jewel"
              ? `Planet Jewel — ${project.title}`
              : project.title}
          </h1>

          {project.tagline && (
            <p className="mt-4 text-lg font-medium text-[#94A3B8] leading-relaxed">
              {project.tagline}
            </p>
          )}

          {project.role && (
            <p className="mt-3 text-sm text-[#6366F1]">
              Individual Role: <strong className="font-semibold">{project.role}</strong>
            </p>
          )}
        </header>

        {/* Main Content Area */}
        <div className="mx-auto max-w-4xl space-y-16">
          {/* 1. OVERVIEW */}
          {project.overview && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Overview
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.overview}
              </div>
            </section>
          )}

          {/* 2. THE IDEA (if applicable) */}
          {project.theIdea && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                The Idea
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.theIdea.intro}
              </div>

              {project.theIdea.activities && project.theIdea.activities.length > 0 && (
                <ul className="grid gap-2.5 sm:grid-cols-2 text-sm text-[#94A3B8]">
                  {project.theIdea.activities.map((act, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              )}

              {project.theIdea.closing && (
                <p className="text-base text-[#94A3B8] leading-relaxed pt-2">
                  {project.theIdea.closing}
                </p>
              )}
            </section>
          )}

          {/* 3. THE OPPORTUNITY */}
          {project.opportunity && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.opportunity.heading}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.opportunity.text}
              </div>

              {project.opportunity.formula && (
                <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center">
                  <p className="text-sm font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-base">
                    {project.opportunity.formula}
                  </p>
                </div>
              )}

              {project.opportunity.closing && (
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {project.opportunity.closing}
                </p>
              )}
            </section>
          )}

          {/* 4. CONTENT STRATEGY */}
          {project.contentStrategySection && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.contentStrategySection.heading}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.contentStrategySection.text}
              </div>

              {project.contentStrategySection.formula && (
                <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center">
                  <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm">
                    {project.contentStrategySection.formula}
                  </p>
                </div>
              )}

              {project.contentStrategySection.closing && (
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {project.contentStrategySection.closing}
                </p>
              )}

              {project.contentStrategySection.areas &&
                project.contentStrategySection.areas.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    {project.contentStrategySection.areas.map((area, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 space-y-2"
                      >
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                          {area.title}
                        </h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">
                          {area.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
            </section>
          )}

          {/* 5. MY ROLE */}
          {project.roleDetails && (
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  My Role
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#6366F1]">
                  Role: {project.roleDetails.roleLabel}
                </p>
              </div>

              {project.roleGroups && project.roleGroups.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.roleGroups.map((grp, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 space-y-3"
                    >
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                        {grp.category}
                      </h3>
                      <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                        {grp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#6366F1]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-base text-[#94A3B8]">
                    {project.slug === "dp-ai-labs"
                      ? "My current responsibilities include:"
                      : "My involvement covered several areas:"}
                  </p>

                  <ul className="grid gap-2.5 sm:grid-cols-2 text-sm text-[#94A3B8]">
                    {project.roleDetails.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.roleDetails.closing && (
                <div className="text-base leading-relaxed text-[#94A3B8] italic pt-2 whitespace-pre-line">
                  {project.roleDetails.closing}
                </div>
              )}
            </section>
          )}

          {/* 6. WHAT I WORKED ON */}
          {project.editorialSections && project.editorialSections.length > 0 && (
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  {project.slug === "dp-ai-labs"
                    ? "Execution & Focus Areas"
                    : project.slug === "live-by-onc"
                    ? "Building the Initiative"
                    : "What I Worked On"}
                </h2>
                {project.slug !== "planet-jewel" && (
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Detailed breakdown across team building, technology, and project management.
                  </p>
                )}
              </div>

              <div className="space-y-6">
                {project.editorialSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 space-y-4"
                  >
                    <h3 className="text-lg font-bold text-[#F8FAFC]">
                      {sec.title}
                    </h3>
                    <div className="text-sm leading-relaxed text-[#94A3B8] whitespace-pre-line space-y-3">
                      {sec.text}
                    </div>

                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="grid gap-2 sm:grid-cols-2 text-xs text-[#94A3B8] pt-2">
                        {sec.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-[#6366F1] font-bold">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. FROM STRATEGY TO EXECUTION */}
          {project.strategyToExecution && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.strategyToExecution.heading}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.strategyToExecution.intro}
              </div>

              {project.strategyToExecution.formula && (
                <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center overflow-x-auto">
                  <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm">
                    {project.strategyToExecution.formula}
                  </p>
                </div>
              )}

              {project.strategyToExecution.closing && (
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {project.strategyToExecution.closing}
                </p>
              )}
            </section>
          )}

          {/* 8. SELECTED WORK & OUTPUTS */}
          {project.selectedOutputs && project.selectedOutputs.length > 0 && (
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                  {project.slug === "tohva"
                    ? "Deliverables"
                    : project.slug === "live-by-onc"
                    ? "What ONC Explored"
                    : "Selected Work & Outputs"}
                </h2>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  {project.slug === "tohva"
                    ? "Key deliverables produced during the project."
                    : "Asset types and creative deliverables produced during the tenure."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.selectedOutputs.map((output, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 space-y-2"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                      {output.category}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {output.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. HOW MY THINKING CHANGED */}
          {project.thinkingChanged && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                How My Thinking Changed
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.thinkingChanged.text1}
              </div>

              {project.thinkingChanged.formula && (
                <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center overflow-x-auto">
                  <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm">
                    {project.thinkingChanged.formula}
                  </p>
                </div>
              )}

              {project.thinkingChanged.text2 && (
                <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                  {project.thinkingChanged.text2}
                </div>
              )}
            </section>
          )}

          {/* 10. SKILLS DEVELOPED */}
          {project.skillsDeveloped && project.skillsDeveloped.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.slug === "dp-ai-labs" ? "Skills Developing" : "Skills Developed"}
              </h2>

              <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
                {project.skillsDeveloped.map((grp, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 space-y-3"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                      {grp.category}
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                      {grp.skills.map((s, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#6366F1]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CURRENT STATUS */}
          {project.currentStatusSection && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.currentStatusSection.heading || "Current Status"}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.currentStatusSection.text}
              </div>
            </section>
          )}

          {/* WHAT I'M LEARNING */}
          {project.whatImLearning && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.slug === "tohva" ? "What I Learned" : "What I&apos;m Learning"}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.whatImLearning.text}
              </div>

              {project.whatImLearning.formula && (
                <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center overflow-x-auto">
                  <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm">
                    {project.whatImLearning.formula}
                  </p>
                </div>
              )}

              <div className="space-y-4 text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.whatImLearning.closing}
              </div>
            </section>
          )}

          {/* CURRENT WORK */}
          {project.currentWorkSection && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.currentWorkSection.heading || "Current Work"}
              </h2>
              <p className="text-base text-[#94A3B8]">
                {project.currentWorkSection.intro}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.currentWorkSection.areas.map((area, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 space-y-2"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {area.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 11. TOOLS & WORKING METHODS */}
          {project.techStack && project.techStack.length > 0 && !project.currentWorkStatus && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Tools &amp; Working Methods
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tool, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-[#1E2433] bg-[#12151E] px-3.5 py-1.5 text-xs font-medium text-[#94A3B8]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 12. OUTCOMES & DELIVERABLES */}
          {project.outcomesDeliverables && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.slug === "tohva" ? "Outcome" : "Outcomes &amp; Deliverables"}
              </h2>
              <p className="text-base text-[#94A3B8]">
                {project.outcomesDeliverables.intro}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.outcomesDeliverables.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 space-y-2"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                      {item.category}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 13. WHAT I LEARNED */}
          {project.learningsDetailed && project.learningsDetailed.length > 0 && !project.whatImLearning && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                What I Learned
              </h2>
              <p className="text-base text-[#94A3B8]">
                Key operational lessons from this experience:
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2 text-sm text-[#94A3B8]">
                {project.learningsDetailed.map((l, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#6366F1] font-bold">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 14. THE BIGGER STORY */}
          {project.biggerStory && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                The Bigger Story
              </h2>
              <div className="text-base leading-relaxed text-[#94A3B8] whitespace-pre-line">
                {project.biggerStory.intro}
              </div>

              {project.biggerStory.progression && (
                <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center overflow-x-auto">
                  <p className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-sm">
                    {project.biggerStory.progression}
                  </p>
                </div>
              )}

              <div className="text-base leading-relaxed text-[#94A3B8]">
                {project.biggerStory.closing}
              </div>
            </section>
          )}

          {/* 15. EVIDENCE & WORK */}
          <section className="space-y-6 border-t border-[#1E2433] pt-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              {project.slug === "tohva"
                ? "Evidence & Live Project"
                : project.slug === "planet-jewel"
                ? "Evidence & Work"
                : "Evidence"}
            </h2>

            {project.slug === "tohva" && (
              <p className="text-base text-[#94A3B8]">
                The live project provides public context for the product and brand presentation.
              </p>
            )}

            {project.slug === "planet-jewel" && (
              <p className="text-base text-[#94A3B8]">
                A selection of work from this period across digital marketing, content, creative production and campaign activity.
              </p>
            )}

            {/* Public Sources */}
            {project.publicCoverage && project.publicCoverage.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                  Public Press Coverage
                </h3>
                {project.publicCoverage.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between text-xs text-[#64748B]">
                      <span>Publication: {item.publication}</span>
                      <span className="font-mono">{item.date}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#F8FAFC]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* External Links */}
            {project.externalLinks && project.externalLinks.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Official External Links
                </h3>
                <div className="flex flex-wrap gap-4 text-xs">
                  {project.externalLinks.map((link, idx) => (
                    <div key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-semibold text-[#6366F1] hover:underline"
                      >
                      {link.platform} &rarr;
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Media Placeholder */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                Project Evidence &amp; Public Assets
              </h3>
              <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/40 p-6 text-center">
                <p className="text-xs text-[#94A3B8]">
                  {project.slug === "dp-ai-labs"
                    ? "Selected project evidence will be added as public-facing work becomes available."
                    : project.slug === "tohva"
                    ? "Selected project visuals will be added as project assets are organized."
                    : "Selected work will be added as project assets are organized."}
                </p>
              </div>
            </div>
          </section>

          {/* RESULTS & TRANSPARENCY (If present on other projects) */}
          {project.resultsTransparency && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Results
              </h2>

              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                  What can be stated
                </h3>
                <ul className="space-y-2 text-sm text-[#94A3B8]">
                  {project.resultsTransparency.confident.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 text-[#6366F1]">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <RelatedKnowledgeBlock project={project} />

          {/* 16. CLOSING CTA */}
          <section className="rounded-xl border border-[#1E2433] bg-gradient-to-br from-[#12151E] to-[#1A1E2B] p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
              {project.slug === "planet-jewel"
                ? "Connecting Strategy & Execution"
                : project.slug === "tohva"
                ? "AI as a Production System"
                : project.slug === "pooja-vysh-makeovers"
                ? "Strategy should become something people can actually experience."
                : "Building Beyond Marketing"}
            </h2>
            <div className="mx-auto max-w-xl space-y-3 text-sm md:text-base text-[#94A3B8] leading-relaxed">
              <p>
                {project.slug === "planet-jewel"
                  ? "Planet Jewel demonstrated how creative marketing, content strategy, visual production, and customer communication connect directly to retail business operations."
                  : project.slug === "tohva"
                  ? "TOHVA wasn't simply an experiment with AI-generated images. It was an opportunity to explore how AI could become part of a repeatable commercial production workflow."
                  : project.slug === "pooja-vysh-makeovers"
                  ? "Pooja Vysh Makeovers demonstrated how marketing strategy, structured workflows, AI-assisted creative work, and educational client collateral come together to form a cohesive brand experience."
                  : "DP AI Labs represents an important step in expanding my work from marketing into technology, project management and digital product building."}
              </p>
              {project.slug !== "pooja-vysh-makeovers" && (
                <p className="text-[#F8FAFC] font-medium">
                  {project.slug === "planet-jewel"
                    ? "Looking to build or scale your digital presence?"
                    : project.slug === "tohva"
                    ? "That perspective continues to influence how I think about AI, technology and business."
                    : "I'm still early in this journey. But the direction is becoming clearer:"}
                </p>
              )}
              {project.slug !== "planet-jewel" &&
                project.slug !== "tohva" &&
                project.slug !== "pooja-vysh-makeovers" && (
                  <div className="rounded-lg border border-[#1E2433] bg-[#12151E] p-4 text-center">
                    <p className="text-xs font-mono font-semibold text-[#F8FAFC] sm:text-sm">
                      Understand problems <span className="text-[#6366F1]">&rarr;</span> Build systems <span className="text-[#6366F1]">&rarr;</span> Create products <span className="text-[#6366F1]">&rarr;</span> Build businesses
                    </p>
                  </div>
                )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button variant="secondary" href="/projects">
                {project.slug === "pooja-vysh-makeovers"
                  ? "Explore More Work"
                  : "Explore More Projects"}
              </Button>
              <Button variant="primary" href="/work-with-me">
                Work With Me
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
