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
        text: "DP AI Labs represents an important evolution in my professional direction.\n\nMy earlier experience was heavily focused on:\n\nMarketing → Content → Creative → Customers\n\nMy current technology work is expanding that into:\n\nTechnology → Systems → Products → Teams → Execution\n\nThe two areas aren't separate for me. I'm increasingly interested in the intersection:\n\nMarketing × AI × Technology × Business",
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

export function getKnowledgeArticles(): KnowledgeArticle[] {
  // Graceful empty array until essays are documented in later phase
  return [];
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
