import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and collaboration guidance for Abhijith S Mohan across marketing, AI, technology, business strategy, and project opportunities.",
  openGraph: {
    title: "Contact",
    description:
      "Contact and collaboration guidance for Abhijith S Mohan across marketing, AI, technology, business strategy, and project opportunities.",
    url: "https://abhijithsmohan.in/contact",
  },
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
};

const inquiryTypes = [
  "Marketing and growth projects",
  "AI-assisted workflow exploration",
  "Website and digital project coordination",
  "Business strategy and early-stage ideas",
  "Partnerships, collaborations, and community initiatives",
];

export default function ContactPage() {
  const jsonLdGraph = generatePageGraph({
    path: "/contact",
    title: "Contact | Abhijith S Mohan",
    description:
      "Contact and collaboration guidance for Abhijith S Mohan across marketing, AI, technology, business strategy, and project opportunities.",
  });

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
          <header className="border-b border-[#1E2433] pb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
              Contact
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
              Start a Conversation
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[#94A3B8]">
              For project discussions, collaboration ideas, and professional inquiries connected to marketing, AI, technology, and business building.
            </p>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                How to Connect
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#94A3B8]">
                A dedicated public personal email, phone number, or address is not listed in the current repository content. To keep this page accurate, those details are not being fabricated here.
              </p>
            </div>

            <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#F8FAFC]">
                    Best Starting Point
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    If the inquiry is about working together, the clearest next step is the Work With Me page. It outlines the collaboration areas already approved for the site.
                  </p>
                  <div className="pt-2">
                    <Button variant="primary" href="/work-with-me">
                      Work With Me
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 border-t border-[#1E2433] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Useful Context
                  </p>
                  <ul className="space-y-2 text-sm text-[#94A3B8]">
                    {inquiryTypes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 text-[#6366F1]">-&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Before Reaching Out
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#94A3B8]">
                A good conversation usually starts with the project context, the problem being explored, and where support or collaboration might be useful.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/work"
                className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 transition-colors hover:border-[#333E56]"
              >
                <span className="text-xs font-mono text-[#6366F1]">01</span>
                <h3 className="mt-2 text-base font-bold text-[#F8FAFC]">
                  Review Work
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                  See current roles, professional experience, and the practical areas Abhijith works across.
                </p>
              </Link>

              <Link
                href="/projects"
                className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 transition-colors hover:border-[#333E56]"
              >
                <span className="text-xs font-mono text-[#6366F1]">02</span>
                <h3 className="mt-2 text-base font-bold text-[#F8FAFC]">
                  Explore Projects
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                  Read case studies, research work, and experiments before framing a collaboration.
                </p>
              </Link>
            </div>
          </section>

          <section className="rounded-xl border border-[#1E2433] bg-[#12151E] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-[#F8FAFC]">
              Collaboration Starts With Clarity
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#94A3B8]">
              Share the opportunity, the current stage, the expected outcome, and any constraints. The goal is to keep the conversation grounded and useful from the beginning.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button variant="primary" href="/work-with-me">
                Work With Me
              </Button>
              <Button variant="secondary" href="/projects">
                View Projects
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
