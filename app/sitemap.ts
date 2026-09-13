import { MetadataRoute } from "next";
import { getKnowledgeArticles, getProjects, getTopics } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/projects",
    "/knowledge",
    "/topics",
    "/work-with-me",
    "/contact",
  ].map((route) => ({
    url: getCanonicalUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projects = getProjects();
  const projectRoutes = projects.map((project) => {
    const rawDate = project.updatedAt || project.publishedAt;
    const parsedDate = rawDate ? new Date(rawDate) : new Date();
    const validDate = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;

    return {
      url: getCanonicalUrl(`/projects/${project.slug}`),
      lastModified: validDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const articles = getKnowledgeArticles();
  const articleRoutes = articles.map((article) => {
    const rawDate = article.updatedAt || article.publishedAt;
    const parsedDate = rawDate ? new Date(rawDate) : new Date();
    const validDate = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;

    return {
      url: getCanonicalUrl(`/knowledge/${article.slug}`),
      lastModified: validDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const topics = getTopics();
  const topicRoutes = topics.map((topic) => ({
    url: getCanonicalUrl(`/topics/${topic.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes, ...topicRoutes];
}
