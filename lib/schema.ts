import { Project, KnowledgeArticle } from "@/types/content";
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
      "Marketing",
      "Artificial Intelligence",
      "Business",
      "Digital Marketing",
      "Business Strategy",
      "Entrepreneurship",
      "AI for Business",
      "Marketing Strategy",
      "Automation",
      "Systems Thinking",
      "Technology",
      "Digital Products",
      "Web Development",
      "Digital Infrastructure",
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
      "Abhijith S Mohan is an entrepreneur and business builder exploring how marketing and AI can be used to build better businesses.",
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

export function getArticleSchema(article: KnowledgeArticle) {
  const url = getCanonicalUrl(`/knowledge/${article.slug}`);
  const articleId = `${url}#article`;

  const parsedDatePub = new Date(article.publishedAt);
  const datePublished = !isNaN(parsedDatePub.getTime())
    ? parsedDatePub.toISOString()
    : undefined;

  const parsedDateMod = article.updatedAt ? new Date(article.updatedAt) : null;
  const dateModified = parsedDateMod && !isNaN(parsedDateMod.getTime())
    ? parsedDateMod.toISOString()
    : undefined;

  // Use TechArticle for Technology, Systems, AI, else general Article
  const type = ["Technology", "Systems", "AI"].includes(article.category) ? "TechArticle" : "Article";

  return {
    "@type": type,
    "@id": articleId,
    url: url,
    headline: article.title,
    description: article.excerpt,
    author: {
      "@id": PERSON_ID,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    mainEntityOfPage: {
      "@id": `${url}#webpage`,
    },
  };
}

export function generatePageGraph(options: {
  path: string;
  title: string;
  description: string;
  project?: Project;
  article?: KnowledgeArticle;
}) {
  const graph: Array<Record<string, unknown>> = [
    getPersonSchema(),
    getWebSiteSchema(),
    getWebPageSchema(options.path, options.title, options.description),
  ];

  if (options.project) {
    graph.push(getCreativeWorkSchema(options.project));
  }
  
  if (options.article) {
    graph.push(getArticleSchema(options.article));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
