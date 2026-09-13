import { Project } from "@/types/content";
import { getCanonicalUrl } from "@/lib/utils";

export const PERSON_ID = "https://abhijithsmohan.in/#person";
export const WEBSITE_ID = "https://abhijithsmohan.in/#website";

export function getPersonSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Abhijith S Mohan",
    url: "https://abhijithsmohan.in",
    jobTitle: "Entrepreneur & Business Builder",
    knowsAbout: [
      "Digital Marketing",
      "Artificial Intelligence",
      "Technology",
      "Business Strategy",
      "Business Systems",
    ],
    sameAs: ["https://github.com/abhijithsmohan"],
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: "https://abhijithsmohan.in",
    name: "Abhijith S Mohan",
    description:
      "Building Businesses at the Intersection of Marketing, AI & Technology.",
    publisher: {
      "@id": PERSON_ID,
    },
  };
}

export function getWebPageSchema(
  path: string,
  title: string,
  description: string
) {
  const url = getCanonicalUrl(path);
  const webpageId = `${url}#webpage`;

  return {
    "@type": "WebPage",
    "@id": webpageId,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    author: {
      "@id": PERSON_ID,
    },
    about: {
      "@id": PERSON_ID,
    },
  };
}

export function getCreativeWorkSchema(project: Project) {
  const url = getCanonicalUrl(`/projects/${project.slug}`);
  const creativeWorkId = `${url}#creativework`;

  const rawDate = project.updatedAt || project.publishedAt;
  const parsedDate = rawDate ? new Date(rawDate) : null;
  const publishedDate =
    parsedDate && !isNaN(parsedDate.getTime())
      ? parsedDate.toISOString().split("T")[0]
      : undefined;

  return {
    "@type": "CreativeWork",
    "@id": creativeWorkId,
    url: url,
    name: project.title,
    description: project.shortDescription || project.tagline || project.summary,
    author: {
      "@id": PERSON_ID,
    },
    ...(publishedDate ? { datePublished: publishedDate } : {}),
    isPartOf: {
      "@id": `${url}#webpage`,
    },
  };
}

export function generatePageGraph(options: {
  path: string;
  title: string;
  description: string;
  project?: Project;
}) {
  const graph: Array<Record<string, unknown>> = [
    getPersonSchema(),
    getWebSiteSchema(),
    getWebPageSchema(options.path, options.title, options.description),
  ];

  if (options.project) {
    graph.push(getCreativeWorkSchema(options.project));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
