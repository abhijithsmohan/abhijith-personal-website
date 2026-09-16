import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Abhijith S Mohan's professional experience, selected projects and work across marketing, AI and business.",
  openGraph: {
    title: "Work",
    description:
      "Explore Abhijith S Mohan's professional experience, selected projects and work across marketing, AI and business.",
    url: "https://abhijithsmohan.in/work",
  },
  alternates: {
    canonical: getCanonicalUrl("/work"),
  },
};

export default function WorkPage() {
  const jsonLdGraph = generatePageGraph({
    path: "/work",
    title: "Work",
    description:
      "Explore Abhijith S Mohan's professional experience, selected projects and work across marketing, AI and business.",
  });
  const planetJewelPoints = [
    "Social media management",
    "Content strategy and planning",
    "Product and jewellery photography",
    "Video shooting and editing",
    "Campaign development",
    "Influencer coordination",
    "Creative production",
    "Instagram and WhatsApp enquiries",
    "Customer interaction and sales support",
    "Team and production coordination",
  ];

  const selectedWorkItems = [
    {
      title: "Planet Jewel",
      category: "Digital Marketing · Content · Creative Production",
      description:
        "Restarting and developing a jewellery brand's digital presence through hands-on social media, content, photography, video and campaign work.",
      slug: "planet-jewel",
      ctaText: "View Case Study",
    },
    {
      title: "Live by ONC",
      category: "Co-founder · Community · Events",
      description:
        "A community and cultural initiative exploring events, artist collaborations, experiences and meaningful connections.",
      slug: "live-by-onc",
      ctaText: "View Project",
    },
    {
      title: "DP AI Labs",
      category: "Project Management · Technology · Team Leadership",
      description:
        "An early-stage technology initiative where I lead the IT team and coordinate ongoing website and SaaS projects with a growing intern team.",
      slug: "dp-ai-labs",
      ctaText: "View Project",
    },
    {
      title: "TOHVA",
      category: "AI · Product Photography · Project Coordination",
      description:
        "Coordinating AI-powered product photography and content production for Planet Jewel's premium natural stone jewellery sub-brand.",
      slug: "tohva",
      ctaText: "View Project",
      websiteUrl: "https://tohva.com/",
      collectionUrl: "https://tohva.com/collections/anklets",
    },
    {
      title: "Pooja Vysh Makeovers",
      category: "Freelance Consulting · Strategy · Creative",
      description:
        "Marketing consultation, content strategy, workflow development and AI-assisted creative production for a bridal makeup brand.",
      slug: "pooja-vysh-makeovers",
      ctaText: "View Project",
    },
  ];

  const capabilities = [
    {
      title: "Marketing & Growth",
      description:
        "Digital marketing, content, brand building, growth strategy and digital presence.",
    },
    {
      title: "AI & Business Integration",
      description:
        "AI-assisted workflows, automation, business processes and practical AI applications.",
    },
    {
      title: "Technology & Digital Building",
      description:
        "Websites, digital systems, infrastructure and exploration of software and digital products.",
    },
    {
      title: "Business Strategy",
      description:
        "Business models, opportunity identification, systems thinking and building new ventures.",
    },
  ];

  const helpItems = [
    {
      title: "Build a Digital Presence",
      description:
        "Help shape a brand's digital presence through content, social media, positioning and practical digital marketing.",
    },
    {
      title: "Connect Marketing & AI",
      description:
        "Explore practical ways AI and automation can improve content workflows, business processes and marketing operations.",
    },
    {
      title: "Build Digital Projects",
      description:
        "Work on websites, digital systems and early-stage digital product ideas.",
    },
    {
      title: "Think Through a Business",
      description:
        "Explore opportunities, business models, systems and practical ways to turn an idea into something that can be tested.",
    },
    {
      title: "Collaborate",
      description:
        "Work together on interesting projects, businesses, communities or technology-driven ideas.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
          {/* PAGE INTRODUCTION */}
          <header className="border-b border-[#1E2433] pb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
              Professional Record
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
              Work
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#94A3B8]">
              My work sits across marketing, AI and business — from hands-on digital marketing and creative production to project coordination, data and early-stage technology building.
            </p>
          </header>

          {/* EXPERIENCE & ROLES */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Experience &amp; Roles
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Professional roles and operational responsibilities in organization environments.
              </p>
            </div>

            <div className="space-y-8">
              {/* DEFINE PERSPECTIVE */}
              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 md:p-8 space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-block rounded bg-[#1A1E2B] px-2.5 py-0.5 text-xs font-semibold text-[#6366F1]">
                      Current Role
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-[#F8FAFC]">
                      Define Perspective
                    </h3>
                    <p className="text-sm font-medium text-[#94A3B8]">
                      Role: Digital Marketer &amp; Data Analyst
                    </p>
                  </div>
                  <p className="text-xs text-[#64748B] font-mono">
                    2024 — Present
                  </p>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-[#94A3B8]">
                  <p>
                    At Define Perspective, I work across digital marketing and data analysis, while leading the social media marketing for the company&apos;s main digital presence and its AI production-focused social media.
                  </p>
                  <p>
                    My work sits at the intersection of marketing, content, data and AI-assisted creative production.
                  </p>
                </div>

                <div className="pt-2 text-xs text-[#94A3B8]">
                  Related initiative:{" "}
                  <Link
                    href="/projects/dp-ai-labs"
                    className="font-semibold text-[#6366F1] hover:underline"
                  >
                    DP AI Labs &rarr;
                  </Link>
                </div>

                <div className="pt-4 border-t border-[#1E2433] flex flex-wrap gap-4 text-xs">
                  <a
                    href="https://defineperspective.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#6366F1] hover:underline"
                  >
                    Official Website &rarr;
                  </a>
                  <a
                    href="https://www.instagram.com/defineperspective/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#6366F1] hover:underline"
                  >
                    Define Perspective Instagram &rarr;
                  </a>
                  <a
                    href="https://www.instagram.com/dpaistudios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#6366F1] hover:underline"
                  >
                    DP AI Studios Instagram &rarr;
                  </a>
                </div>
              </div>

              {/* PLANET JEWEL */}
              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 md:p-8 space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-block rounded bg-[#1A1E2B] px-2.5 py-0.5 text-xs font-semibold text-[#94A3B8]">
                      Professional Role
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-[#F8FAFC]">
                      Planet Jewel
                    </h3>
                    <p className="text-sm font-medium text-[#94A3B8]">
                      Role: Digital Promoter
                    </p>
                  </div>
                  <p className="text-xs text-[#64748B] font-mono">
                    May 2024 — June 2025
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  My role at Planet Jewel developed into hands-on digital marketing and content operations for a jewellery retail brand.
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    I worked across:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 text-xs text-[#94A3B8]">
                    {planetJewelPoints.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  The experience gave me exposure to marketing beyond content creation — connecting products, customers, creative work, sales and day-to-day business operations.
                </p>

                <div className="pt-4 border-t border-[#1E2433]">
                  <Link
                    href="/projects/planet-jewel"
                    className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
                  >
                    View Planet Jewel Case Study &rarr;
                  </Link>
                </div>
              </div>

              {/* PLASMID */}
              <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 md:p-8 space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-block rounded bg-[#1A1E2B] px-2.5 py-0.5 text-xs font-semibold text-[#94A3B8]">
                      Internship
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-[#F8FAFC]">
                      Plasmid
                    </h3>
                    <p className="text-sm font-medium text-[#94A3B8]">
                      Role: Digital Marketing Intern
                    </p>
                  </div>
                  <p className="text-xs text-[#64748B] font-mono">
                    July 2024 — September 2024
                  </p>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-[#94A3B8]">
                  <p>My first formal professional exposure in digital marketing.</p>
                  <p>
                    During the internship, I worked on digital-marketing-related industrial projects and research assignments, including an analysis of McDonald&apos;s digital marketing strategy in India.
                  </p>
                  <p>
                    I also received an internship certificate, industrial training certificate and a Letter of Recommendation from Plasmid.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E2433]">
                  <Link
                    href="/projects/mcdonalds-digital-marketing-analysis"
                    className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
                  >
                    View McDonald&apos;s Analysis Research Project &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SELECTED WORK */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Selected Work
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Key case studies, projects, and structured execution records.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {selectedWorkItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-[#F8FAFC]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                      {item.description}
                    </p>

                    {(item.websiteUrl || item.collectionUrl) && (
                      <div className="mt-4 flex flex-wrap gap-3 text-xs">
                        {item.websiteUrl && (
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#6366F1] hover:underline"
                          >
                            TOHVA Website &rarr;
                          </a>
                        )}
                        {item.collectionUrl && (
                          <a
                            href={item.collectionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#6366F1] hover:underline"
                          >
                            Anklets Collection &rarr;
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1E2433]">
                    <Link
                      href={`/projects/${item.slug}`}
                      className="text-xs font-semibold text-[#6366F1] hover:underline"
                    >
                      {item.ctaText} &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CAPABILITIES */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Capabilities
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Domain areas shaping my practical execution and strategic focus.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                >
                  <h3 className="text-base font-bold text-[#F8FAFC]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#64748B] italic leading-relaxed pt-2">
              These are the areas where I work and explore. They represent the intersection I&apos;m building toward rather than a claim to mastery in every discipline.
            </p>
          </section>

          {/* HOW I CAN HELP */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                How I Can Help
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Potential focus areas for collaboration, projects, and advisory conversations.
              </p>
            </div>

            <div className="grid gap-4">
              {helpItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                >
                  <h3 className="text-base font-bold text-[#F8FAFC]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CLOSING CTA */}
          <section className="rounded-xl border border-[#1E2433] bg-gradient-to-br from-[#12151E] to-[#1A1E2B] p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
              Building something?
            </h2>
            <p className="mx-auto max-w-xl text-sm md:text-base text-[#94A3B8] leading-relaxed">
              I&apos;m interested in working on ideas where marketing, technology, AI and business come together.
            </p>
            <div className="flex justify-center pt-2">
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
