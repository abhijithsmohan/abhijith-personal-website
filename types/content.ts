/**
 * Content & Domain Model Types
 *
 * Core domain entities for Abhijith S Mohan's Personal Brand Knowledge System.
 * Aligned with the approved architecture entity relationship graph:
 * Person -> Capabilities -> Experience -> Projects -> Knowledge -> Topics -> Experiments -> Timeline
 */

/**
 * Strict role classification for Projects & Case Studies.
 * Enforces transparency and prevents implying a stronger role than source data supports.
 */
export type RoleType =
  | "Founder"
  | "Co-founder"
  | "Employee"
  | "Team Member"
  | "Freelance"
  | "Client Work"
  | "Experiment";

/**
 * Verification status rating for claims and metric statements.
 */
export type VerificationStatus =
  | "verified"
  | "self_reported"
  | "anonymized_confidential";

/**
 * Evidence item backing a specific claim or achievement.
 */
export interface ClaimEvidence {
  id: string;
  claimStatement: string;
  evidenceType:
    | "live_url"
    | "code_repository"
    | "client_testimonial"
    | "metric_log"
    | "case_study_doc";
  evidenceUrl?: string;
  verificationStatus: VerificationStatus;
  approvedUsage: "public" | "private_case_study";
}

/**
 * Capability pillar representing core domain expertise.
 * Core territory: Marketing × AI × Technology × Business
 */
export interface Capability {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName?: string;
  featured: boolean;
}

/**
 * Organization entity (Companies, Clients, Ventures).
 */
export interface Organization {
  id: string;
  name: string;
  slug: string;
  url?: string;
  logoUrl?: string;
  description?: string;
}

/**
 * External Profile entity for social and professional identities.
 */
export interface ExternalProfile {
  platform: "LinkedIn" | "X" | "GitHub" | "YouTube" | "Medium" | "Substack" | "Other";
  username: string;
  url: string;
  isPrimary: boolean;
}

/**
 * Experience entity representing career positions, advisory roles, and ventures.
 */
export interface Experience {
  id: string;
  title: string;
  roleType: RoleType;
  organization: Organization;
  startDate: string; // ISO format: YYYY-MM
  endDate?: string;  // ISO format or undefined for current
  isCurrent: boolean;
  location?: string;
  summary: string;
  highlights: string[];
  capabilities: Capability[];
}

/**
 * Topic Entity for taxonomy and content clustering.
 */
export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
  capabilityCategory: string;
  featured: boolean;
}

/**
 * Project / Case Study Entity.
 */
export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  summary: string;
  roleType: RoleType;
  organization?: Organization;
  timeframe: {
    start: string;
    end?: string;
  };
  featured: boolean;
  topics: Topic[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  claimsAndEvidence?: ClaimEvidence[];
  liveUrl?: string;
  githubUrl?: string;
  publishedAt: string;
  updatedAt?: string;
}

/**
 * Knowledge Article / Essay Entity.
 */
export interface KnowledgeArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  featured: boolean;
  topics: Topic[];
  relatedProjectSlugs?: string[];
  canonicalUrl?: string;
}

/**
 * Experiment / R&D Log Entity.
 */
export interface Experiment {
  id: string;
  title: string;
  slug: string;
  summary: string;
  date: string;
  status: "Active" | "Completed" | "Archived";
  techStack: string[];
  topics: Topic[];
  githubUrl?: string;
  demoUrl?: string;
}

/**
 * Timeline Item for chronological career & milestone tracking.
 */
export interface TimelineItem {
  id: string;
  year: string;
  date: string;
  title: string;
  category: "Venture" | "Achievement" | "Career" | "Publication" | "Milestone";
  description: string;
  relatedSlug?: string;
}
