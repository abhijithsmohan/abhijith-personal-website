import {
  Experience,
  Project,
  KnowledgeArticle,
  Topic,
  Credential,
} from "@/types/content";

/**
 * Approved Topics Taxonomy
 */
export const topics: Topic[] = [
  {
    id: "marketing-growth",
    name: "Marketing & Growth",
    slug: "marketing-growth",
    description:
      "Digital marketing, content planning, brand building, growth strategy, and digital presence.",
    capabilityCategory: "Marketing & Growth",
    featured: true,
  },
  {
    id: "ai-business-integration",
    name: "AI & Business Integration",
    slug: "ai-business-integration",
    description:
      "AI-assisted workflows, automation, operational efficiency, and practical AI applications.",
    capabilityCategory: "AI & Business Integration",
    featured: true,
  },
  {
    id: "technology-digital-building",
    name: "Technology & Digital Building",
    slug: "technology-digital-building",
    description:
      "Websites, digital systems, infrastructure, and software/digital product exploration.",
    capabilityCategory: "Technology & Digital Building",
    featured: true,
  },
  {
    id: "business-strategy",
    name: "Business Strategy",
    slug: "business-strategy",
    description:
      "Business models, opportunity identification, systems thinking, and venture building.",
    capabilityCategory: "Business Strategy",
    featured: true,
  },
];

/**
 * Approved Real Professional Experience Records
 */
export const experiences: Experience[] = [
  {
    id: "define-perspective",
    title: "Digital Marketer & Data Analyst",
    role: "Digital Marketer & Data Analyst",
    roleType: "Employee",
    organization: {
      id: "org-dp",
      name: "Define Perspective",
      slug: "define-perspective",
      url: "https://defineperspective.in/",
      description: "Digital media and creative agency",
    },
    startDate: "2024-06",
    isCurrent: true,
    summary:
      "Digital marketing, data analytics, leading social media marketing for the main Define Perspective account, and AI production social media work.",
    highlights: [
      "Digital marketing & analytics strategy execution",
      "Social media marketing leadership for main Define Perspective channels",
      "Work related to AI production social media channels",
    ],
    capabilities: [topics[0], topics[1]],
    externalLinks: [
      {
        platform: "Website",
        url: "https://defineperspective.in/",
        isPrimary: true,
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/defineperspective/",
        isPrimary: false,
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/dpaistudios/",
        isPrimary: false,
      },
    ],
  },
  {
    id: "dp-ai-labs",
    title: "IT Team Lead & Project Manager",
    role: "IT Team Lead & Project Manager",
    roleType: "Team Member",
    organization: {
      id: "org-dp-ai-labs",
      name: "DP AI Labs",
      slug: "dp-ai-labs",
      description: "Early-stage IT & AI research lab",
    },
    isCurrent: true,
    summary:
      "Leading the IT team, coordinating intern workflows, project-managing website builds, and exploring software/SaaS products.",
    highlights: [
      "Team leadership and intern workflow coordination",
      "Website project management and execution tracking",
      "SaaS and digital product concept exploration",
    ],
    capabilities: [topics[1], topics[2]],
  },
  {
    id: "planet-jewel",
    title: "Digital Promoter",
    role: "Digital Promoter",
    roleType: "Employee",
    organization: {
      id: "org-planet-jewel",
      name: "Planet Jewel",
      slug: "planet-jewel",
      description: "Jewellery retail brand",
    },
    startDate: "2024-05",
    endDate: "2025-06",
    isCurrent: false,
    summary:
      "Restarted and built Planet Jewel's digital presence across social operations, content strategy, product photography, video editing, customer interaction, and catalog marketing.",
    highlights: [
      "Social media operations, content planning, and account revival",
      "Product photography, video shooting, editing, and copy creation",
      "Instagram management, customer inquiries, and supporting in-store promotions",
    ],
    capabilities: [topics[0]],
  },
  {
    id: "plasmid",
    title: "Digital Marketing Intern",
    role: "Digital Marketing Intern",
    roleType: "Employee",
    organization: {
      id: "org-plasmid",
      name: "Plasmid",
      slug: "plasmid",
      description: "Industrial training & research institute",
    },
    startDate: "2024-07",
    endDate: "2024-09",
    isCurrent: false,
    summary:
      "Two-month digital marketing internship completing industrial training and digital marketing research analysis.",
    highlights: [
      "Digital marketing strategies & campaign analytics coursework",
      "In-depth research analysis of enterprise digital marketing strategies",
    ],
    capabilities: [topics[0]],
    evidence: [
      {
        id: "ev-plasmid-cert",
        claimStatement:
          "Completed 2-month Digital Marketing Internship at Plasmid (July 1 - Sept 1, 2024).",
        evidenceType: "certificate",
        verificationStatus: "verified",
        approvedUsage: "public",
      },
    ],
  },
  {
    id: "live-by-onc",
    title: "Founding Member / Co-founder",
    role: "Founding Member / Co-founder",
    roleType: "Co-founder",
    organization: {
      id: "org-onc",
      name: "Live by ONC / Oru New Culture",
      slug: "live-by-onc",
      description: "Cultural events and community initiative",
    },
    startDate: "2024-01",
    isCurrent: true,
    summary:
      "Community initiative focused on cultural events, artist exposure, community experiences, and collaborations.",
    highlights: [
      "Marketing research and strategic direction",
      "Social media, event coordination, and team building",
      "Business structuring and operational strategy",
    ],
    capabilities: [topics[0], topics[3]],
  },
];

/**
 * Approved Real Projects & Case Studies
 */
export const projects: Project[] = [
  {
    id: "tohva",
    title: "TOHVA — Natural Stone Jewellery",
    slug: "tohva",
    tagline: "AI · Product Photography · Project Coordination",
    shortDescription: "A case study of Abhijith S Mohan's work as Project Coordinator on TOHVA, combining AI-assisted product photography, creative coordination and commercial product presentation.",
    summary:
      "TOHVA is a premium natural stone jewellery sub-brand of Planet Jewel. My involvement focused on coordinating the production of digital product visuals and content for the brand, with particular emphasis on AI-powered product photography.",
    projectType: "Case Study",
    role: "Project Coordinator",
    roleType: "Client Work",
    organization: {
      id: "org-tohva",
      name: "Planet Jewel / TOHVA",
      slug: "tohva",
      description: "Planet Jewel Sub-brand · Premium Natural Stone Jewellery",
      url: "https://tohva.com/",
    },
    timeframe: { start: "August 2024", end: "October 2024" },
    status: "Completed",
    overview:
      "TOHVA is a premium natural stone jewellery sub-brand of Planet Jewel.\n\nMy involvement focused on coordinating the production of digital product visuals and content for the brand, with particular emphasis on AI-powered product photography.\n\nThe project brought together creative production, AI-assisted workflows, product presentation and coordination between different people involved in the content process.",
    opportunity: {
      heading: "The Context",
      text: "Jewellery e-commerce requires product imagery that communicates the product clearly while maintaining a consistent visual identity across a collection.\n\nFor TOHVA, the challenge was to create polished, platform-ready product visuals while working within practical production and budget constraints.\n\nThe work therefore involved more than generating individual images.\n\nIt required coordinating:",
      formula: "Product → Creative Direction → AI Production → Review → Refinement → Final Asset",
      closing: "This structure ensured every piece of visual content remained aligned with commercial expectations.",
    },
    roleDetails: {
      roleLabel: "Project Coordinator",
      bullets: [
        "AI-powered product photography",
        "Product requirements",
        "Creative direction",
        "Designer coordination",
        "Copywriter coordination",
        "Client requirements",
        "Timeline coordination",
        "Content consistency",
        "Review and refinement",
        "Final asset preparation",
      ],
      closing: "My role was primarily about connecting the different parts of the production process and keeping the output aligned with the project's requirements.",
    },
    editorialSections: [
      {
        id: "ai-product-photography",
        title: "AI-Powered Product Photography",
        text: "One of the central components of the project was using AI to create product photography for the jewellery collection.\n\nThe objective was to produce visuals that could present the products in a polished and commercially usable way without relying entirely on conventional physical photography for every asset.\n\nThe workflow involved:\n\nProduct Reference → AI Generation → Creative Review → Refinement → Final Visual\n\nThis gave me practical experience using AI as a production tool, rather than treating it simply as an image-generation experiment.",
      },
      {
        id: "creative-direction-consistency",
        title: "Creative Direction & Consistency",
        text: "AI-generated product imagery can easily become inconsistent across a collection.\n\nPart of my responsibility was therefore coordinating the visual direction and checking that the outputs remained aligned with the product and brand requirements.\n\nThis involved paying attention to:\n\n• Product appearance\n• Composition\n• Presentation\n• Visual consistency\n• Brand requirements\n• Platform suitability\n\nThe goal was not simply to create attractive images, but to create a coherent set of product visuals.",
      },
      {
        id: "working-across-team",
        title: "Working Across the Production Team",
        text: "The project required coordination between different contributors.\n\nI worked around:\n\nDesigners → Copywriters → Creative Production → Client Requirements\n\nMy role involved helping communicate requirements, coordinate timelines and keep the different parts of the project moving toward the required output.\n\nThis strengthened my experience in creative project coordination, where successful delivery depends on keeping multiple contributors aligned.",
      },
      {
        id: "ai-experiment-to-commercial",
        title: "From AI Experiment to Commercial Output",
        text: "One of the most useful aspects of the project was seeing AI move from experimentation into a practical commercial workflow.\n\nThe process was:\n\nExperiment → Evaluate → Refine → Standardize → Deliver\n\nThis helped me understand that using AI effectively isn't simply about generating something impressive.\n\nThe real challenge is creating an output that is:\n\n• Consistent\n• Useful\n• On-brand\n• Product-accurate\n• Platform-ready\n• Practical within the project's constraints",
      },
    ],
    selectedOutputs: [
      {
        category: "AI PRODUCT PHOTOGRAPHY",
        description: "AI-assisted product visuals for natural stone jewellery.",
      },
      {
        category: "E-COMMERCE VISUALS",
        description: "Product imagery prepared for digital and platform use.",
      },
      {
        category: "CONTENT COORDINATION",
        description: "Coordinated creative and content requirements across the production process.",
      },
      {
        category: "COLLECTION CONSISTENCY",
        description: "A consistent visual approach across the required product assets.",
      },
    ],
    outcomesDeliverables: {
      intro: "The project resulted in polished, platform-ready visual and content assets for TOHVA's digital/e-commerce presence, delivered through an AI-assisted production workflow.",
      items: [
        {
          category: "PRODUCTION OUTCOME",
          description: "Polished, platform-ready visual and content assets for TOHVA's digital presence.",
        },
        {
          category: "WORKFLOW EFFICIENCY",
          description: "Delivered through an AI-assisted production workflow within practical production and budget constraints.",
        },
      ],
    },
    whatImLearning: {
      text: "TOHVA helped me understand the difference between using AI and building an AI-assisted workflow.\n\nGenerating one good image is relatively easy.\n\nCreating a consistent collection requires:",
      formula: "Requirements → Process → Direction → Generation → Review → Refinement → Delivery",
      closing: "The project strengthened my understanding of AI as a practical business and production tool.\n\nIt also showed me how important coordination becomes when creative work involves multiple people, requirements and deliverables.",
    },
    skillsDeveloped: [
      {
        category: "AI & CREATIVE PRODUCTION",
        skills: [
          "AI-assisted product photography",
          "AI image generation workflows",
          "Product visual presentation",
          "Creative review",
          "Visual consistency",
        ],
      },
      {
        category: "PROJECT COORDINATION",
        skills: [
          "Requirement coordination",
          "Timeline coordination",
          "Team communication",
          "Review and refinement",
          "Deliverable management",
        ],
      },
      {
        category: "COMMERCIAL THINKING",
        skills: [
          "E-commerce presentation",
          "Product communication",
          "Platform-ready content",
          "Working within production constraints",
        ],
      },
    ],
    externalLinks: [
      {
        platform: "Live Website",
        url: "https://tohva.com/",
        isPrimary: true,
      },
      {
        platform: "Collection Example",
        url: "https://tohva.com/collections/anklets",
        isPrimary: false,
      },
    ],
    biggerStory: {
      intro: "TOHVA represents an important step in the evolution of my creative and technology work.\n\nAt Planet Jewel, I worked extensively with traditional content production:\n\nPhotography → Video → Editing → Campaigns\n\nTOHVA introduced another layer:",
      progression: "AI → Creative Production → Coordination → Commercial Output",
      closing: "That experience strengthened my interest in how AI can change the way businesses produce content and operate creative workflows.",
    },
    work: [
      "Project planning & workflow timeline management",
      "AI-powered product photography and image editing",
      "Designer & copywriter coordination",
      "Delivery of platform-ready assets for e-commerce and catalog use",
    ],
    featured: true,
    topics: [topics[0], topics[1]],
    techStack: [
      "AI Photography Tools",
      "Creative Direction",
      "Photoshop",
      "Content Coordination",
      "E-Commerce Workflows",
    ],
    relatedKnowledgeSlugs: ["how-im-exploring-ai-for-business", "from-marketing-to-building-why-im-learning-to-build-digital-things", "what-im-building-right-now"],
    metrics: [{ label: "Focus", value: "AI Product Photography" }],
    publishedAt: "2024-10-15",
  },
  {
    id: "pooja-vysh-makeovers",
    title: "Pooja Vysh Makeovers — Bridal Beauty Brand Strategy",
    slug: "pooja-vysh-makeovers",
    tagline: "Building a clearer content system and client-facing brand experience for a bridal makeup business.",
    shortDescription: "A case study of Abhijith S Mohan's freelance work with Pooja Vysh Makeovers, covering social media strategy, content systems, AI-assisted creative production and bridal client experience.",
    summary:
      "Pooja Vysh Makeovers is a bridal makeup and beauty brand. Abhijith worked as a freelance creative and marketing consultant, contributing to social media strategy, content planning, workflow development and AI-assisted creative production.",
    projectType: "Freelance / Client Work",
    role: "Creative & Freelance Marketing Consultant",
    roleType: "Freelance",
    organization: {
      id: "org-pooja-vysh",
      name: "Pooja Vysh Makeovers",
      slug: "pooja-vysh-makeovers",
      description: "Bridal Beauty Brand · Kerala / India",
    },
    timeframe: { start: "June 2024 – August 2024" },
    status: "Completed Client Work",
    overview:
      "Pooja Vysh Makeovers is a bridal makeup and beauty brand.\n\nAbhijith worked as a freelance creative and marketing consultant, contributing to social media strategy, content planning, workflow development and AI-assisted creative production.\n\nThe work focused on helping structure how the brand could communicate its expertise, showcase bridal work, educate potential clients and present a more organized client experience.",
    opportunity: {
      heading: "The Context",
      text: "A bridal makeup brand needs more than portfolio images.\n\nIts digital presence needs to communicate:\n\n• Expertise\n• Bridal transformation\n• Trust\n• Preparation\n• Beauty knowledge\n• Personality\n• Social proof\n• Overall client experience\n\nThe project therefore involved building a clearer content direction and supporting creative materials around the bridal customer journey.",
    },
    roleDetails: {
      roleLabel: "Creative & Freelance Marketing Consultant",
      bullets: [],
      closing: "I contributed through social media consulting, content strategy, workflow development, creative direction, AI-assisted design, bridal-content planning, and marketing thinking.",
    },
    roleGroups: [
      {
        category: "MARKETING & STRATEGY",
        bullets: [
          "Social media consultation",
          "Content strategy",
          "Content mix recommendations",
          "Content pillar development",
          "Brand communication thinking",
          "Bridal audience/content journey planning",
        ],
      },
      {
        category: "WORKFLOW & TEAM",
        bullets: [
          "Suggested content workflow",
          "Created a workflow structure for the client's team",
          "Helped organize how content ideas could move from planning to production",
          "Supported consistency in content execution",
        ],
      },
      {
        category: "CREATIVE PRODUCTION",
        bullets: [
          "Brochure design",
          "AI-assisted visual creation",
          "Bridal preparation guide",
          "Creative direction",
          "Client-facing content structure",
        ],
      },
    ],
    contentStrategySection: {
      heading: "Social Media & Content Strategy",
      text: "The strategy was designed around multiple dimensions of a bridal beauty brand rather than only posting finished makeup work.\n\nThe content system balances authority, capability, connection, authenticity, trust, positioning, and usefulness across the bridal customer journey.",
      formula: "Education → Capability → Connection → Authenticity → Trust → Positioning → Usefulness",
      closing: "Education builds authority. Portfolio demonstrates capability. Personal brand creates connection. BTS adds authenticity. Social proof builds trust. Luxury experience communicates positioning. Makeup tips create useful/shareable content.",
      areas: [
        {
          title: "1. BRIDAL EDUCATION",
          text: "Builds authority by explaining bridal makeup longevity, skin prep advice, and trial session expectations.",
        },
        {
          title: "2. SKIN-FINISH EXPERTISE",
          text: "Demonstrates technical mastery with detailed breakdowns of HD/airbrush skin finishes and lighting compatibility.",
        },
        {
          title: "3. BRIDAL PORTFOLIO",
          text: "Demonstrates capability by highlighting transformation stories and bridal looks across different traditions.",
        },
        {
          title: "4. PERSONAL BRAND",
          text: "Creates connection through the artist's background, philosophy, and approach to personalized client care.",
        },
        {
          title: "5. BEHIND THE SCENES",
          text: "Adds authenticity with on-location setup, kit preparation, and real wedding morning moments.",
        },
        {
          title: "6. SOCIAL PROOF",
          text: "Builds trust through genuine client testimonials, bride reviews, and real event feedback.",
        },
        {
          title: "7. LUXURY EXPERIENCE",
          text: "Communicates positioning with premium product breakdowns and personalized trial service experience details.",
        },
        {
          title: "8. MAKEUP TIPS",
          text: "Creates useful/shareable content like wedding-day touch-up advice and seasonal skincare recommendations.",
        },
      ],
    },
    editorialSections: [
      {
        id: "content-pillars",
        title: "Content Pillars",
        text: "An editorial content structure was built around eight pillars to move the brand beyond random posting into a repeatable content system:\n\n• Bridal Education: Explaining makeup longevity, skin prep, and trial sessions.\n• Skin-Finish Expertise: Detailed breakdowns of HD/airbrush finishes and lighting.\n• Bridal Portfolio: Transformation stories and looks across traditions.\n• Personal Brand: Artist background, philosophy, and client care approach.\n• Behind the Scenes: On-location setups, kit preparation, and wedding mornings.\n• Social Proof: Client testimonials, bride reviews, and event feedback.\n• Luxury Experience: Premium product breakdowns and trial service details.\n• Makeup Tips: Touch-up advice and seasonal skincare recommendations.",
      },
      {
        id: "team-workflow",
        title: "Team Workflow & Execution System",
        text: "To make content creation organized and repeatable for the client's team, a structured execution system was developed:\n\nIdea → Content Planning → Creative Direction → Production → Review → Publishing → Learning\n\nThe objective was to make content execution more organized and repeatable rather than dependent on random ideas.",
      },
      {
        id: "ai-brochure-production",
        title: "AI-Assisted Brochure & Creative Production",
        text: "Abhijith designed a client-facing brochure using AI-assisted creative production.\n\nThe brochure included areas such as:\n• About the makeup artist\n• Services / packages\n• Engagement / reception packages\n• Booking information\n• Bridal experience\n• Supporting client information\n\nVisuals were created with AI assistance, enhancing creative presentation while ensuring practical production execution.",
      },
      {
        id: "bridal-prep-guide",
        title: "Bridal Preparation Guide",
        text: "A dedicated Bridal Preparation Guide was created as part of the client work as an educational and client-experience asset.\n\nMajor content areas included:\n• Welcome\n• Skin preparation\n• Hair / beauty preparation\n• Wedding day essentials\n• Event information\n• Important bridal notes\n• Kanchipuram silk saree preparation\n• Pre-bridal treatments\n• Final notes\n\nThis asset was designed to help brides prepare effectively for their makeup sessions and wedding events.",
      },
    ],
    strategyToExecution: {
      heading: "From Strategy to Execution",
      intro: "The project connected strategic marketing thinking directly with practical creative output and client-facing materials.",
      formula: "Understand the Brand → Understand the Bridal Audience → Define Content Pillars → Create Workflow → Develop Creative Assets → Improve Client Experience",
      closing: "This framework ensured strategy translated into structured execution.",
    },
    selectedOutputs: [
      {
        category: "SOCIAL MEDIA STRATEGY DIRECTION",
        description: "Social media strategy direction and content mix recommendations.",
      },
      {
        category: "CONTENT PILLAR FRAMEWORK",
        description: "Eight-part content pillar framework for structured social media publishing.",
      },
      {
        category: "TEAM WORKFLOW STRUCTURE",
        description: "Repeatable team workflow structure from idea to publishing and learning.",
      },
      {
        category: "AI-ASSISTED BROCHURE",
        description: "Client-facing digital and print brochure designed with AI-assisted creative production.",
      },
      {
        category: "BRIDAL PREPARATION GUIDE",
        description: "Comprehensive educational guide covering skin prep, saree prep, and wedding day essentials.",
      },
      {
        category: "CLIENT-FACING BRAND MATERIALS",
        description: "Creative direction and client-facing brand materials.",
      },
    ],
    outcomesDeliverables: {
      intro: "The project produced a clearer content direction, a structured workflow for the client's team, and practical client-facing creative assets including a brochure and bridal preparation guide.",
      items: [
        {
          category: "BRAND & CONTENT DIRECTION",
          description: "Produced a clearer content direction and an 8-pillar framework for the client's social media presence.",
        },
        {
          category: "WORKFLOW & CREATIVE ASSETS",
          description: "Established a structured team workflow and delivered client-facing assets including an AI-assisted brochure and a Bridal Preparation Guide.",
        },
      ],
    },
    whatImLearning: {
      text: "Working with Pooja Vysh Makeovers provided key practical takeaways:\n\n• Marketing strategy has to translate into execution.\n• Content pillars help turn a broad brand into a repeatable content system.\n• Client work requires balancing strategy with practical requirements.\n• AI can accelerate creative production when combined with human direction and review.\n• Client-facing assets are part of the customer experience, not just design deliverables.",
      formula: "Strategy → Content Pillars → Workflow → Creative Assets → Customer Experience",
      closing: "The project reinforced that strategy is most valuable when it turns into practical, experience-shaping deliverables.",
    },
    skillsDeveloped: [
      {
        category: "MARKETING STRATEGY",
        skills: [
          "Content strategy",
          "Social media planning",
          "Audience thinking",
          "Brand communication",
        ],
      },
      {
        category: "CREATIVE & AI",
        skills: [
          "AI-assisted design",
          "Creative direction",
          "Visual communication",
          "Brochure development",
        ],
      },
      {
        category: "CONSULTING & EXECUTION",
        skills: [
          "Client communication",
          "Requirement interpretation",
          "Workflow design",
          "Practical strategy implementation",
        ],
      },
    ],
    biggerStory: {
      intro: "Pooja Vysh Makeovers represents an important step in connecting marketing strategy with complete client-facing experiences.\n\nAt Planet Jewel, the focus was hands-on content execution inside a retail business:\n\nPhotography → Video → Editing → Campaigns\n\nPooja Vysh Makeovers introduced another layer:",
      progression: "Marketing Strategy → Content System → Workflow → AI-Assisted Creative → Client Experience",
      closing: "That experience showed the transition from executing marketing activities toward thinking about systems, strategy and complete customer-facing experiences.",
    },
    work: [
      "Social media strategy direction & content mix recommendations",
      "Content pillar framework development",
      "Team workflow structure",
      "AI-assisted brochure design",
      "Bridal preparation guide compilation",
    ],
    featured: true,
    topics: [topics[0], topics[1]],
    techStack: [
      "Marketing Strategy",
      "Content Strategy",
      "AI Creative Production",
      "Workflow Design",
      "Brochure Design",
    ],
    relatedKnowledgeSlugs: ["how-im-exploring-ai-for-business", "what-im-building-right-now"],
    metrics: [{ label: "Role", value: "Creative & Freelance Marketing Consultant" }],
    publishedAt: "2024-08-30",
  },
  {
    id: "mcdonalds-digital-marketing-analysis",
    title: "McDonald's India — Digital Marketing Analysis",
    slug: "mcdonalds-digital-marketing-analysis",
    tagline: "An industrial digital marketing analysis of McDonald's India completed during a Digital Marketing Internship at Plasmid.",
    shortDescription: "An industrial digital marketing analysis of McDonald's India completed by Abhijith S Mohan during his Digital Marketing Internship at Plasmid, exploring localization, social media, content, influencers, digital promotions and optimization.",
    summary:
      "An industrial digital marketing analysis of McDonald's India completed during Abhijith S Mohan's Digital Marketing Internship at Plasmid Innovation Ltd. The analysis examined how McDonald's India uses digital marketing to maintain brand relevance, connect with regional audiences, and support customer engagement.",
    projectType: "Industrial / Academic Analysis",
    role: "Digital Marketing Intern — Plasmid",
    roleType: "Employee",
    organization: {
      id: "org-plasmid",
      name: "Plasmid Innovation Ltd",
      slug: "plasmid",
      description: "Industrial Digital Marketing Internship · July 1, 2024 – September 1, 2024",
    },
    timeframe: { start: "July 1, 2024 – September 1, 2024" },
    status: "Completed Internship Project",
    overview:
      "This digital marketing analysis was completed during Abhijith S Mohan's two-month Digital Marketing Internship at Plasmid Innovation Ltd (July 1, 2024 – September 1, 2024).\n\nThe project examined how McDonald's India uses digital marketing to maintain brand relevance, connect with regional audiences, and support customer engagement.\n\nThe analysis explored key marketing dimensions including localization, social media, content strategy, influencer marketing, app-based promotions, regional campaigns, emotional branding, data analytics, geo-targeting, experimentation, and optimization.",
    opportunity: {
      heading: "The Context",
      text: "How does a large global brand adapt its digital marketing approach to the Indian market while maintaining a recognizable global identity?\n\nThis central analytical question guided the research, examining the relationship between:",
      formula: "Global Brand → Indian Market → Localization → Digital Channels → Audience Engagement → Data & Optimization",
      closing: "The project provided an analytical framework for evaluating how enterprise marketing principles operate across diverse regional consumer landscapes.",
    },
    roleDetails: {
      roleLabel: "Digital Marketing Intern — Plasmid",
      bullets: [],
      closing: "As an intern at Plasmid, my role was focused on research, analytical breakdown, and synthesis of public digital marketing activities. The analysis did not involve direct access to internal McDonald's data or management of official McDonald's campaigns.",
    },
    roleGroups: [
      {
        category: "RESEARCH",
        bullets: [
          "Studied McDonald's India digital presence",
          "Examined digital marketing activities",
          "Reviewed content and campaign approaches",
          "Studied localization and audience engagement",
        ],
      },
      {
        category: "ANALYSIS",
        bullets: [
          "Analyzed social media strategy",
          "Examined content strategy & formats",
          "Studied influencer & regional marketing",
          "Reviewed app promotions & digital engagement",
          "Examined data-driven marketing concepts",
          "Studied geo-targeting & experimentation",
        ],
      },
      {
        category: "SYNTHESIS",
        bullets: [
          "Connected observations into structured analysis",
          "Identified strategic marketing patterns",
          "Documented findings in industrial analysis",
          "Mapped tactics to overarching business goals",
        ],
      },
    ],
    strategyToExecution: {
      heading: "From Observation to Insight",
      intro: "The project helped develop a structured analytical methodology for evaluating digital marketing strategy rather than observing social media posts in isolation.",
      formula: "Observe → Analyze → Identify Pattern → Connect Marketing Principle → Form Insight",
      closing: "This process transformed raw channel observations into actionable strategic understanding.",
    },
    selectedOutputs: [
      {
        category: "INDUSTRIAL ANALYSIS DOCUMENT",
        description: "Structured digital marketing analysis report completed during Plasmid internship.",
      },
      {
        category: "STRATEGIC FRAMEWORK",
        description: "10-part analytical framework evaluating enterprise digital marketing channels.",
      },
      {
        category: "LOCALIZATION STUDY",
        description: "Analysis of regional campaign adaptation and cultural communication in India.",
      },
      {
        category: "CHANNEL & DATA INSIGHTS",
        description: "Synthesized insights on social media, influencer strategy, app engagement, and geo-targeting.",
      },
    ],
    outcomesDeliverables: {
      intro: "The project strengthened Abhijith's ability to analyze digital marketing strategies, understand how large brands adapt communication to different audiences, and connect individual marketing activities with broader strategic objectives.",
      items: [
        {
          category: "ANALYTICAL FOUNDATION",
          description: "Established a structured approach for breaking down complex digital marketing systems into core strategic components.",
        },
        {
          category: "PRACTICAL UNDERSTANDING",
          description: "Provided an early foundation for moving from learning marketing concepts toward applying them in operational work.",
        },
      ],
    },
    whatImLearning: {
      text: "The analysis yielded several core digital marketing insights:\n\n• Global brands need local relevance to succeed in diverse markets.\n• Digital marketing is not only about posting content; it requires structural alignment.\n• Different digital channels serve distinct roles across the customer journey.\n• Content, audience understanding, and business objectives must remain connected.\n• Data and experimentation improve marketing decisions and campaign ROI.\n• Strong digital marketing combines creative storytelling with analytical discipline.",
      formula: "Research → Framework → Analysis → Synthesis → Strategic Insight",
      closing: "These learnings provided an essential foundation for subsequent hands-on marketing, content strategy, and business systems projects.",
    },
    skillsDeveloped: [
      {
        category: "DIGITAL MARKETING",
        skills: [
          "Social media analysis",
          "Content strategy analysis",
          "Digital campaign analysis",
          "Audience understanding",
        ],
      },
      {
        category: "RESEARCH & ANALYTICS",
        skills: [
          "Marketing research",
          "Competitive / brand analysis",
          "Data-oriented thinking",
          "Pattern identification",
        ],
      },
      {
        category: "STRATEGIC THINKING",
        skills: [
          "Connecting tactics to objectives",
          "Localization thinking",
          "Channel strategy",
          "Marketing optimization concepts",
        ],
      },
    ],
    biggerStory: {
      intro: "McDonald's Digital Marketing Analysis marks the starting point of Abhijith's professional development progression.\n\nThe analytical foundation established at Plasmid evolved across subsequent real-world projects:\n\nPlasmid (Analysis) → Planet Jewel (Execution) → Live by ONC (Co-founding) → Pooja Vysh (Strategy) → TOHVA (AI Workflows) → DP AI Labs (Tech Leadership)",
      progression: "Analysis → Execution → Strategy → Systems → AI + Technology + Business Building",
      closing: "This journey reflects a steady transition from analyzing digital marketing systems to executing campaigns, designing strategy, building initiatives, and leading technology teams.",
    },
    work: [
      "Analysis of localization and regional campaign strategies",
      "Review of app-based promotions, geo-targeting, and influencer marketing",
      "Study of emotional branding, A/B testing, and data-driven marketing frameworks",
    ],
    featured: true,
    topics: [topics[0], topics[3]],
    techStack: [
      "Market Research",
      "Digital Marketing Analysis",
      "Localization Strategy",
      "Content Analysis",
      "Campaign Research",
    ],
    metrics: [{ label: "Role", value: "Digital Marketing Intern — Plasmid" }],
    publishedAt: "2024-09-01",
  },
  {
    id: "totoo",
    title: "Totoo Pet Care E-Commerce Experiment",
    slug: "totoo",
    tagline: "Small e-commerce and dropshipping experiment exploring pet care products.",
    shortDescription: "Small dropshipping experiment in pet care.",
    summary:
      "Small e-commerce and dropshipping experiment testing pet product sourcing, store setup, and digital marketing.",
    projectType: "Experiment",
    role: "Creator",
    roleType: "Experiment",
    timeframe: { start: "2024-02", end: "2024-04" },
    status: "Completed",
    work: [
      "Online store setup and domain mapping (totoo.in)",
      "Pet care product sourcing and catalog creation",
      "Digital marketing test campaigns",
    ],
    featured: false,
    topics: [topics[0], topics[2]],
    techStack: ["E-Commerce", "Shopify/Storefront", "Digital Ads"],
    metrics: [{ label: "Type", value: "R&D Experiment" }],
    liveUrl: "https://totoo.in/",
    publishedAt: "2024-04-01",
  },
  {
    id: "simplithings",
    title: "Simplithings Low-Investment E-Commerce Store",
    slug: "simplithings",
    tagline: "Testing low-upfront-investment e-commerce storefront building.",
    shortDescription: "E-commerce store build experiment for simple useful products.",
    summary:
      "E-commerce and dropshipping experiment exploring how to launch an online store with minimal upfront investment.",
    projectType: "Experiment",
    role: "Creator",
    roleType: "Experiment",
    timeframe: { start: "2024-03", end: "2024-05" },
    status: "Completed",
    work: [
      "Dukaan platform store build (mydukaan.io/simplithingss)",
      "Product curation: useful simple items, organization tools, artwork",
      "Low-investment digital storefront test",
    ],
    featured: false,
    topics: [topics[0], topics[3]],
    techStack: ["Dukaan Platform", "Digital Storefront", "Growth Testing"],
    metrics: [{ label: "Type", value: "Low-Capital Build Experiment" }],
    liveUrl: "https://mydukaan.io/simplithingss",
    publishedAt: "2024-05-15",
  },
  {
    id: "planet-jewel",
    title: "Restarting and Building a Jewellery Brand’s Digital Presence",
    slug: "planet-jewel",
    tagline: "Hands-on digital marketing, content strategy, photography, video, campaigns, and customer-facing digital activity for jewellery retail brand Planet Jewel.",
    shortDescription: "A case study of Abhijith S Mohan's work as a Digital Promoter at Planet Jewel across digital marketing, content, photography, video, campaigns and customer-facing digital activity.",
    summary:
      "My experience at Planet Jewel was one of my first major opportunities to work inside a real retail business and apply digital marketing beyond the classroom.",
    projectType: "Case Study",
    role: "Digital Promoter",
    roleType: "Employee",
    organization: {
      id: "org-planet-jewel",
      name: "Planet Jewel",
      slug: "planet-jewel",
      description: "Jewellery Retail",
    },
    timeframe: { start: "May 2024", end: "around June 2025" },
    status: "Completed",
    overview:
      "My experience at Planet Jewel was one of my first major opportunities to work inside a real retail business and apply digital marketing beyond the classroom.\n\nWhen I joined, the brand's social media activity had been inactive for a significant period. My work became focused on restarting and developing the digital side through content, creative production, campaigns and customer-facing digital activity.\n\nThe experience eventually expanded beyond social media into photography, video production, influencer coordination, sales support and day-to-day marketing operations.",
    opportunity: {
      heading: "The Opportunity",
      text: "The challenge wasn't simply creating social media posts.\n\nJewellery is highly visual, while the business itself depends on products, customer trust, physical retail experience and sales.\n\nMy work therefore involved connecting:",
      formula: "Products → Creative → Digital Presence → Customer Interaction → Business",
      closing: "This gave me an opportunity to understand how marketing functions inside an operating business.",
    },
    contentStrategySection: {
      heading: "Content Strategy",
      text: "Working on the digital presence wasn't only about producing individual posts.\n\nI was involved in thinking about what the brand should communicate, what products and stories to highlight, how content could be structured and how different types of content could work together.\n\nThe planning involved thinking across:",
      formula: "Brand → Products → Audience → Content → Campaigns → Customer",
      closing: "This helped create a more intentional approach to the brand's social media rather than treating every post as an isolated piece of content.",
      areas: [
        {
          title: "PRODUCT STORYTELLING",
          text: "Turning jewellery products into visual stories that communicate their design, details and appeal.",
        },
        {
          title: "EDUCATIONAL / VALUE CONTENT",
          text: "Exploring content that could help audiences understand products, jewellery and related topics rather than relying only on promotional posts.",
        },
        {
          title: "SEASONAL & CAMPAIGN CONTENT",
          text: "Planning content around occasions, festivals, campaigns and promotional moments.",
        },
        {
          title: "BRAND & ENGAGEMENT CONTENT",
          text: "Creating content designed to communicate the brand, encourage interaction and make the digital presence feel active and relevant.",
        },
      ],
    },
    roleDetails: {
      roleLabel: "Digital Promoter",
      bullets: [],
      closing: "This was a hands-on role spanning strategy, content, creative production, coordination and customer-facing digital activity.",
    },
    roleGroups: [
      {
        category: "MARKETING & STRATEGY",
        bullets: [
          "Social media management",
          "Content planning and strategy",
          "Content ideas",
          "Campaign planning",
          "Jewellery storytelling",
          "Digital presence",
        ],
      },
      {
        category: "CREATIVE PRODUCTION",
        bullets: [
          "Jewellery/product photography",
          "Video shooting",
          "Video editing",
          "Image editing",
          "Promotional content",
          "Testimonial-style content",
          "Collaboration content",
        ],
      },
      {
        category: "CAMPAIGNS & COORDINATION",
        bullets: [
          "Campaign development",
          "Influencer coordination",
          "Collaboration coordination",
          "Team coordination",
          "Production coordination",
          "Brochure/catalogue work",
        ],
      },
      {
        category: "CUSTOMER & BUSINESS",
        bullets: [
          "Instagram enquiries",
          "WhatsApp enquiries",
          "Customer interaction",
          "Product-related conversations",
          "Sales support",
        ],
      },
    ],
    editorialSections: [
      {
        id: "content-strategy",
        title: "Content Strategy",
        text: "I was involved in thinking about what the brand should communicate, what products and stories to highlight, how content could be structured and how different types of content could work together.",
      },
      {
        id: "social-media",
        title: "Social Media",
        text: "I worked on restarting and developing the brand's social media presence through content planning, creative production and publishing.\n\nThe focus was on presenting jewellery in a way that was visually engaging while remaining connected to the products and the brand.",
      },
      {
        id: "product-photography",
        title: "Product Photography",
        text: "I personally photographed jewellery products for digital use, including product-focused imagery created using a Samsung S23.\n\nThis gave me practical experience with product presentation, composition and creating usable commercial imagery with accessible equipment.",
      },
      {
        id: "video-creative-production",
        title: "Video & Creative Production",
        text: "I worked across video concepts, shooting, editing, promotional videos, testimonial-style videos, collaboration content, and product-focused content.\n\nThis allowed me to work through the complete creative process:",
        bullets: ["Idea → Production → Editing → Final Content"],
      },
      {
        id: "campaigns-seasonal",
        title: "Campaigns & Seasonal Content",
        text: "I worked on promotional and seasonal content, including jewellery campaigns and Onam-related creative work.\n\nThe work required coordinating the creative process around products, campaign requirements and publishing.",
      },
      {
        id: "influencer-collaboration",
        title: "Influencer & Collaboration Work",
        text: "I was also involved in influencer coordination and collaboration-based content, including communication, requirements and production coordination.",
      },
      {
        id: "customer-facing",
        title: "Customer-Facing Digital Work",
        text: "My role also exposed me to what happens after content reaches an audience.\n\nI handled or supported Instagram enquiries, WhatsApp enquiries, customer communication, product-related conversations, and sales support.\n\nThis helped me understand that digital marketing doesn't end when a post is published.",
      },
      {
        id: "catalogue-brand-materials",
        title: "Catalogue & Brand Materials",
        text: "Created and supported brochure, catalogue and product-presentation materials for digital and promotional use, helping communicate products and brand materials to customers.",
      },
    ],
    strategyToExecution: {
      heading: "From Strategy to Execution",
      intro: "One of the defining parts of the role was moving between different levels of the marketing process.\n\nA typical piece of work could move through:",
      formula: "Understand the Product → Identify the Story → Plan the Content → Create the Asset → Publish → Respond to Customers → Learn and Improve",
      closing: "Working through this process gave me practical exposure to how marketing operates as an ongoing system rather than a collection of individual posts.",
    },
    selectedOutputs: [
      {
        category: "PRODUCT PHOTOGRAPHY",
        description: "Jewellery and product visuals created for digital and promotional use.",
      },
      {
        category: "NATURAL STONES CATALOGUE",
        description: "Product-focused catalogue work involving jewellery presentation, product imagery and visual communication.",
      },
      {
        category: "ONAM CONTENT",
        description: "Seasonal promotional content developed around the brand and jewellery products.",
      },
      {
        category: "PROMOTIONAL & TESTIMONIAL VIDEOS",
        description: "Video content created to communicate products, promotions and the customer/brand experience.",
      },
      {
        category: "INFLUENCER & COLLABORATION CONTENT",
        description: "Content coordinated around external collaborations and brand requirements.",
      },
      {
        category: "BROCHURE & CATALOGUE MATERIALS",
        description: "Marketing and product-presentation materials created or supported for digital and promotional use.",
      },
    ],
    thinkingChanged: {
      text1: "One of the biggest lessons from Planet Jewel was that marketing doesn't exist separately from the business.\n\nA piece of content might look good, but the larger system is:",
      formula: "Product → Positioning → Content → Customer → Enquiry → Sales → Experience",
      text2: "Working close to the business helped me understand marketing from a much more practical perspective.\n\nI began seeing content not simply as something a brand publishes, but as something that can help a customer discover, understand and interact with a business.\n\nIt also made me more interested in the strategic side of marketing — why something should be communicated, who it is for and how creative work connects back to the business.",
    },
    skillsDeveloped: [
      {
        category: "MARKETING & STRATEGY",
        skills: [
          "Digital marketing",
          "Social media management",
          "Content strategy",
          "Content planning",
          "Campaign planning",
          "Digital presence",
          "Customer communication",
          "Brand storytelling",
        ],
      },
      {
        category: "CREATIVE",
        skills: [
          "Product photography",
          "Video production",
          "Video editing",
          "Image editing",
          "Creative direction",
          "Visual storytelling",
        ],
      },
      {
        category: "BUSINESS & OPERATIONS",
        skills: [
          "Customer interaction",
          "Sales support",
          "Product understanding",
          "Team coordination",
          "Production coordination",
          "Marketing-business connection",
        ],
      },
    ],
    techStack: [
      "Instagram",
      "WhatsApp",
      "Samsung S23 photography",
      "Video editing tools",
      "Image editing tools",
      "AI-assisted creative workflows",
    ],
    relatedKnowledgeSlugs: ["what-working-in-digital-marketing-taught-me", "how-i-think-about-building-a-business", "from-marketing-to-building-why-im-learning-to-build-digital-things", "why-systems-matter-more-than-individual-tasks", "what-im-building-right-now"],
    outcomesDeliverables: {
      intro: "Working across the digital side of the brand resulted in a broad range of marketing, creative and customer-facing outputs.",
      items: [
        {
          category: "DIGITAL PRESENCE",
          description: "Restarted and developed the brand's social media activity through ongoing content planning, production and publishing.",
        },
        {
          category: "CONTENT STRATEGY",
          description: "Developed content ideas and planning around jewellery products, brand communication, campaigns, seasonal moments and customer interests.",
        },
        {
          category: "CREATIVE PRODUCTION",
          description: "Produced and coordinated product photography, promotional videos, testimonial-style content, collaboration content and edited visual assets.",
        },
        {
          category: "CAMPAIGNS & COLLABORATIONS",
          description: "Worked on promotional and seasonal campaigns, including Onam-related content, while supporting influencer and collaboration-based content.",
        },
        {
          category: "CATALOGUE & BRAND MATERIALS",
          description: "Created and supported brochure, catalogue and product-presentation materials for digital and promotional use.",
        },
        {
          category: "CUSTOMER-FACING DIGITAL WORK",
          description: "Supported Instagram and WhatsApp enquiries, customer communication, product-related conversations and sales activity.",
        },
      ],
    },
    learningsDetailed: [
      "Work with real products and business requirements",
      "Create content under practical constraints",
      "Coordinate people and production",
      "Communicate with customers",
      "Think about content commercially",
      "Adapt creative ideas to business needs",
      "Understand the connection between digital marketing and sales",
      "Work across both creative and operational responsibilities",
    ],
    biggerStory: {
      intro: "Planet Jewel became an important transition point in my journey.\n\nI entered with an interest in digital marketing.\n\nThrough the experience, I moved deeper into:",
      progression: "Marketing → Content Strategy → Creative Production → Customers → Business Operations → Strategy",
      closing: "That broader exposure helped shape my later interest in combining marketing with AI, technology, data and business systems.",
    },
    work: [
      "Social media management & account revival",
      "Content strategy and planning",
      "Product and jewellery photography",
      "Video shooting and editing",
      "Campaign development",
      "Influencer coordination",
      "Instagram & WhatsApp customer enquiries",
      "Team and production coordination",
    ],
    featured: true,
    topics: [topics[0]],
    metrics: [{ label: "Focus", value: "Digital Brand Revival" }],
    publishedAt: "2024-05-01",
  },
  {
    id: "live-by-onc",
    title: "Live by ONC",
    slug: "live-by-onc",
    tagline: "A community and cultural initiative bringing people together through experiences, events, creativity and meaningful connections.",
    shortDescription: "A case study of Abhijith S Mohan's role as a co-founder and founding member of Live by ONC, a community and cultural initiative in Thiruvananthapuram.",
    summary:
      "Live by ONC was a community and cultural initiative created around the idea of bringing people together through experiences, events, creativity and meaningful connections.",
    projectType: "Case Study",
    role: "Co-founder / Founding Member",
    roleType: "Co-founder",
    organization: {
      id: "org-onc",
      name: "Live by ONC / Oru New Culture",
      slug: "live-by-onc",
      description: "Thiruvananthapuram, Kerala · Community & Culture Initiative",
    },
    timeframe: { start: "2024" },
    status: "Completed",
    overview:
      "Live by ONC was a community and cultural initiative created around the idea of bringing people together through experiences, events, creativity and meaningful connections.\n\nI was one of the founding members involved in shaping the initiative, working alongside the founding team on marketing, direction, event coordination, team building and business structuring.\n\nThe project gave me an opportunity to experience what it means to build something collaboratively from an early stage — before there is an established audience, structure or operating system.",
    theIdea: {
      intro: "The underlying idea was simple:\n\nCreate a space where people could discover experiences, connect with others and engage with culture and creativity in a more meaningful way.\n\nRather than building only around conventional events, ONC explored different formats and communities.\n\nIts activities included:",
      activities: [
        "Music",
        "Workshops",
        "Creative activities",
        "Art",
        "Nature",
        "Community interaction",
      ],
      closing: "The initiative was built around people and experiences, rather than simply selling an event.",
    },
    roleDetails: {
      roleLabel: "Co-founder / Founding Member",
      bullets: [
        "Marketing research",
        "Marketing direction",
        "Social media",
        "Event coordination",
        "Team building",
        "Business structuring",
        "Strategy",
        "Collaboration",
        "Supporting the development of the initiative",
      ],
      closing: "Because ONC was an early-stage initiative, roles were not always isolated into conventional job descriptions.\n\nI was involved in thinking through both how the initiative should operate and how people would discover and engage with it.",
    },
    editorialSections: [
      {
        id: "understanding-audience",
        title: "Understanding the Audience",
        text: "A major part of the early work involved thinking about who ONC was for and what kind of experiences would actually create interest.\n\nThis meant considering:\n\nPeople → Interests → Experiences → Community\n\nrather than treating every event as an independent activity.",
      },
      {
        id: "marketing-social-media",
        title: "Marketing & Social Media",
        text: "I contributed to the marketing direction and social media presence of ONC.\n\nThe objective was not simply to announce events, but to communicate the identity and feeling behind the initiative.\n\nThis involved thinking about:",
        bullets: [
          "Content",
          "Positioning",
          "Audience",
          "Event communication",
          "Social media presence",
          "Community engagement",
        ],
      },
      {
        id: "event-coordination",
        title: "Event Coordination",
        text: "I was involved in coordinating events and working with the broader team to help turn ideas into actual experiences.\n\nPublic coverage later documented ONC's activities including music nights, workshops, crochet, nature-inspired art and stone balancing.\n\nThe initiative had conducted more than seven events by the time of the New Indian Express coverage in February 2026.",
      },
      {
        id: "team-building",
        title: "Team Building",
        text: "Building ONC also meant building a team around the idea.\n\nI was involved in team development, coordination, delegating and organizing work, supporting collaboration, and helping structure how the initiative operated.\n\nThis was one of my early experiences of working on something where people, responsibilities and execution systems had to develop alongside the idea itself.",
      },
      {
        id: "building-without-blueprint",
        title: "Building Something Without a Finished Blueprint",
        text: "One of the interesting parts of ONC was that there wasn't a complete blueprint from the beginning.\n\nThe initiative evolved through experimentation.\n\nDifferent events and formats provided opportunities to understand:\n\n• What people responded to\n• What types of experiences created engagement\n• How the team worked together\n• How an idea could become an actual event\n• How community could develop around repeated experiences\n\nThis taught me that building something often means creating the system while simultaneously discovering what the system needs to become.",
      },
    ],
    selectedOutputs: [
      {
        category: "Music",
        description: "Music-focused nights and experiences.",
      },
      {
        category: "Workshops",
        description: "Creative and participatory workshops.",
      },
      {
        category: "Art & Creativity",
        description: "Experiences involving creative expression, including nature-inspired art.",
      },
      {
        category: "Community Activities",
        description: "Activities such as crochet and stone balancing that encouraged participation rather than passive attendance.",
      },
    ],
    skillsDeveloped: [
      {
        category: "Entrepreneurship & Strategy",
        skills: [
          "Opportunity identification",
          "Business structuring",
          "Initiative building",
          "Strategic thinking",
          "Experimentation",
        ],
      },
      {
        category: "Marketing",
        skills: [
          "Marketing research",
          "Social media",
          "Positioning",
          "Audience thinking",
          "Event marketing",
        ],
      },
      {
        category: "Leadership & Operations",
        skills: [
          "Team building",
          "Event coordination",
          "Collaboration",
          "Communication",
          "Execution",
        ],
      },
      {
        category: "Community Building",
        skills: [
          "Experience design",
          "Community thinking",
          "Audience engagement",
          "Building relationships",
        ],
      },
    ],
    learningsDetailed: [
      "Building something with people is fundamentally different from simply completing an individual project.",
      "An idea can be strong, but turning it into something real requires: People → Structure → Communication → Execution → Feedback → Iteration.",
      "Thinking more about the system surrounding an idea — team, audience, experience, communication, and execution.",
      "Strengthened interest in building businesses, communities, and initiatives rather than only working within existing structures.",
    ],
    publicCoverage: [
      {
        title: "Bringing ‘Oru New Culture’ to the city",
        publication: "The New Indian Express",
        date: "February 27, 2026",
        description:
          "Publicly identifies Live by ONC as beginning with seven youngsters from Christ Nagar College, including Abhijith S Mohan, and discusses ONC's activities and vision.",
      },
    ],
    externalLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/livebyonc/",
        isPrimary: true,
      },
      {
        platform: "Website",
        url: "https://orunewculture.in",
        isPrimary: false,
      },
    ],
    resultsTransparency: {
      confident: [
        "ONC developed into an active community and event initiative.",
        "Publicly documented evidence shows that the initiative conducted multiple events and experiences across different creative and cultural formats and later received external media coverage.",
        "The project gave the founding team practical experience in community building, events, marketing and collaboration.",
      ],
      notClaimed: [
        "Revenue",
        "Profit",
        "Attendance totals",
        "Follower growth",
        "Engagement metrics",
        "Sponsorship value",
        "Personal financial contribution",
        "Number of people personally acquired by Abhijith",
      ],
    },
    biggerStory: {
      intro: "ONC represented an important shift in my journey.\n\nPlanet Jewel taught me how to work inside an operating business.\n\nONC gave me the opportunity to help build something from an early stage.\n\nThe progression became:",
      progression: "Work Within a Business → Build With a Team → Create an Initiative → Learn Through Execution",
      closing: "That experience strengthened my interest in entrepreneurship and building systems around ideas.",
    },
    work: [
      "Marketing research and strategic direction",
      "Social media management and team building",
      "Event coordination and community experiences",
      "Business structuring and operational planning",
    ],
    featured: true,
    topics: [topics[0], topics[3]],
    techStack: [
      "Community Building",
      "Event Coordination",
      "Marketing Direction",
      "Social Media Strategy",
      "Team Leadership",
    ],
    relatedKnowledgeSlugs: ["what-working-in-digital-marketing-taught-me", "how-i-think-about-building-a-business", "what-im-building-right-now", "how-we-built-live-by-onc"],
    metrics: [{ label: "Role", value: "Co-founder / Founding Member" }],
    publishedAt: "2024-01-15",
  },
  {
    id: "dp-ai-labs",
    title: "DP AI Labs",
    slug: "dp-ai-labs",
    tagline: "An ongoing early-stage technology initiative focusing on IT team leadership, website project management, and SaaS product exploration.",
    shortDescription: "An ongoing case study of Abhijith S Mohan's work as IT Team Lead and Project Manager at DP AI Labs across technology projects, team coordination and digital product exploration.",
    summary:
      "DP AI Labs is an early-stage technology initiative within my current professional environment, where I work across technology, project management and team coordination.",
    projectType: "Case Study",
    role: "IT Team Lead & Project Manager",
    roleType: "Team Member",
    organization: {
      id: "org-dp-ai-labs",
      name: "DP AI Labs",
      slug: "dp-ai-labs",
      description: "Early-stage IT & Technology Initiative",
    },
    timeframe: {},
    status: "Ongoing",
    overview:
      "DP AI Labs is an early-stage technology initiative within my current professional environment, where I work across technology, project management and team coordination.\n\nMy role combines IT team leadership with project management, with the team working on website projects while also exploring SaaS and digital product opportunities.\n\nThe work represents a further step in my transition from primarily working in marketing toward combining marketing, technology, AI and business systems.",
    opportunity: {
      heading: "The Opportunity",
      text: "As my interests expanded beyond marketing, I became increasingly interested in how technology could be used to build actual digital products and systems.\n\nDP AI Labs provides an environment to explore that transition through:",
      formula: "Ideas → Technology → Projects → Teams → Systems",
      closing: "Rather than treating technology as a separate technical function, the focus is on understanding how digital products and systems can solve practical business problems.",
    },
    roleDetails: {
      roleLabel: "IT Team Lead & Project Manager",
      bullets: [
        "Leading the IT team",
        "Coordinating team members",
        "Managing project execution",
        "Planning and organizing website projects",
        "Coordinating development work",
        "Tracking project progress",
        "Communicating requirements",
        "Helping translate ideas into digital projects",
        "Exploring SaaS and digital product opportunities",
        "Supporting the development of internal processes",
      ],
      closing: "The role combines technical coordination, project management and early-stage product thinking.",
    },
    editorialSections: [
      {
        id: "building-the-team",
        title: "Building the Team",
        text: "One of the interesting aspects of DP AI Labs is that the team itself is being developed alongside the projects.\n\nThe team includes interns and is still in an early stage.\n\nThis means part of my responsibility isn't simply managing existing processes — it also involves helping establish:",
        bullets: [
          "Roles",
          "Responsibilities",
          "Communication",
          "Project workflows",
          "Task coordination",
          "Execution processes",
        ],
      },
      {
        id: "website-projects",
        title: "Website Projects",
        text: "One of the current areas of work is website development.\n\nThe projects involve coordinating the process from requirements and planning through execution.\n\nMy involvement is primarily focused on:\n\nRequirements → Planning → Team Coordination → Execution → Review\n\nRather than positioning myself as the sole developer, my role is to lead and coordinate the technical/project side.",
      },
      {
        id: "saas-exploration",
        title: "SaaS & Digital Product Exploration",
        text: "DP AI Labs is also exploring SaaS and digital product ideas.\n\nAt this stage, these should be described as exploration and ongoing work, rather than completed products.\n\nThe process involves thinking about:\n\n• Problems worth solving\n• Product opportunities\n• Digital workflows\n• Technology requirements\n• Business models\n• Product feasibility\n\nThis is helping me understand the connection between:\n\nProblem → Product → Technology → Business",
      },
      {
        id: "project-management",
        title: "Project Management",
        text: "Working across multiple technology projects has expanded my understanding of project management.\n\nMy focus includes:",
        bullets: [
          "Understanding requirements",
          "Breaking work into tasks",
          "Coordinating people",
          "Managing dependencies",
          "Tracking progress",
          "Reviewing outputs",
          "Communicating changes",
          "Moving projects toward completion",
        ],
      },
      {
        id: "marketing-to-technology",
        title: "From Marketing to Technology",
        text: "DP AI Labs represents an important evolution in my professional direction.\n\nMy earlier experience was heavily focused on:\n\nMarketing → Content → Creative → Customers\n\nMy current technology work is expanding that into:\n\nTechnology → Systems → Products → Teams → Execution\n\nThe two areas aren't separate for me. I'm increasingly interested in the intersection:\n\nMarketing × AI × Business",
      },
    ],
    skillsDeveloped: [
      {
        category: "Technology & Digital Building",
        skills: [
          "Website project coordination",
          "Digital systems",
          "Technology workflows",
          "Product exploration",
          "SaaS concepts",
        ],
      },
      {
        category: "Project Management",
        skills: [
          "Requirements",
          "Planning",
          "Task coordination",
          "Team coordination",
          "Execution tracking",
          "Review",
        ],
      },
      {
        category: "Leadership",
        skills: [
          "IT team coordination",
          "Intern coordination",
          "Delegation",
          "Communication",
          "Process development",
        ],
      },
      {
        category: "Business & Product Thinking",
        skills: [
          "Opportunity identification",
          "Problem discovery",
          "Product thinking",
          "Business-model exploration",
          "Systems thinking",
        ],
      },
    ],
    currentStatusSection: {
      heading: "Current Status",
      text: "DP AI Labs is an early-stage initiative, with website projects currently in development and SaaS and digital product opportunities being explored.\n\nThe team and project workflows are also continuing to develop alongside the work.",
    },
    whatImLearning: {
      text: "DP AI Labs is teaching me that building technology isn't only about writing code.\n\nIt involves:",
      formula: "Problem → Requirements → People → Technology → Execution → Testing → Iteration",
      closing: "A good idea still needs a team, structure and execution system around it.\n\nThis is strengthening my interest in becoming someone who can operate across business, technology and execution, rather than staying inside a single discipline.",
    },
    currentWorkSection: {
      heading: "Current Work",
      intro: "The work is currently focused on building the team, coordinating technology projects and exploring opportunities for digital products.",
      areas: [
        {
          title: "TEAM DEVELOPMENT",
          text: "Developing an IT team and establishing clearer roles, communication and project workflows.",
        },
        {
          title: "WEBSITE PROJECTS",
          text: "Coordinating website projects from requirements and planning through execution and review.",
        },
        {
          title: "PROJECT MANAGEMENT",
          text: "Building practical processes for task coordination, progress tracking, communication and delivery.",
        },
        {
          title: "PRODUCT EXPLORATION",
          text: "Exploring SaaS and digital product opportunities by looking at problems, workflows, technology requirements and business models.",
        },
      ],
    },
    biggerStory: {
      intro: "DP AI Labs represents another step in my transition:",
      progression: "Digital Marketing → Business → AI → Technology → Project Leadership → Product Building",
      closing: "My goal isn't to abandon marketing. It's to understand how these disciplines can work together to build better businesses and digital products.",
    },
    work: [
      "IT team leadership and intern workflow coordination",
      "Website project management and execution tracking",
      "SaaS and digital product concept exploration",
    ],
    featured: true,
    topics: [topics[1], topics[2]],
    techStack: [
      "Project Management",
      "IT Team Leadership",
      "Website Coordination",
      "SaaS Exploration",
      "Workflow Automation",
    ],
    relatedKnowledgeSlugs: ["what-working-in-digital-marketing-taught-me", "how-i-think-about-building-a-business", "how-im-exploring-ai-for-business", "from-marketing-to-building-why-im-learning-to-build-digital-things", "why-systems-matter-more-than-individual-tasks", "what-im-building-right-now"],
    metrics: [{ label: "Role", value: "IT Team Lead & Project Manager" }],
    publishedAt: "2026-09-12",
  },
];

/**
 * Approved Professional Credentials
 */
export const credentials: Credential[] = [
  {
    id: "cred-google-ai",
    title: "Google AI Professional Certificate",
    issuer: "Google",
    type: "Professional",
    featured: true,
  },
  {
    id: "cred-google-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    type: "Professional",
    featured: true,
  },
  {
    id: "cred-google-digital-marketing",
    title: "Google Digital Marketing & E-commerce Professional Certificate",
    issuer: "Google",
    type: "Professional",
    featured: true,
  },
  {
    id: "cred-google-pm",
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    type: "Professional",
    featured: true,
  },
];

/**
 * Accessor Functions for Structured Content
 */

export function getTopics(): Topic[] {
  return topics;
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getExperiences(): Experience[] {
  return experiences;
}

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getExperiments(): Project[] {
  return projects.filter((p) => p.roleType === "Experiment");
}

export function getCredentials(): Credential[] {
  return credentials;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "from-content-to-customers-planet-jewel",
    title: "From Content to Customers: Managing Digital Marketing for Planet Jewel",
    slug: "from-content-to-customers-planet-jewel",
    excerpt: "Working closely with an operating retail business reveals that marketing doesn't exist separately from the business—it functions as a continuous system connecting the product to the customer.",
    category: "Marketing",
    contentType: "Case Study",
    author: "Abhijith S Mohan",
    content: `### 1. Context

Planet Jewel is a jewellery retail business. From May 2024 to around June 2025, I worked there as a Digital Promoter. 

This was an employee role that placed me inside an operating retail environment, giving me the opportunity to apply digital marketing concepts in a hands-on, practical setting.

### 2. The Starting Point

When I joined, the brand's social media activity had been inactive for a significant period. 

My initial task was straightforward in principle but complex in execution: restarting and developing the digital side of the brand. The challenge was figuring out how to build a digital presence that connected the products, the content and the customer interaction with the wider business.

### 3. My Role

As a Digital Promoter, my responsibilities were inherently cross-functional. 

The work spanned social media operations, content strategy, product photography, video editing, customer interaction, and catalogue marketing. I was involved in creating promotional content, testimonial-style content, and collaboration content, while also handling team and production coordination.

### 4. Understanding the Product Before Creating Content

Early on, I realized that jumping straight into content creation without understanding the context rarely works well. I developed a personal working model for how to approach the content:

Understand the Product → Identify the Story → Plan the Content

I couldn't just create a post because it looked nice. I needed to understand what the product was, what made it appealing, and how it fit into the brand's larger narrative before planning the content. 

### 5. Building the Content

Execution was highly practical. I personally photographed jewellery products for digital use, frequently utilizing accessible equipment like a Samsung S23. 

The process required me to work through entire creative lifecycles: from video concepts and shooting, to video and image editing, to finalizing the assets. I created promotional videos, testimonial-style content, and catalogue materials designed specifically for product presentation. We also occasionally used AI-assisted creative workflows to support production. The focus was always on finding resourceful ways to communicate the product clearly.

### 6. From Publishing to Customer Interaction

One of the most valuable parts of the role was experiencing what happens *after* a post is published. 

My workflow did not end at publishing:

Publish → Respond to Customers → Learn and Improve

Because I handled and supported Instagram and WhatsApp customer enquiries, I was directly exposed to how audiences reacted to the content I had just created. I fielded product-related conversations and provided sales support. Marketing became tangibly real when I could see the direct line between a piece of content going live and a customer asking a question about that specific product.

### 7. The Marketing System I Started Seeing

Over time, this exposure fundamentally changed how I viewed digital marketing. I stopped seeing marketing as isolated tasks and began seeing it as a continuous system. 

The mental model I started to form looked like this:

Product → Positioning → Content → Customer → Enquiry → Sales → Experience

Content was no longer just something a brand published. It was a mechanism that helped a customer discover the business, understand the product, and initiate an interaction. This realization made me far more interested in the strategic side of marketing—understanding *why* something should be communicated, rather than just *how* to post it.

### 8. Campaigns, Collaborations, and Content Formats

This structured approach extended into broader marketing efforts. I worked on seasonal campaigns, such as Onam-related creative work, requiring coordination around specific promotional moments. 

I also supported influencer and collaboration-based content. This involved organizing the communication, defining the requirements, and coordinating the production to ensure external content remained aligned with the brand's visual identity and goals.

### 9. What I Learned

Planet Jewel provided me with several practical lessons that theory alone couldn't teach:

- Marketing operates as an ongoing system, not a collection of individual posts.
- Digital marketing does not end when content is published; the response is just as important.
- Interacting directly with customers changes how you understand the purpose of your marketing.
- Every piece of content has a relationship with the wider business objectives.
- Understanding the underlying business requirement is more important than simply executing a task.

### 10. From Doing Tasks to Understanding the Business

This experience was an important transition point for me. 

I started the role focused heavily on executing individual marketing and creative tasks. But through the process of taking product photos, editing videos, publishing content, and answering customer enquiries, I increasingly noticed the systems connecting the product to the marketing, the customer, and the business. 

It made me start thinking less about how to execute a single marketing tactic and more about how the entire business engine functions.

### 11. Bigger Picture

My time at Planet Jewel represents an important step in my broader journey. 

It shifted my perspective along a clear progression: 

Marketing → Content Strategy → Creative Production → Customers → Business Operations → Strategy

This hands-on exposure to the relationship between marketing, customers and the wider business reinforced my growing interest in understanding systems. It helped shape my later interest in combining marketing with technology, data, and business systems, moving my focus away from isolated tasks and toward building and understanding complete digital environments.`,
    publishedAt: "2026-09-17",
    updatedAt: "2026-09-17",
    readingTimeMinutes: 4,
    featured: true,
    keyTakeaway: "Working closely with an operating retail business reveals that marketing doesn't exist separately from the business—it functions as a continuous system connecting the product to the customer.",
    topics: [topics[0], topics[3]],
    relatedProjectSlugs: ["planet-jewel"],
    relatedArticleSlugs: ["what-working-in-digital-marketing-taught-me", "how-i-think-about-building-a-business", "from-marketing-to-building-why-im-learning-to-build-digital-things", "what-im-building-right-now"],
    status: "published"
  },
  {
    id: "case-study-tohva-ai-workflow",
    title: "How I Built an AI-Assisted Product Visual Workflow for TOHVA",
    slug: "case-study-tohva-ai-workflow",
    excerpt: "Using AI effectively for commercial production is less about generating an impressive image and more about building a reliable, coordinated workflow.",
    category: "Business",
    contentType: "Case Study",
    author: "Abhijith S Mohan",
    content: `### 1. Context

TOHVA is a premium natural stone jewellery sub-brand of Planet Jewel. The imagery needed to communicate the product clearly while maintaining a consistent visual identity across the collection.

While the existence of the brand and its catalogue are publicly visible, my involvement was strictly behind the scenes, working to coordinate how that visual content was produced.

### 2. The Challenge

The project required creating polished, platform-ready product visuals within the practical production constraints of the project.

For me, the challenge wasn't just generating an image. It was figuring out how to make the process reliable and consistent across the required assets.

### 3. My Role

I joined the project as a Project Coordinator. 

My role was not to operate as the sole creative or the brand owner. Instead, my responsibility was to connect the different parts of the production process and keep the final output aligned with the project's requirements. This involved managing the AI-powered product photography process, providing creative direction, and coordinating with designers and copywriters to finalize the assets.

### 4. The AI-Assisted Creative Approach

One of the central components of the project was using AI to assist in creating the product photography. 

The objective was to produce visuals that presented the jewellery in a polished, commercially usable way. To do this, we used an AI image-generation tool to generate base visuals that could then be refined. 

This gave me practical experience using AI as a strict production tool with commercial parameters, rather than treating it simply as a creative toy or novelty.

### 5. Production Workflow

Moving AI from an experiment into a practical commercial workflow required structure. The process we used followed a specific sequence:

Experiment → Evaluate → Refine → Standardize → Deliver

The way I came to think about the process for generating the actual visual assets was:

Product Reference → AI Generation → Creative Review → Refinement → Final Visual

This structure gave us a way to review the generated visuals against the project's requirements before final delivery.

### 6. Coordination

AI-generated product imagery can easily become inconsistent across a collection. Because of this, a significant part of the project involved coordination.

I had to ensure alignment across multiple contributors:
Designers → Copywriters → Creative Production → Client Requirements

My focus was on communicating requirements, coordinating timelines, and ensuring the visual direction remained consistent. We had to constantly check the outputs against specific parameters: product appearance, composition, presentation, and platform suitability.

### 7. Deliverables

The work resulted in:
- AI-assisted product visuals for natural stone jewellery.
- Product imagery prepared specifically for digital and e-commerce platform use.
- A consistent visual approach across the required product assets.

### 8. Outcome

**What was delivered:**
Polished, platform-ready visual and content assets for TOHVA's digital and e-commerce presence.

**Qualitative project outcome:**
The workflow resulted in the required assets being prepared for digital and e-commerce use.

### 9. What I Learned

TOHVA helped me understand the difference between using AI and building an AI-assisted workflow. 

Generating one good image is relatively easy. Creating a consistent collection requires a strict operational chain: Requirements → Process → Direction → Generation → Review → Refinement → Delivery.

The project strengthened my understanding of AI as a practical business and production tool. It also showed me how critical coordination becomes when creative work involves multiple people, strict brand requirements, and commercial deliverables.

### 10. Bigger Picture

TOHVA represents an important step in the evolution of my work. 

At Planet Jewel, I had worked extensively with traditional content production (Photography → Video → Editing → Campaigns). TOHVA introduced another layer: AI → Creative Production → Coordination → Commercial Output.

This project reinforced my interest in how AI can change the way businesses produce content and operate their creative workflows, and it reinforced my interest in understanding the systems behind business and creative work.`,
    publishedAt: "2026-09-17",
    updatedAt: "2026-09-17",
    readingTimeMinutes: 4,
    featured: true,
    keyTakeaway: "Using AI effectively for commercial production is less about generating an impressive image and more about building a reliable, coordinated workflow.",
    topics: [topics[3], topics[1]],
    relatedProjectSlugs: ["tohva"],
    relatedArticleSlugs: ["how-im-exploring-ai-for-business", "from-marketing-to-building-why-im-learning-to-build-digital-things", "what-im-building-right-now"],
    status: "published"
  },
  {
    id: "article-marketing-to-business",
    title: "What Working in Digital Marketing Taught Me About Building Businesses",
    slug: "what-working-in-digital-marketing-taught-me",
    excerpt: "Working in marketing taught me that marketing is rarely just a marketing problem. Behind content, campaigns and social media are questions about customers, positioning, value, systems and the business itself.",
    category: "Business",
    contentType: "Article",
    author: "Abhijith S Mohan",
    content: `I didn't enter digital marketing because I had a complete understanding of how businesses worked.

I entered it by doing things.

Taking photos. Making videos. Editing them. Managing social media. Creating content. Trying to understand what people would pay attention to.

Over time, something changed.

I started realizing that most marketing tasks sit on top of much bigger business questions.

Who are we trying to reach?

What problem are we solving?

Why should someone choose us?

What makes the brand different?

What happens after someone sees the content?

And eventually:

**How does the business itself work?**

That shift in thinking is probably the most important thing working in digital marketing has taught me so far.

## I started by learning the work

My early practical experience came through Planet Jewel.

I initially joined in a basic operational role, but my responsibilities gradually expanded into photography, video, editing, social media, digital marketing, content, strategy and influencer coordination.

That experience was valuable because I wasn't learning marketing only from a textbook.

I was actually producing things.

I could see the content being created, published and received by people.

I could see what attracted attention and what didn't.

I also learned that being able to execute something doesn't necessarily mean you understand the larger problem behind it.

That distinction became increasingly important to me.

## A piece of content is not the same thing as a business result

One of the easiest ways to think about digital marketing is through visible numbers.

Views.

Likes.

Followers.

Shares.

Reach.

And these numbers can absolutely be useful.

But attention and business results are not necessarily the same thing.

A piece of content can perform well without automatically meaning that the underlying business has grown by the same amount.

That distinction changed how I started looking at marketing.

A piece of content can perform well.

But a business still has to answer bigger questions.

Does the product solve a real problem?

Is the positioning clear?

Is the audience right?

Is the offer compelling?

Does the customer experience work?

Does attention eventually connect to some form of business value?

This made me less interested in the idea of "going viral" as an end goal and more interested in understanding what marketing is actually supposed to do for a business.

## I started asking a different question

Earlier, a marketing problem might look like:

**"What should we post?"**

Later, I started thinking:

**"Why are we posting this?"**

Then:

**"Who is this for?"**

And eventually:

**"What business problem are we trying to solve?"**

That progression might sound simple, but it changed the way I looked at marketing.

Content is an output.

Marketing is a system of decisions around customers, communication, positioning and distribution.

And those decisions are connected to the business itself.

If the positioning is unclear, more content may not fix it.

If the offer isn't compelling, better design may not fix it.

If the wrong audience is being targeted, more reach may not solve the problem.

That was one of my earliest realizations that **marketing cannot always be separated from business strategy.**

## Marketing made me more curious about the business behind the brand

The more I worked with digital marketing, the more questions I started having that weren't really about social media.

How are brands built?

How do businesses create value?

How does a customer move from discovering a brand to actually choosing it?

How do businesses make money?

What systems keep everything running?

How can technology make those systems better?

Those questions eventually became more interesting to me than simply learning another content format or another platform.

I still care about marketing.

But I started seeing it as one part of a much larger system.

## Building something changed the perspective again

Another important part of this journey was getting involved in building **Live by ONC / ORU NEW CULTURE**.

There is a difference between marketing an existing business and being involved in building one.

When you're building something, you can't only think about communication.

You have to think about the idea itself.

The audience.

The experience.

The team.

The operations.

The structure.

The business model.

The execution.

That experience pushed me closer to entrepreneurship because I started seeing how interconnected these pieces actually are.

Marketing wasn't sitting outside the business anymore.

It was part of the business.

## Then I started thinking in systems

My exposure to Define Perspective became another important shift in how I think.

Before that, I was more focused on individual tasks.

Complete this.

Create that.

Publish this.

Finish the project.

But working in a broader environment exposed me to a different way of thinking—business, technology, strategy, systems, infrastructure and long-term thinking.

The question started changing from:

**"How do I complete this task?"**

to:

**"How should this process work?"**

And then:

**"Can this become a system?"**

And eventually:

**"Can technology or automation improve the system?"**

That shift is a big reason why I'm now interested in areas beyond marketing, including AI, technology, automation and digital infrastructure.

I'm still learning these areas. I don't see myself as someone who has already mastered them.

But I understand more clearly why I want to learn them.

I want to understand the business stack more completely.

## My current way of thinking about marketing and business

I currently think about the connection roughly like this:

**Customer**
↓
**Problem**
↓
**Value**
↓
**Positioning**
↓
**Communication**
↓
**Customer Experience**
↓
**Business System**

Marketing sits across several parts of this chain.

But it doesn't replace the chain.

That is an important distinction.

Good communication can't compensate for a fundamentally weak business forever.

At the same time, a good business still needs to communicate its value clearly.

So I no longer see marketing as simply "getting attention."

I see it as one of the ways a business understands, communicates with and creates value for its market.

## What I believe now

Working in digital marketing taught me three things that I carry into how I think about businesses today.

### 1. Don't confuse activity with progress

Posting more doesn't automatically mean growing more.

A busy marketing calendar can still be disconnected from the actual business objective.

### 2. Look for the problem behind the task

If someone asks for a Reel, a campaign or a social media strategy, there may be a larger reason behind that request.

Understanding the reason can be more valuable than simply completing the task.

### 3. Think beyond the individual task

As businesses become more complex, repeating tasks isn't enough.

Processes need to become systems.

Systems can eventually be supported by technology and automation.

And that is where marketing, technology and business start becoming much more interesting to me.

## Marketing was my entry point, not the final destination

I don't think working in digital marketing made me a business expert.

It did something more useful.

It gave me a practical way to observe businesses.

I started with content.

Then I became interested in customers.

Then brands.

Then strategy.

Then business.

Then systems.

And now I'm increasingly interested in the technology and infrastructure that can support those systems.

I'm still figuring a lot of this out.

I'm a BBA Marketing student, I'm still learning, and I'm still building.

But I think that's also what makes this stage interesting.

I'm not trying to present a finished formula for building businesses.

I'm documenting how my thinking is changing as I gain more experience.

For me, digital marketing was the doorway.

**Business building became the bigger question.**`,
    publishedAt: "2026-09-14",
    updatedAt: "2026-09-14",
    readingTimeMinutes: 5,
    featured: true,
    keyTakeaway: "Digital marketing became my entry point into understanding the larger systems behind businesses.",
    topics: [topics[3], topics[0], topics[2]],
    relatedProjectSlugs: ["planet-jewel", "live-by-onc", "dp-ai-labs"],
    relatedArticleSlugs: ["how-i-think-about-building-a-business", "from-marketing-to-building-why-im-learning-to-build-digital-things"],
    status: "published",
    cta: {
      label: "Discuss a Business Idea",
      href: "/work-with-me"
    }
  },
  {
    id: "article-how-i-think-about-building",
    title: "How I Think About Building a Business",
    slug: "how-i-think-about-building-a-business",
    excerpt: "I don't see building a business as simply starting a company. I see it as identifying a real problem, understanding the opportunity, creating value, and building the systems needed to turn that value into something sustainable.",
    category: "Business",
    contentType: "Article",
    author: "Abhijith S Mohan",
    content: `I don't think building a business starts with registering a company.

For me, it starts much earlier.

It starts with noticing something.

A problem.

An inefficiency.

An unmet need.

Something that could work better.

That observation creates a question:

**Could there be an opportunity here?**

Over time, my interest in entrepreneurship has moved in that direction.

I'm less interested in the idea of simply "starting a business" and more interested in understanding how businesses come into existence in the first place.

What problem are they solving?

Who has that problem?

Why does the solution matter?

How can value be created?

How can that value become a sustainable business?

And once the business starts working, how can it become a system rather than depending on individual effort?

I don't have all the answers to these questions.

I'm still learning and experimenting.

But this is how I'm currently thinking about building businesses.

## 1. Start by seeing problems

I think opportunities are often hidden inside problems.

That doesn't mean every problem is a business opportunity.

But every potential business should have a reason for existing.

Something isn't working.

Something is too expensive.

Something is too slow.

Something is unnecessarily complicated.

Something is difficult to access.

Or perhaps something simply hasn't been built yet.

This is why I try to pay attention to problems before jumping directly to solutions.

Instead of starting with:

**"What can I build?"**

I find the question:

**"What is worth solving?"**

much more interesting.

## 2. Turn problems into opportunities

Once a problem is identified, the next question is whether there is actually an opportunity around it.

A problem can exist without being a viable business.

There needs to be someone who cares about solving it.

There needs to be enough value in the solution.

And there needs to be some way of creating and capturing that value.

This is where I think business thinking becomes important.

You aren't just asking whether you can build something.

You're asking whether building it makes sense.

## 3. Understand the people behind the problem

One thing my experience in marketing taught me is that businesses ultimately deal with people.

Customers aren't just numbers in an analytics dashboard.

They have needs, frustrations, preferences and reasons for making decisions.

Marketing gave me one way of observing this.

It made me think about audiences, communication, positioning and customer behaviour.

That experience influences how I think about business building today.

Before building a solution, I want to understand the person experiencing the problem.

Because solving the wrong problem extremely well is still a bad business decision.

## 4. Create value before thinking about extraction

One belief that has become increasingly important to me is that a business should create value before it extracts value.

The basic question is:

**What useful thing are we creating for someone?**

That value could come from saving time.

Reducing cost.

Making something easier.

Creating a better experience.

Providing access.

Removing complexity.

Or solving a problem that previously had no good solution.

Revenue matters. Businesses need sustainable economics.

But I don't think revenue should be the only starting point.

There should be something worth paying for first.

## 5. A business is more than its product

A good product isn't automatically a good business.

There is the customer.

There is marketing.

There is sales.

There are operations.

There is finance.

There is technology.

There are people.

There are processes.

There is customer support.

There is distribution.

There are decisions happening behind the scenes.

The more I work around businesses, the more I see them as interconnected systems rather than isolated products.

This is also why I became increasingly interested in systems thinking.

## 6. Build the system around the value

At some point, a business needs to move beyond individual actions.

One person remembering everything isn't a system.

Doing the same task manually forever isn't necessarily a system.

A collection of disconnected tools isn't necessarily a system either.

I think a useful system should make it easier for people to consistently create and deliver value.

That could involve:

- processes
- workflows
- documentation
- people
- technology
- automation
- measurement

The goal isn't automation for its own sake.

The goal is to make the business work better.

## 7. Technology should strengthen the business

This is one of the areas I'm becoming increasingly interested in.

AI and technology make it possible to rethink how many business processes work.

But I don't think technology should be added simply because it is new.

The better question is:

**What problem does the technology actually solve?**

Can it reduce repetitive work?

Can it improve decision-making?

Can it make a process faster?

Can it improve customer experience?

Can a small team use technology to accomplish more?

These questions are much more interesting to me than simply asking what the latest AI tool can do.

That is one reason my interests have expanded from marketing into AI, automation, software, websites, digital products and infrastructure.

## 8. Execution changes the idea

One thing I increasingly understand is that the original business idea rarely survives contact with reality unchanged.

You can think about an idea for months.

Then you actually build something.

People respond differently than you expected.

A process doesn't work.

The customer doesn't care about something you thought was important.

Something you considered a minor detail becomes the biggest problem.

That feedback is valuable.

It means the business isn't just being designed theoretically anymore.

It is being tested against reality.

This is why I believe execution is part of thinking.

You don't always think first and execute second.

Sometimes you execute in order to discover what you should think next.

## 9. Failure is information

I'm also becoming more comfortable with the idea that experiments don't always need to succeed to be useful.

If an idea doesn't work, there are questions worth asking.

What assumption was wrong?

Did we misunderstand the customer?

Was the problem not important enough?

Was the solution wrong?

Was the execution poor?

Was the timing wrong?

Did we build too much before validating the idea?

I see failure less as a final verdict and more as information about the assumptions behind the idea.

That doesn't mean every failed idea should be continued.

Sometimes the correct decision is to stop.

The value is in understanding why.

## 10. Think beyond the first version

Building something useful is only one stage.

The next challenge is making it repeatable.

Then sustainable.

Then scalable.

This is where systems, people and technology become increasingly important.

A business that works only because one person is constantly pushing every part of it has limitations.

The long-term question becomes:

**Can the value being created continue without everything depending on one individual action?**

I don don't have a finished answer to that.

But it is one of the questions I increasingly think about when looking at businesses.

# My current business-building framework

Right now, I think about the process roughly like this:

**See Problems**
↓
**Identify Opportunities**
↓
**Understand People**
↓
**Create Value**
↓
**Build the Business**
↓
**Build Systems**
↓
**Use Technology**
↓
**Execute & Learn**
↓
**Improve & Scale**

And underneath all of it is one simple principle:

> **Build something useful.**

The rest of the business exists to make that value possible, repeatable and sustainable.

# I'm still figuring it out

I want to be clear about something.

I'm not writing this as someone who has already built and scaled multiple successful companies.

I'm still learning.

I'm still experimenting.

I'm a BBA Marketing student.

I've worked inside businesses, participated in building initiatives, worked on digital projects and started exploring technology and AI more deeply.

Those experiences have changed how I think.

But they haven't given me a finished formula.

And I don't think there should be one.

Every business has different customers, markets, constraints, people and opportunities.

What I'm trying to develop is not a rigid formula.

It's a way of looking at problems.

**See the problem.**

**Understand the opportunity.**

**Create something useful.**

**Build the system around it.**

**Learn from reality.**

**Improve.**

And eventually, if the value is real and the system works, scale it.

That's the way I'm currently thinking about building businesses.

And I expect that thinking to change as I build more.`,
    publishedAt: "2026-09-14",
    updatedAt: "2026-09-14",
    readingTimeMinutes: 5,
    featured: true,
    keyTakeaway: "I see business building as a process of identifying problems, creating value, building systems, and continuously learning from reality.",
    topics: [topics[3], topics[0], topics[2]],
    relatedProjectSlugs: ["planet-jewel", "live-by-onc", "dp-ai-labs"],
    relatedArticleSlugs: ["what-working-in-digital-marketing-taught-me", "why-systems-matter-more-than-individual-tasks", "what-im-building-right-now"],
    status: "published",
    cta: {
      label: "Discuss a Business Idea",
      href: "/work-with-me"
    }
  },
  {
    id: "article-exploring-ai-business",
    title: "How I'm Exploring AI for Business",
    slug: "how-im-exploring-ai-for-business",
    excerpt: "I'm exploring how AI can help businesses with marketing, creative work, automation and workflows—and what I've learned from experimenting with it.",
    category: "AI",
    contentType: "Article",
    author: "Abhijith S Mohan",
    content: `AI became interesting to me when it stopped feeling like something happening somewhere else.

I started using it.

Not because I had a complete understanding of artificial intelligence, but because I started seeing practical problems where it could help.

Creative work.

Product photography.

Content.

Video.

Research.

Workflows.

And eventually, business processes.

That changed the question I was asking.

Instead of:

**"What can AI generate?"**

I started becoming more interested in:

**"What can AI actually help a business do?"**

I'm still exploring that question.

## I started with creative work

Some of my earliest practical experiences with AI came through creative work.

I've used AI-assisted approaches for product photography, creative development and visual content.

For TOHVA, for example, I worked on AI-powered product photography as part of the broader content-production process.

I also used AI-assisted visual development while working on the Pooja Vysh Makeovers project, including the brochure.

These experiences showed me something simple:

AI doesn't have to be a completely autonomous system to be useful.

Sometimes it can simply make one part of a workflow faster or more flexible.

A person still has to understand the requirement.

The output still needs to be evaluated.

The result still needs to fit the brand and the objective.

AI is a tool inside the process.

That distinction has stayed with me.

## Then I started looking beyond the output

Creative generation is probably one of the easiest ways to notice what AI can do.

You give it something.

It produces something.

You iterate.

You improve it.

But businesses aren't made of outputs alone.

They are made of processes.

A piece of content is one output.

Behind that content might be:

Research.

Ideation.

Briefing.

Creation.

Review.

Editing.

Approval.

Publishing.

Measurement.

Iteration.

That made me more interested in what happens when AI moves from generating an individual output to becoming part of the workflow itself.

## The question became: what problem are we solving?

I don't think AI should be added to a business simply because AI exists.

The better question is:

**What problem are we trying to solve?**

Maybe a process is repetitive.

Maybe information needs to move between systems.

Maybe a team spends too much time doing the same manual task.

Maybe research takes too long.

Maybe content production has too many repetitive steps.

Maybe a business has information but isn't using it effectively.

Those are more interesting AI opportunities to me than simply asking which tool is currently popular.

The technology is interesting.

But the problem comes first.

## AI and marketing naturally came together for me

Marketing was already a major part of my work before AI became such an important part of my thinking.

That made the intersection particularly interesting.

Marketing contains a lot of activities that involve research, writing, analysis, creative production, testing and iteration.

AI can assist with many of these.

It can help generate ideas.

It can help explore different approaches.

It can assist with research.

It can accelerate certain creative tasks.

It can help structure information.

But there is an important limitation.

AI can generate possibilities.

It doesn't automatically understand what the business should do.

Understanding the customer, the positioning, the offer and the business objective still matters.

That's why I see AI as an amplifier of a process rather than a replacement for thinking about the process.

## From AI outputs to workflows

This is where my interest started moving toward automation.

Using AI once is one thing.

Building a repeatable workflow around it is another.

For example:

**Input**

↓

**Process**

↓

**AI**

↓

**Review**

↓

**Output**

↓

**Measurement**

↓

**Improvement**

The interesting part isn't necessarily the AI model in the middle.

It is the system around it.

What information goes in?

What happens next?

Where does human judgment remain necessary?

What can be automated?

What needs approval?

How do we know whether the result is actually useful?

These questions have made me increasingly interested in systems and automation.

## I'm exploring AI agents too

Another area I'm currently exploring is AI agents.

The idea is interesting because it moves beyond asking AI to perform one isolated task.

Instead, an AI system could potentially work through multiple steps toward an objective.

But I'm approaching this as a learner.

I'm not presenting myself as an AI-agent expert.

I'm trying to understand:

What should an agent actually do?

Where does an agent make sense?

What information should it have access to?

Where should humans remain involved?

What happens when it makes a mistake?

How can these systems be made reliable enough to be useful?

Those questions matter more to me than simply building something that looks impressive in a demo.

## AI needs business thinking around it

One of the things I keep coming back to is that AI doesn't remove the need for business thinking.

If anything, it can make that thinking more important.

If everyone can generate content faster, differentiation may move toward the quality of the idea.

If everyone can automate certain tasks, the important question becomes which tasks are worth automating.

If everyone can access powerful AI tools, the advantage may increasingly come from how those tools are connected to a company's data, workflows, people and customers.

That's why I don't see my interest in AI as separate from my interest in business.

They are becoming increasingly connected.

## My current AI × Business framework

Right now, I'm thinking about AI applications roughly like this:

**Problem**

↓

**Process**

↓

**AI Opportunity**

↓

**Experiment**

↓

**Evaluate**

↓

**Improve**

↓

**System**

The important word for me is **experiment**.

I don't think every AI idea needs to become a product.

Sometimes you try something and discover that it isn't useful.

Sometimes the technology works but the workflow doesn't.

Sometimes the problem isn't important enough.

Sometimes a simpler solution is better.

That learning is part of the process.

## I'm still exploring

I'm still early in this journey.

I've used AI in practical creative work.

I've explored automation.

I'm learning about agents and newer AI systems.

I'm interested in how AI can connect with marketing, business processes and digital products.

But I don't have a final answer for what AI will mean for my own work.

And I don't think I need one yet.

What interests me is experimenting.

Taking a real problem.

Finding out whether AI can help.

Building something.

Testing it.

Learning from what happens.

Then improving the system.

That's increasingly how I want to approach AI.

Not as something to blindly follow.

Not as something to fear.

And not simply as another tool to collect.

**I want to understand what can actually be built with it.**

And more importantly:

**what is actually worth building with it.**`,
    publishedAt: "2026-09-16",
    updatedAt: "2026-09-16",
    readingTimeMinutes: 5,
    featured: true,
    keyTakeaway: "AI becomes more interesting to me when it moves beyond generating outputs and starts solving real business problems and improving workflows.",
    topics: [topics[1], topics[3], topics[0]],
    relatedProjectSlugs: ["tohva", "pooja-vysh-makeovers", "define-perspective", "dp-ai-labs"],
    relatedArticleSlugs: ["what-working-in-digital-marketing-taught-me", "how-i-think-about-building-a-business", "why-systems-matter-more-than-individual-tasks", "what-im-building-right-now"],
    status: "published",
    cta: {
      label: "Discuss an AI / Business Project",
      href: "/work-with-me"
    }
  },
  {
    id: "article-marketing-to-building",
    title: "From Marketing to Building: Why I'm Learning to Build Digital Things",
    slug: "from-marketing-to-building-why-im-learning-to-build-digital-things",
    excerpt: "The transition from understanding how to market a business to learning how to build digital products, and why technology is an enabling tool for business ideas.",
    category: "Business",
    contentType: "Insight",
    author: "Abhijith S Mohan",
    content: `I started with marketing.

At first, I was mainly interested in the visible side of business: social media, content, campaigns, branding, audience growth and how businesses communicate with people.

But the more I worked with businesses, the more I became interested in everything happening behind the marketing.

Why does a business exist in the first place?

How does it make money?

Why do customers choose one solution over another?

How are the processes behind the business designed?

And eventually, a different question started appearing:

What if I could build some of the things I'm thinking about instead of only marketing them?

That question gradually changed the direction of my learning.

## Marketing was where I started

Marketing taught me to look at businesses from the outside.

You have a product.

You have a customer.

You have a problem you're trying to solve.

You have a message that needs to reach the right people.

You test something, observe what happens, and improve it.

Working in digital marketing gave me exposure to many different types of businesses and projects. It also showed me something I didn't fully understand when I started:

Marketing is connected to almost every part of a business.

A marketing problem can actually be a product problem.

A content problem can be a positioning problem.

A sales problem can be a trust problem.

And sometimes, what looks like a marketing problem is actually a systems problem.

That made me want to understand more.

## I became curious about what happens behind the marketing

When you're working on a campaign, you naturally start asking questions beyond the campaign itself.

Where does the product come from?

How does the customer journey work?

What happens after someone clicks?

How is information collected?

How are leads handled?

What happens repeatedly inside the business?

Could some of those processes be automated?

Could the experience be better?

The more questions I asked, the less interested I became in looking at marketing as an isolated function.

I started seeing it as one part of a much larger system.

And that changed what I wanted to learn.

## I wanted to understand how businesses actually work

I've always been interested in the idea of building businesses.

But having a business idea and understanding how to turn that idea into something real are two very different things.

An idea is easy.

Building the thing is where reality starts.

You have to understand the problem.

You have to understand the customer.

You have to figure out the business model.

You have to create the product or service.

You have to build the systems around it.

You have to get people to discover it.

And then you have to keep improving it.

Marketing helped me understand one part of this equation.

I wanted to understand more of it.

## The next question became: can I build the solution?

This is where technology became interesting to me.

Not because I suddenly wanted to become a software engineer.

And not because I think everyone needs to learn how to code.

It was much simpler than that.

I wanted to understand how digital things are built.

If I had an idea for a website, I wanted to understand what would actually be required to create it.

If I had an idea for a digital product, I wanted to understand what sits behind the interface.

If I saw a repetitive business process, I wanted to know whether it could be automated.

If I wanted to test an idea, I didn't always want to depend completely on someone else to make the first version.

That curiosity pushed me toward learning the technical side.

## Learning to build digital things

My learning has been gradual.

I've explored things like websites, GitHub, Vercel, Next.js, automation, AI tools and other parts of the modern digital stack.

Some of it has been confusing.

Some things took much longer to understand than I expected.

And I'm still learning.

But the important change wasn't becoming technically advanced overnight.

It was learning to think differently.

Instead of:

"I have an idea."

I started thinking:

"What would it take to actually build this?"

That is a very different question.

It forces you to break an idea into components.

What does the user need?

What does the system need?

What data is required?

What happens when something goes wrong?

What can be automated?

What should remain manual?

What is the simplest version that can be tested?

Those questions are useful even when you're not writing the code yourself.

## Websites changed the way I think

Building this personal website has been one of the practical ways I've experienced this shift.

A website can look simple from the outside.

You see a page.

You click a button.

You read an article.

But underneath that are many different decisions.

There is the structure.

There is the content architecture.

There are URLs, metadata, search discovery, structured data, performance, accessibility, deployment and version control.

Learning about those layers made me realise that building a digital product is much more than designing what appears on the screen.

The interface is only the visible layer.

There is a system underneath it.

And understanding that system changes how you approach the product itself.

## Then came AI and automation

AI made this even more interesting.

Before, learning the technical side could sometimes feel like there was a large gap between having an idea and being able to build it.

AI doesn't remove that gap.

But it can change how you approach it.

I'm particularly interested in AI when it connects to actual business problems.

For example:

- repetitive workflows
- content production
- research
- data handling
- customer processes
- internal operations
- automation
- decision support
- digital products

The interesting question for me isn't:

"What can AI do?"

It's:

"Where can AI create useful leverage inside a real business?"

That distinction matters.

Technology is useful when it helps solve something.

## Building is different from having an idea

One of the biggest things I'm learning is that ideas become much more interesting when you try to build them.

When an idea exists only in your head, everything seems possible.

Once you start building, constraints appear.

The technology may not work the way you expected.

The customer may not behave the way you expected.

The process may be more complicated than you thought.

The economics may not make sense.

Something you thought was important may turn out not to matter.

That is actually valuable.

Because building turns assumptions into things you can test.

And testing creates information.

That's why I increasingly see building as a form of learning.

## I'm still learning the technical side

I don't consider myself a technologist.

I'm learning technology because I want to become a better builder.

There is a difference.

I don't need to know everything.

I need enough understanding to:

- identify what is technically possible
- communicate with technical people
- break down problems
- prototype ideas
- understand systems
- use AI effectively
- make better business decisions
- know when I need deeper technical expertise

And when something is beyond my current ability, that's okay.

Learning to build doesn't mean doing everything alone.

It means understanding enough to participate meaningfully in the building process.

## Why I want to become a builder

The more I learn, the more I realise that the kind of entrepreneur I want to become needs more than one skill.

Marketing helps me understand markets and customers.

Business helps me understand value, models and opportunities.

AI can create new ways of working.

Technology provides the infrastructure for many of the things I want to build.

And systems connect everything together.

That's why I don't see my journey as moving from marketing to technology.

I see it as expanding from marketing into building.

Marketing was the starting point.

Business is the bigger context.

Technology and AI are becoming tools that help me build.

## The way I'm thinking about building now

The mental model I'm developing is relatively simple:

Understand the Problem

↓

Understand the Business

↓

Design the Solution

↓

Learn What Is Needed to Build It

↓

Build

↓

Test

↓

Learn

↓

Improve

I'm sure this framework will change as I gain more experience.

That's part of the point.

I'm not trying to create a perfect methodology before I have enough experience to justify one.

I'm trying to build, observe, learn and refine my thinking.

## I'm not trying to become a technologist

This distinction is important to me.

I don't want technology to become another title I put beside my name just because I'm learning some technical tools.

What interests me is what technology enables.

Can it help me build a better business?

Can it help a small team accomplish more?

Can it turn an idea into a prototype?

Can it remove repetitive work?

Can it create a better customer experience?

Can it make something that previously required a large team possible for a much smaller one?

Those are the questions that interest me.

## From marketer to builder

Looking back, the transition feels less like a change of direction and more like a natural progression.

Marketing made me curious about businesses.

Businesses made me curious about problems.

Problems made me interested in solutions.

Solutions made me want to understand building.

And building has pushed me toward technology, AI and systems.

I don't know exactly where that path will lead.

But I know what I'm trying to become better at:

seeing opportunities, understanding problems, building solutions and turning those solutions into businesses.

That's the direction I'm exploring.

And for me, learning to build digital things is simply another step toward becoming the kind of entrepreneur I want to be.`,
    publishedAt: "2026-09-16",
    updatedAt: "2026-09-16",
    readingTimeMinutes: 5,
    featured: true,
    keyTakeaway: "Learning technology isn't about changing my identity from marketer to technologist; it's about becoming capable of turning business ideas into things that can actually be built.",
    topics: [topics[3], topics[1], topics[2]],
    relatedProjectSlugs: ["dp-ai-labs", "planet-jewel", "tohva"],
    relatedArticleSlugs: ["what-working-in-digital-marketing-taught-me", "how-i-think-about-building-a-business", "how-im-exploring-ai-for-business", "why-systems-matter-more-than-individual-tasks", "what-im-building-right-now"],
    status: "published",
    cta: {
      label: "Discuss a Business Idea",
      href: "/work-with-me"
    }
  },
  {
    id: "why-systems-matter-more-than-individual-tasks",
    title: "Why Systems Matter More Than Individual Tasks",
    slug: "why-systems-matter-more-than-individual-tasks",
    excerpt: "Doing a task solves today's problem; building a system creates a way to solve it repeatedly.",
    category: "Business",
    contentType: "Insight",
    author: "Abhijith S Mohan",
    content: `For a long time, I thought getting things done was mostly about completing the task in front of me.

Create the content.

Edit the video.

Publish the post.

Send the message.

Finish the project.

Move to the next thing.

That approach works when there aren't many things happening at once.

But as I started working across different projects, teams and responsibilities, I began noticing a problem.

Completing a task once is very different from building a way to complete it repeatedly.

That difference is what made me start thinking more seriously about systems.

## Tasks are visible. Systems are underneath them.

A task is usually easy to see.

Someone has to create a post.

Someone has to collect information.

Someone has to follow up with a lead.

Someone has to prepare a report.

Someone has to review the work.

But behind a repeated task there is usually a process.

Where does the information come from?

Who does the first step?

What happens next?

What happens if something is missing?

Who checks the output?

Where is everything stored?

What happens when the person responsible isn't available?

Once you start asking these questions, you're no longer just looking at the task.

You're looking at the system around the task.

## I started noticing this through marketing

Digital marketing can look like a collection of creative tasks from the outside.

But when you're actually doing it, there are many moving parts.

Research.

Ideas.

Content planning.

Writing.

Design.

Video production.

Approvals.

Publishing.

Analytics.

Iteration.

And then the process starts again.

If every piece depends entirely on someone remembering what to do next, the work becomes difficult to maintain.

You can still get things done.

But the process becomes dependent on individuals.

That made me realise something:

A good person can complete a task. A good system helps people complete the process consistently.

## A workflow is more than a checklist

At first, I thought systems were basically checklists.

Do A.

Then B.

Then C.

But I'm learning that a real workflow has more layers.

There are inputs.

There are decisions.

There are dependencies.

There are outputs.

There are feedback loops.

For example, a content workflow isn't simply:

Create → Publish.

It could be:

Research → Idea → Brief → Production → Review → Approval → Publishing → Performance → Learning → Next Idea

The output of one stage becomes the input for another.

And the results from the final stage can change what happens at the beginning of the next cycle.

That's a system.

## Systems create consistency

One reason systems matter is consistency.

If something depends entirely on memory, energy or individual working style, the result can change every time.

A system gives people a shared way of working.

It can define:

- what needs to happen
- when it needs to happen
- who is responsible
- what information is required
- what the expected output looks like
- what happens next

That doesn't mean everything should become rigid.

Good systems should make work easier, not turn people into machines.

The purpose is to reduce unnecessary thinking around repetitive processes so that more attention can go toward the parts that actually require judgment.

## But automation isn't the same as a system

This is something I'm still learning.

When I first became more interested in automation and AI, it was easy to think:

If I can automate something, I've built a system.

I don't think that's necessarily true.

Automation is a tool.

A system is the larger structure.

If the underlying process is badly designed, automating it can simply make the bad process happen faster.

You still need to understand:

What is happening?

Why is it happening?

What should happen instead?

Only then does automation become useful.

## AI makes systems even more interesting

This is one reason I'm increasingly interested in AI for business.

Traditional automation is often very good when the rules are clear.

But businesses also contain tasks that involve information, interpretation and decisions.

Researching information.

Classifying something.

Summarising documents.

Generating a first draft.

Analysing data.

Handling repetitive communication.

Finding patterns.

AI can potentially become another component inside these workflows.

But again, the interesting part isn't simply putting AI everywhere.

It's asking:

Where does AI actually improve the system?

Sometimes the answer will be AI.

Sometimes it will be automation.

Sometimes it will be a better process.

And sometimes the best solution may simply be a clearer human workflow.

## Small teams need leverage

This has become particularly interesting to me because I want to build businesses.

A small team can't always compete with a larger organisation by simply working more hours.

There has to be leverage.

Better processes can create leverage.

Technology can create leverage.

Automation can create leverage.

AI can create leverage.

Documentation can create leverage.

Reusable assets can create leverage.

The goal isn't to remove people from the process.

It's to allow people to spend more of their time on work where human judgment actually matters.

## Systems also expose problems

There's another side to this.

Building a system doesn't automatically make something better.

Sometimes creating a process exposes how poorly the original process was designed.

You might discover unnecessary steps.

Duplicate work.

Missing information.

Unclear ownership.

Bad communication.

Approvals that take too long.

Or simply a process that shouldn't exist in the first place.

That's useful.

Because systems force you to make the process visible.

And once something is visible, it becomes easier to question.

## I'm learning to think in processes

One of the changes I'm trying to make in my own thinking is moving from:

What do I need to do?

toward:

What process makes this easier to do consistently?

That's a small change in wording, but it changes how I approach problems.

Instead of solving the same problem every day, I start asking whether the problem can be solved at the process level.

Instead of creating something from scratch every time, I look for reusable structures.

Instead of relying on memory, I look for ways to document the process.

Instead of adding more people immediately, I first look for unnecessary work.

I'm still developing this way of thinking.

But it has already changed how I look at projects.

## My current mental model

The way I currently think about a system is fairly simple:

Input

↓

Process

↓

Decision / Action

↓

Output

↓

Feedback

↓

Improvement

And then the cycle continues.

A system isn't necessarily software.

It could be a content workflow.

A sales process.

A project management structure.

A customer onboarding process.

A way of documenting knowledge.

A repeatable marketing process.

Or eventually, a piece of software that brings several of these things together.

The important part is that the process is understood and can improve over time.

## Systems should serve the business

This is probably the most important lesson I'm developing.

A system shouldn't exist simply because building systems feels sophisticated.

It should serve a purpose.

Save time.

Reduce errors.

Improve consistency.

Make information easier to access.

Improve customer experience.

Help people collaborate.

Create leverage.

Or make something possible that wasn't practical before.

If a system doesn't create meaningful value, it may just be additional complexity.

That's something I want to remember as I continue learning.

## Why this matters for the businesses I want to build

Eventually, I want to build businesses that can grow beyond the people who started them.

That requires more than a good idea.

It requires processes.

It requires knowledge.

It requires technology.

It requires people.

It requires feedback.

And it requires systems that can evolve as the business evolves.

That's why systems have become increasingly interesting to me.

Not because I want to automate every task.

Not because I want to make everything complicated.

But because I want to understand how businesses can become repeatable, scalable and less dependent on individual effort.

## From doing tasks to building systems

I'm still early in learning this.

I don't have a perfect framework for systems.

I'm experimenting with workflows, automation, AI and the way teams organise work.

And I expect my understanding to change as I build more things.

But one idea is becoming clearer:

Doing the task solves today's problem.

Building the system can solve the problem repeatedly.

That's the shift I'm interested in.

Because if I want to build businesses rather than simply work inside them, I need to learn not only how to get things done.

I need to learn how to build ways of getting things done better.

And that's where systems become part of the builder's toolkit.`,
    publishedAt: "2026-09-16",
    updatedAt: "2026-09-16",
    readingTimeMinutes: 4,
    featured: false,
    keyTakeaway: "Doing a task solves today's problem; building a system creates a way to solve it repeatedly.",
    topics: [topics[3], topics[1]],
    relatedProjectSlugs: ["dp-ai-labs", "planet-jewel"],
    relatedArticleSlugs: ["how-i-think-about-building-a-business", "how-im-exploring-ai-for-business", "from-marketing-to-building-why-im-learning-to-build-digital-things", "what-im-building-right-now"],
    status: "published"
  },
  {
    id: "what-im-building-right-now",
    title: "What I'm Building Right Now",
    slug: "what-im-building-right-now",
    excerpt: "I'm in the building phase — developing the skills, systems, knowledge and experience required to build bigger things later.",
    category: "Business",
    contentType: "Now",
    author: "Abhijith S Mohan",
    content: `There is a difference between what I want to build someday and what I'm actually building today.

When you're interested in marketing, AI, and business, it's easy to look at the massive technology companies, the complex AI products, and the sophisticated platforms, and think: that's what I should be building. 

But I'm not building a massive technology platform today. I'm not launching a venture-backed startup right now. Those are long-term ambitions.

What I am actually building today is the foundation. 

I am in a building phase—developing the skills, systems, knowledge, and experience required to build bigger things later. 

## What already exists

Right now, my existing foundation is rooted in digital marketing and early business execution. Through my work across different agencies and roles, I have a practical understanding of how to market products, how to analyze data, and how to operate within a team.

These are established skills. They exist. They are the baseline from which I operate.

## What is currently being built

What I am actively building right now is my capability to connect marketing to technology and systems.

At DP AI Labs, I am building my experience in project management and IT team leadership. I am learning how to guide teams, coordinate workflows, and execute digital projects. 

Simultaneously, I am building practical business systems. I am figuring out how to take a chaotic marketing process and turn it into a reliable workflow. I am building ways to track execution, measure performance, and ensure consistency without relying entirely on manual effort.

## What is being explored

Beyond the immediate work, there is a layer of exploration. 

I am actively exploring how AI can be integrated into business operations. This doesn't mean I am building proprietary AI models. It means I am exploring how existing AI tools can be used to solve real problems—how to automate repetitive tasks, how to assist in creative workflows, and how to create leverage for small teams.

I am also exploring digital product concepts and SaaS tools. I am learning how digital products are structured, how they solve problems, and what makes them viable businesses. 

## What is only a long-term ambition

Eventually, I want to build businesses that can scale independently. I want to build comprehensive digital platforms, sophisticated AI-driven products, and larger technology infrastructure. 

Those are ambitions. They are not what I have accomplished today. 

Recognizing that distinction is important because it keeps me focused on the step right in front of me. You cannot build the complex platform until you know how to build the simple workflow. You cannot automate a business until you understand how the business actually operates.

## The building phase

Right now, my focus is on learning how to build. 

I am building my understanding of how different pieces—marketing, AI, technology, and business strategy—fit together. I am turning ideas into testable projects. I am testing assumptions, learning from what doesn't work, and refining my approach.

I am developing the systems that will eventually allow me to build on a larger scale.

And this website is one part of that process.`,
    publishedAt: "2026-09-16",
    updatedAt: "2026-09-16",
    readingTimeMinutes: 3,
    featured: false,
    keyTakeaway: "I'm in the building phase — developing the skills, systems, knowledge and experience required to build bigger things later.",
    topics: [topics[3], topics[1], topics[2]],
    relatedProjectSlugs: ["dp-ai-labs", "planet-jewel", "live-by-onc", "tohva", "pooja-vysh-makeovers"],
    relatedArticleSlugs: ["how-i-think-about-building-a-business", "how-im-exploring-ai-for-business", "from-marketing-to-building-why-im-learning-to-build-digital-things", "why-systems-matter-more-than-individual-tasks"],
    status: "published"
  },
  {
    id: "case-study-live-by-onc",
    title: "Building a Community Initiative Around Events, Creativity, and Connection",
    slug: "how-we-built-live-by-onc",
    excerpt: "Live by ONC was a community and cultural initiative created by a founding group of seven. We experimented beyond conventional events to create spaces where people could meaningfully engage with culture, creativity, and each other.",
    category: "Business",
    contentType: "Case Study",
    author: "Abhijith S Mohan",
    content: `Live by ONC (Oru New Culture) was a community and cultural initiative based in Thiruvananthapuram, designed to bring people together through shared experiences. 

The initiative began with a group of seven students from Christ Nagar College. Rather than organizing standard commercial events, the goal was to create spaces where people could meaningfully engage with culture, creativity, and each other.

### A Focus on Experiences, Not Just Events

One of the ideas I took from ONC was that community could be built around shared interests and active participation, rather than simply bringing people together as an audience. 

To test this, the initiative experimented with different formats and community activities, including:

- Music nights
- Creative and participatory workshops
- Crochet
- Nature-inspired art
- Stone balancing

### Approaching the Work as a Founding Team

In my experience working on the early stages of ONC, roles were not rigidly isolated into conventional job descriptions. Because we were building something collaboratively, I observed that the seven of us had to develop the structure alongside the events themselves.

My involvement across the initiative focused on marketing research, strategic direction, social media, event coordination, and team building. The objective of our marketing and social media wasn't just to announce dates and times, but to communicate the identity and feeling behind the initiative, ensuring we were reaching the right audience.

Simultaneously, we were learning how to build a team. A major part of the early work involved coordinating people, organizing workflows, and structuring the business side of the initiative so that ideas could actually be executed.

### What the Early Events Taught Us

When we started, there wasn't a finished blueprint. We didn't know exactly which formats would resonate most strongly. 

Instead, the initiative evolved through experimentation. A typical event required us to move through a high-level process of:

**Idea → Coordination → Event Planning → Promotion → Execution → Learning**

By observing what people responded to and how the team worked together, we refined our approach. By February 2026, when the initiative was featured in *The New Indian Express*, ONC had conducted more than seven events across these varying formats.

### The Bigger Picture

ONC represented an important shift in my journey. While previous experiences taught me how to work inside an operating business, ONC gave me the opportunity to help build something from an early stage alongside a team. 

It taught me that an idea can be strong, but turning it into something real requires a surrounding system: people, communication, structure, and execution. It strengthened my interest in entrepreneurship and building systems around ideas, rather than only working within existing structures.`,
    publishedAt: "2026-09-16",
    readingTimeMinutes: 3,
    featured: true,
    keyTakeaway: "An idea can be strong, but turning it into something real requires a surrounding system: people, communication, structure, and execution.",
    topics: [topics[3], topics[0]],
    relatedProjectSlugs: ["live-by-onc"],
    relatedArticleSlugs: ["how-i-think-about-building-a-business", "what-im-building-right-now"],
    status: "published"
  }
];

export function getKnowledgeArticles(): KnowledgeArticle[] {
  return knowledgeArticles.filter(article => article.status === "published");
}

export function getKnowledgeArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return getKnowledgeArticles().find((a) => a.slug === slug);
}

export function getProjectsByTopic(topicSlug: string): Project[] {
  return projects.filter((p) => p.topics.some((t) => t.slug === topicSlug));
}

export function getKnowledgeByTopic(topicSlug: string): KnowledgeArticle[] {
  return getKnowledgeArticles().filter((a) => a.topics.some((t) => t.slug === topicSlug));
}
