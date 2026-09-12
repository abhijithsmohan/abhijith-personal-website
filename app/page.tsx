import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

/**
 * Personal Brand Homepage — Abhijith S Mohan (https://abhijithsmohan.in)
 * Founder Editorial visual refinement pass.
 * Storyline: Hero -> What I Do -> Selected Work -> Current Focus -> Knowledge -> Philosophy -> Work With Me
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-10 sm:gap-16 sm:py-16">
      {/* SECTION 1: HERO */}
      <section aria-labelledby="hero-heading" className="pt-2 sm:pt-6">
        <Container>
          <div className="flex flex-col items-start gap-6 max-w-4xl">
            {/* Eyebrow */}
            <p className="font-mono text-xs font-semibold tracking-widest text-[#6366F1] uppercase">
              MARKETING × AI × TECHNOLOGY × BUSINESS
            </p>

            {/* H1 Headline - Single H1 on Page */}
            <h1
              id="hero-heading"
              className="text-[36px] font-bold leading-[1.12] tracking-tight text-[#F8FAFC] sm:text-[54px] max-w-3xl"
            >
              Building Businesses at the Intersection of Marketing, AI &amp; Technology.
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-2xl text-[18px] leading-[1.65] text-[#94A3B8] sm:text-[20px]">
              I’m Abhijith S Mohan — an entrepreneur and business builder exploring how marketing, AI, technology and systems can turn opportunities into real businesses.
            </p>

            {/* CTAs */}
            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button variant="primary" href="/projects">
                Explore My Work
              </Button>
              <Button variant="secondary" href="/work-with-me">
                Work With Me
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: WHAT I DO */}
      <section aria-labelledby="what-i-do-heading" className="border-t border-[#1E2433] pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-xs font-medium tracking-wider text-[#64748B] uppercase">
                Capabilities
              </p>
              <h2
                id="what-i-do-heading"
                className="text-[20px] font-semibold tracking-tight text-[#F8FAFC] sm:text-[26px]"
              >
                What I Do
              </h2>
            </div>

            {/* 2x2 Capabilities Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Capability 1 */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#1E2433] bg-[#12151E] p-6 sm:p-7 transition-colors hover:border-[#333E56]">
                <span className="font-mono text-xs font-semibold text-[#6366F1]">01</span>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">Marketing &amp; Growth</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  Digital marketing, content, brand building, growth strategy and digital presence.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#1E2433] bg-[#12151E] p-6 sm:p-7 transition-colors hover:border-[#333E56]">
                <span className="font-mono text-xs font-semibold text-[#6366F1]">02</span>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">AI &amp; Business Integration</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  AI-assisted workflows, automation, business processes and practical AI applications.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#1E2433] bg-[#12151E] p-6 sm:p-7 transition-colors hover:border-[#333E56]">
                <span className="font-mono text-xs font-semibold text-[#6366F1]">03</span>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">Technology &amp; Digital Building</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  Websites, digital systems, infrastructure and exploration of software and digital products.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#1E2433] bg-[#12151E] p-6 sm:p-7 transition-colors hover:border-[#333E56]">
                <span className="font-mono text-xs font-semibold text-[#6366F1]">04</span>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">Business Strategy</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  Business models, opportunity identification, systems thinking and building new ventures.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: SELECTED WORK */}
      <section aria-labelledby="selected-work-heading" className="border-t border-[#1E2433] pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-xs font-medium tracking-wider text-[#64748B] uppercase">
                Portfolio
              </p>
              <h2
                id="selected-work-heading"
                className="text-[20px] font-semibold tracking-tight text-[#F8FAFC] sm:text-[26px]"
              >
                Selected Work
              </h2>
            </div>

            {/* Intentional Editorial Empty State */}
            <div className="rounded-lg border border-[#1E2433] bg-[#12151E]/60 p-8 sm:p-10 flex flex-col items-start gap-3">
              <span className="font-mono text-[11px] font-medium tracking-wider text-[#64748B] uppercase">
                [ 00 / PORTFOLIO INDEX ]
              </span>
              <p className="text-sm leading-relaxed text-[#94A3B8] max-w-xl">
                Selected work will appear here as projects and case studies are documented.
              </p>
            </div>

            {/* View All Projects CTA */}
            <div>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm font-medium text-[#6366F1] transition-colors hover:text-[#818CF8]"
              >
                View All Projects &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: CURRENT FOCUS & EXPLORATION */}
      <section aria-labelledby="current-focus-heading" className="border-t border-[#1E2433] pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-xs font-medium tracking-wider text-[#64748B] uppercase">
                R&amp;D &amp; Initiatives
              </p>
              <h2
                id="current-focus-heading"
                className="text-[20px] font-semibold tracking-tight text-[#F8FAFC] sm:text-[26px]"
              >
                Current Focus &amp; Exploration
              </h2>
            </div>

            {/* Intentional Editorial Empty State */}
            <div className="rounded-lg border border-[#1E2433] bg-[#12151E]/40 p-8 sm:p-10 flex flex-col items-start gap-3">
              <span className="font-mono text-[11px] font-medium tracking-wider text-[#64748B] uppercase">
                [ INITIATIVES &amp; R&amp;D ]
              </span>
              <p className="text-sm leading-relaxed text-[#94A3B8] max-w-xl">
                Documented focus areas and active exploration will appear here as ongoing builds and strategic notes are published.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: KNOWLEDGE */}
      <section aria-labelledby="knowledge-heading" className="border-t border-[#1E2433] pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-xs font-medium tracking-wider text-[#64748B] uppercase">
                Essays &amp; Thinking
              </p>
              <h2
                id="knowledge-heading"
                className="text-[20px] font-semibold tracking-tight text-[#F8FAFC] sm:text-[26px]"
              >
                Knowledge
              </h2>
            </div>

            {/* Intentional Editorial Empty State */}
            <div className="rounded-lg border border-[#1E2433] bg-[#12151E]/60 p-8 sm:p-10 flex flex-col items-start gap-3">
              <span className="font-mono text-[11px] font-medium tracking-wider text-[#64748B] uppercase">
                [ KNOWLEDGE INDEX ]
              </span>
              <p className="text-sm leading-relaxed text-[#94A3B8] max-w-xl">
                Essays, notes and deep-dives will appear here as I document what I’m learning, testing and building.
              </p>
            </div>

            {/* Explore Knowledge CTA */}
            <div>
              <Link
                href="/knowledge"
                className="inline-flex items-center text-sm font-medium text-[#6366F1] transition-colors hover:text-[#818CF8]"
              >
                Explore Knowledge &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: BUILDER PHILOSOPHY */}
      <section aria-labelledby="philosophy-heading" className="border-t border-[#1E2433] pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-xs font-medium tracking-wider text-[#64748B] uppercase">
                Approach
              </p>
              <h2
                id="philosophy-heading"
                className="text-[20px] font-semibold tracking-tight text-[#F8FAFC] sm:text-[26px]"
              >
                Builder Philosophy
              </h2>
            </div>

            {/* Editorial Highlight Block */}
            <div className="rounded-lg border-l-4 border-l-[#6366F1] border border-[#1E2433] bg-[#12151E] p-8 sm:p-10">
              <p className="font-mono text-base font-semibold tracking-tight text-[#F8FAFC] sm:text-xl leading-snug">
                See Opportunities &rarr; Build Systems &rarr; Execute Growth &rarr; Scale Businesses.
              </p>
              <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                Real business building comes from connecting growth marketing, AI-driven automation, and technology architecture into practical, repeatable operational systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 7: WORK WITH ME */}
      <section aria-labelledby="work-with-me-heading" className="border-t border-[#1E2433] pt-12 pb-6 sm:pt-16 sm:pb-10">
        <Container>
          <div className="rounded-lg border border-[#1E2433] bg-[#12151E] p-8 sm:p-10">
            <div className="flex flex-col gap-6 max-w-3xl">
              <div className="flex flex-col gap-1.5">
                <p className="font-mono text-xs font-semibold tracking-wider text-[#6366F1] uppercase">
                  Opportunity Gateway
                </p>
                <h2
                  id="work-with-me-heading"
                  className="text-[22px] font-semibold tracking-tight text-[#F8FAFC] sm:text-[28px]"
                >
                  Work With Me
                </h2>
              </div>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                Exploring new opportunities, strategic advisory, technical building, and high-impact business collaborations across:
              </p>

              {/* Engagement List */}
              <ul className="grid grid-cols-1 gap-2.5 text-sm text-[#F8FAFC] sm:grid-cols-2 font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-[#6366F1]">&rarr;</span> Marketing &amp; Growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#6366F1]">&rarr;</span> AI &amp; Business Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#6366F1]">&rarr;</span> Digital / Technology Building
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#6366F1]">&rarr;</span> Strategy
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="text-[#6366F1]">&rarr;</span> Partnerships &amp; Collaborations
                </li>
              </ul>

              {/* CTAs */}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button variant="primary" href="/work-with-me">
                  Work With Me
                </Button>
                <Button variant="secondary" href="/contact">
                  Direct Contact
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
