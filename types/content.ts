/**
 * Content & Domain Model Types
 *
 * Core domain entities for Abhijith S Mohan's Personal Brand Knowledge System.
 * Aligned with the approved architecture entity relationship graph:
 * Person -> Capabilities -> Experience -> Projects -> Knowledge -> Topics -> Experiments -> Credentials
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
    | "case_study_doc"
    | "certificate"
    | "screenshot"
    | "media_coverage";
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
  platform:
    | "LinkedIn"
    | "X"
    | "GitHub"
    | "YouTube"
    | "Medium"
    | "Substack"
    | "Instagram"
    | "Website"
    | "Live Website"
    | "Collection Example"
    | "Other";
  username?: string;
  url: string;
  isPrimary: boolean;
}

/**
 * Experience entity representing career positions, advisory roles, and ventures.
 */
export interface Experience {
  id: string;
  title: string;
  role?: string;
  roleType: RoleType;
  organization: Organization;
  startDate?: string; // ISO format: YYYY-MM
  endDate?: string;  // ISO format or undefined for current
  isCurrent: boolean;
  location?: string;
  summary: string;
  responsibilities?: string[];
  highlights: string[];
  capabilities: Capability[];
  evidence?: ClaimEvidence[];
  externalLinks?: ExternalProfile[];
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
  shortDescription?: string;
  summary: string;
  projectType?: "Case Study" | "Client Work" | "Research Analysis" | "Experiment" | "Freelance / Client Work" | "Industrial / Academic Analysis";
  role?: string;
  roleType: RoleType;
  organization?: Organization;
  timeframe: {
    start?: string;
    end?: string;
  };
  status?: "Ongoing" | "Completed" | "Active R&D" | "Completed Client Work" | "Completed Project Work" | "Completed Internship Project";
  overview?: string;
  context?: string;
  problem?: string;
  approach?: string;
  personalContribution?: string;
  work?: string[];
  systems?: string[];
  deliverables?: string[];
  results?: string[];
  lessons?: string[];
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
  externalLinks?: ExternalProfile[];
  relatedKnowledgeSlugs?: string[];
  opportunity?: {
    heading: string;
    text: string;
    formula?: string;
    closing?: string;
  };
  roleDetails?: {
    roleLabel: string;
    bullets: string[];
    closing: string;
  };
  editorialSections?: {
    id: string;
    title: string;
    text: string;
    bullets?: string[];
  }[];
  selectedOutputs?: {
    category: string;
    description: string;
  }[];
  thinkingChanged?: {
    text1: string;
    formula: string;
    text2: string;
  };
  skillsDeveloped?: {
    category: string;
    skills: string[];
  }[];
  resultsTransparency?: {
    confident: string[];
    notClaimed: string[];
  };
  learningsDetailed?: string[];
  biggerStory?: {
    intro: string;
    progression: string;
    closing: string;
  };
  theIdea?: {
    intro: string;
    activities: string[];
    closing: string;
  };
  publicCoverage?: {
    title: string;
    publication: string;
    date: string;
    url?: string;
    description: string;
  }[];
  currentWorkStatus?: {
    ongoing: string[];
    earlyStageText: string;
    notPresentedAs: string[];
  };
  whatImLearning?: {
    text: string;
    formula: string;
    closing: string;
  };
  contentStrategySection?: {
    heading: string;
    text: string;
    formula: string;
    closing: string;
    areas: {
      title: string;
      text: string;
    }[];
  };
  roleGroups?: {
    category: string;
    bullets: string[];
  }[];
  strategyToExecution?: {
    heading: string;
    intro: string;
    formula: string;
    closing: string;
  };
  outcomesDeliverables?: {
    intro: string;
    items: {
      category: string;
      description: string;
    }[];
  };
  currentStatusSection?: {
    heading?: string;
    text: string;
  };
  currentWorkSection?: {
    heading?: string;
    intro: string;
    areas: {
      title: string;
      text: string;
    }[];
  };
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
  /**
   * Plain text body of the article. Paragraphs are delimited by double newlines (\n\n).
   * Do NOT store raw HTML here — the page renderer splits on \n\n and renders each
   * segment as a React <p> element. HTML tags will appear as literal text.
   */
  content?: string;
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

/**
 * Professional Credential & Certification Entity.
 */
export interface Credential {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  credentialId?: string;
  type: "Professional" | "Coursework" | "Academic";
  featured: boolean;
}
