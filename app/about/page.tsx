import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getCredentials } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abhijith S Mohan, an entrepreneur and business builder exploring how marketing and AI can be used to build better businesses.",
  openGraph: {
    title: "About",
    description:
      "Learn about Abhijith S Mohan, an entrepreneur and business builder exploring how marketing and AI can be used to build better businesses.",
    url: "https://abhijithsmohan.in/about",
  },
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
};

export default function AboutPage() {
  const credentials = getCredentials();

  const jsonLdGraph = generatePageGraph({
    path: "/about",
    title: "About",
    description:
      "Learn about Abhijith S Mohan, an entrepreneur and business builder exploring how marketing and AI can be used to build better businesses.",
  });

  const exploreList = [
    "How AI changes the way businesses operate",
    "How small teams can use technology to build efficiently",
    "AI-assisted workflows and automation",
    "Data and decision-making",
    "Websites and digital infrastructure",
    "SaaS and digital products",
    "Business systems",
    "Entrepreneurship and venture building",
  ];

  const focusAreas = [
    {
      title: "Marketing & Growth",
      description:
        "Digital marketing, content, brand building, growth strategy and digital presence.",
    },
    {
      title: "AI & Business Integration",
      description:
        "AI-assisted workflows, automation, business processes and practical applications of AI.",
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

  return (
    <div className="py-16 md:py-24">
      <JsonLd schema={jsonLdGraph} />
      <Container>
        <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
          {/* HEADER / INTRO */}
          <header className="border-b border-[#1E2433] pb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
              About
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
              Abhijith S Mohan
            </h1>
            <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-[#94A3B8]">
              <p className="font-medium text-[#F8FAFC]">
                I’m Abhijith S Mohan — an entrepreneur and business builder exploring how marketing and AI can be used to build better businesses.
              </p>
              <p>
                My work has taken me across digital marketing, content, data, creative production, project coordination and technology. Along the way, I&apos;ve worked with businesses, experimented with ideas, helped build a community initiative, and increasingly moved toward understanding how technology and AI can be used to build better systems and businesses.
              </p>
              <p>
                I’m interested in the space where ideas meet execution — understanding a problem, identifying an opportunity, building a practical solution and learning from what happens.
              </p>
            </div>
          </header>

          {/* 2. HOW I STARTED */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              How I Started
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
              <p>
                My interest in technology started early through computers and experimentation with things like Python and SQL.
              </p>
              <p>
                I also became increasingly interested in business, marketing and entrepreneurship. That eventually led me toward a BBA in Marketing and, alongside my education, into practical work rather than limiting my learning to the classroom.
              </p>
              <p>That combination became important to how I think today:</p>
            </div>

            {/* Formula Block */}
            <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center overflow-x-auto">
              <p className="text-sm font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-base whitespace-nowrap">
                Learn <span className="text-[#6366F1]">&rarr;</span> Experiment <span className="text-[#6366F1]">&rarr;</span> Build <span className="text-[#6366F1]">&rarr;</span> Reflect <span className="text-[#6366F1]">&rarr;</span> Improve
              </p>
            </div>
          </section>

          {/* 3. FROM LEARNING TO DOING */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              From Learning to Doing
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
              <p>
                My first formal professional exposure came through a Digital Marketing internship at Plasmid, where I worked from July to September 2024. During the internship, I worked on industrial projects and explored digital marketing through research and practical assignments. I also completed a digital marketing analysis project focused on McDonald&apos;s strategy in India.
              </p>
              <p>
                I then gained deeper hands-on experience at Planet Jewel, working as a Digital Promoter. My work expanded across social media, content strategy, photography, video production, editing, campaigns, influencer coordination and customer-facing digital activity.
              </p>
              <p>That experience taught me something important:</p>
            </div>

            {/* Quote Block */}
            <blockquote className="rounded-xl border-l-2 border-[#6366F1] bg-[#12151E] p-6 text-base italic text-[#F8FAFC]">
              “Marketing isn&apos;t only about creating content. It&apos;s connected to people, products, operations, sales and the business itself.”
            </blockquote>
          </section>

          {/* 4. BUILDING BEYOND MARKETING */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              Building Beyond Marketing
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
              <p>
                Over time, my interests expanded beyond marketing.
              </p>
              <p>
                Through Live by ONC, where I am a founding member/co-founder, I explored community building, events, collaboration, marketing and team development.
              </p>
              <p>
                Through freelance work such as Pooja Vysh Makeovers and projects such as TOHVA, I continued working across strategy, creative production, AI-assisted content and project coordination.
              </p>
              <p>
                And through my current work at Define Perspective, my role has expanded into Digital Marketing and Data Analysis, while my involvement in DP AI Labs has taken me further into technology, project management and team leadership.
              </p>
            </div>
          </section>

          {/* 5. WHAT I DO TODAY */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              What I Do Today
            </h2>
            <p className="text-base text-[#94A3B8]">
              Today, my work sits across several connected areas:
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
                >
                  <h3 className="text-base font-bold text-[#F8FAFC]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-base leading-relaxed text-[#94A3B8] space-y-1">
              <p>I don&apos;t see these as separate disciplines.</p>
              <p className="text-[#F8FAFC] font-medium">I&apos;m interested in how they connect.</p>
            </div>
          </section>

          {/* 6. WHAT I'M EXPLORING */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              What I&apos;m Exploring
            </h2>
            <p className="text-base text-[#94A3B8]">
              I&apos;m currently exploring deeper questions around:
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {exploreList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-[#1E2433] bg-[#12151E]/60 p-4 text-sm text-[#94A3B8]"
                >
                  <span className="mt-0.5 text-[#6366F1] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-base leading-relaxed text-[#94A3B8]">
              <p>
                Some of these are active projects. Others are experiments or areas I&apos;m still learning about.
              </p>
              <p className="text-[#F8FAFC] font-medium">
                I&apos;m comfortable being a work in progress.
              </p>
            </div>
          </section>

          {/* 7. WHAT I'M BUILDING TOWARD */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              What I&apos;m Building Toward
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
              <p>
                My long-term direction is to build businesses, products and systems that solve real problems.
              </p>
              <p>
                I&apos;m interested in startups, AI and technology businesses, digital products, marketing businesses, platforms, communities and other opportunities where technology and business can come together.
              </p>
              <p>The specific ventures will evolve.</p>
              <p className="text-[#F8FAFC] font-medium">The underlying direction won&apos;t:</p>
            </div>

            {/* Direction Formula */}
            <div className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 text-center overflow-x-auto">
              <p className="text-sm font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-base whitespace-nowrap">
                See opportunities <span className="text-[#6366F1]">&rarr;</span> Build systems <span className="text-[#6366F1]">&rarr;</span> Execute <span className="text-[#6366F1]">&rarr;</span> Learn <span className="text-[#6366F1]">&rarr;</span> Scale
              </p>
            </div>
          </section>

          {/* 8. SELECTED CREDENTIALS */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Selected Credentials
              </h2>
              <p className="mt-2 text-base text-[#94A3B8]">
                My formal learning currently spans several areas, including:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((cred) => (
                <div
                  key={cred.id}
                  className="rounded-xl border border-[#1E2433] bg-[#12151E] p-5 transition-colors hover:border-[#333E56]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
                    <span>{cred.issuer}</span>
                    <span className="rounded bg-[#1A1E2B] px-2 py-0.5 text-[10px] font-medium text-[#6366F1]">
                      {cred.type}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-[#F8FAFC]">
                    {cred.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-base leading-relaxed text-[#94A3B8]">
              <p>
                I&apos;ve also completed additional coursework across AI, data analytics, social media marketing, advertising, business intelligence and business analysis through Google, Meta and IBM.
              </p>
              <p>
                These credentials represent structured learning alongside the practical experience I&apos;ve gained through projects and professional work.
              </p>
            </div>
          </section>

          {/* 9. CLOSING */}
          <section className="rounded-xl border border-[#1E2433] bg-gradient-to-br from-[#12151E] to-[#1A1E2B] p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                Still Building
              </h2>
              <div className="space-y-3 text-base leading-relaxed text-[#94A3B8]">
                <p>I&apos;m still learning, experimenting and figuring things out.</p>
                <div className="space-y-1 text-sm sm:text-base text-[#F8FAFC] font-medium">
                  <p>Some projects become meaningful work.</p>
                  <p>Some become experiments.</p>
                  <p>Some don&apos;t work.</p>
                </div>
                <p>I see all of them as part of the same process:</p>
                <p className="pt-2 text-sm font-mono font-semibold tracking-wide text-[#F8FAFC] sm:text-base">
                  Build. Learn. Improve. Build again.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E2433] flex flex-wrap gap-4">
              <Button variant="primary" href="/work">
                Explore My Work
              </Button>
              <Button variant="secondary" href="/topics">
                Explore My Thinking
              </Button>
              <Button variant="secondary" href="/work-with-me">
                Work With Me
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
