/**
 * SEO & Schema.org Structured Data Types
 *
 * Provides type contracts for metadata generation and Schema.org JSON-LD graph objects.
 * Production Domain: https://abhijithsmohan.in
 */

/**
 * Base Page SEO Parameters.
 */
export interface PageSeo {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Schema.org Person Graph Definition.
 * Represents Abhijith S Mohan as the canonical entity.
 */
export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  "@id": string; // e.g. https://abhijithsmohan.in/#person
  name: string;
  jobTitle: string;
  url: string;
  knowsAbout: string[];
  sameAs: string[];
}

/**
 * Schema.org WebSite Graph Definition.
 */
export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  "@id": string; // e.g. https://abhijithsmohan.in/#website
  url: string;
  name: string;
  publisher: {
    "@id": string;
  };
}

/**
 * Schema.org Article / TechArticle Graph Definition.
 */
export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "TechArticle" | "Article";
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: {
    "@type": "Person";
    name: string;
    url: string;
  };
  url: string;
  mainEntityOfPage: string;
}

/**
 * Schema.org CreativeWork / SoftwareApplication Graph Definition.
 */
export interface CreativeWorkSchema {
  "@context": "https://schema.org";
  "@type": "CreativeWork" | "SoftwareApplication";
  name: string;
  description: string;
  author: {
    "@type": "Person";
    name: string;
  };
  url?: string;
}
