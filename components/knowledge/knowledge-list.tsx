"use client";

import { useState } from "react";
import Link from "next/link";
import type { KnowledgeArticle } from "@/types/content";

interface KnowledgeListProps {
  articles: KnowledgeArticle[];
  categories: { name: string; description: string }[];
}

export function KnowledgeList({ articles, categories }: KnowledgeListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Search & Filter */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search knowledge..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-[#1E2433] bg-[#12151E] px-4 py-2 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory("All")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                activeCategory === "All"
                  ? "bg-[#6366F1] text-white"
                  : "bg-[#1A1E2B] text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  activeCategory === cat.name
                    ? "bg-[#6366F1] text-white"
                    : "bg-[#1A1E2B] text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC]">
          Published Essays & Notes
        </h2>

        {filteredArticles.length > 0 ? (
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="rounded-xl border border-[#1E2433] bg-[#12151E] p-6 transition-colors hover:border-[#333E56]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                  {article.category && (
                    <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#6366F1] uppercase tracking-wider">
                      {article.category}
                    </span>
                  )}
                  {article.contentType && (
                    <span className="rounded bg-[#1A1E2B] px-2.5 py-1 font-medium text-[#94A3B8] uppercase tracking-wider">
                      {article.contentType}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-xs text-[#64748B] mb-1">
                  <span>{article.publishedAt}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readingTimeMinutes} min read</span>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC]">
                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="hover:text-[#6366F1] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="mt-4 pt-4 border-t border-[#1E2433]">
                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="text-xs font-semibold text-[#6366F1] hover:underline"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-[#1E2433] bg-[#12151E]/50 p-12 text-center">
            <div className="mx-auto max-w-md space-y-3">
              <p className="text-sm font-semibold text-[#F8FAFC]">
                {articles.length === 0 ? "Essays & Writing In Compilation" : "No Articles Found"}
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {articles.length === 0 
                  ? "Long-form essays, case studies, and practical frameworks across Marketing, AI, and Business are being published and developed from real experience."
                  : "Try adjusting your search query or category filter."}
              </p>
              {articles.length === 0 && (
                <div className="pt-2">
                  <Link
                    href="/topics"
                    className="inline-flex items-center text-xs font-semibold text-[#6366F1] hover:underline"
                  >
                    Explore Topic Taxonomy &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
