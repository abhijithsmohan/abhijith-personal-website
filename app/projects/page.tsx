import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getProjects } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Evidence of building, client work, research analysis, and digital experiments by Abhijith S Mohan.",
  openGraph: {
    title: "Projects & Case Studies",
    description:
      "Evidence of building, client work, research analysis, and digital experiments by Abhijith S Mohan.",
    url: "https://abhijithsmohan.in/projects",
  },
  alternates: {
    canonical: getCanonicalUrl("/projects"),
  },
};

export default function ProjectsPage() {
  const allProjects = getProjects();

  const jsonLdGraph = generatePageGraph({
    path: "/projects",
    title: "Projects & Case Studies",
    description:
      "Evidence of building, client work, research analysis, and digital experiments by Abhijith S Mohan.",
  });

  const caseStudiesAndClientWork = allProjects.filter(
    (p) => p.projectType !== "Experiment"
  );
  const experiments = allProjects.filter(
    (p) => p.projectType === "Experiment" || p.roleType === "Experiment"
  );

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        {/* Page Header */}
        <header className="mb-16 border-b border-[#1E2433] pb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
            Evidence &amp; Execution
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
            Projects &amp; Case Studies
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#94A3B8]">
            Structured records of client work, research analysis, digital builds, and low-capital business experiments.
          </p>
        </header>

        <div className="space-y-16">
          {/* Commercial & Client Work / Case Studies */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Client Work &amp; Research Case Studies
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Commercial client work, strategic consultations, and research analyses.
              </p>
            </div>

            {caseStudiesAndClientWork.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {caseStudiesAndClientWork.map((project) => (
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

                      <h3 className="mt-4 text-xl font-bold text-[#F8FAFC]">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:text-[#6366F1] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-xs font-medium text-[#94A3B8]">
                        Role: {project.role} ({project.roleType})
                      </p>

                      <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                        {project.shortDescription || project.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#1E2433] flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-[#1A1E2B] px-2 py-0.5 text-[10px] text-[#94A3B8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-xs font-semibold text-[#6366F1] hover:underline"
                      >
                        Read Details &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/50 p-12 text-center">
                <p className="text-sm text-[#94A3B8]">
                  No commercial case studies documented yet.
                </p>
              </div>
            )}
          </section>

          {/* Experiments Section */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Digital Experiments &amp; Small Store Builds
              </h2>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Small e-commerce tests and exploratory builds testing digital storefront models.
              </p>
            </div>

            {experiments.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {experiments.map((exp) => (
                  <article
                    key={exp.id}
                    className="flex flex-col justify-between rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
                        <span className="rounded bg-[#1A1E2B] px-2 py-0.5 font-medium text-[#94A3B8]">
                          Experiment
                        </span>
                        <span className="font-mono">{exp.timeframe.start}</span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-[#F8FAFC]">
                        <Link
                          href={`/projects/${exp.slug}`}
                          className="hover:text-[#6366F1] transition-colors"
                        >
                          {exp.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#1E2433] flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-[#64748B]">
                        Status: {exp.status || "Completed"}
                      </span>
                      <Link
                        href={`/projects/${exp.slug}`}
                        className="text-xs font-semibold text-[#6366F1] hover:underline"
                      >
                        Read Details &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/50 p-12 text-center">
                <p className="text-sm text-[#94A3B8]">
                  No experiments documented yet.
                </p>
              </div>
            )}
          </section>
        </div>
      </Container>
    </div>
  );
}
