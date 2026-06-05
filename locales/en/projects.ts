export const projects = {
  page: {
    badge: "Portfolio",
    title: "Developed projects",
    description:
      "A selection of projects that show my experience with backend, automation, integrations, architecture and technology applied to business.",
  },

  detail: {
    overview: "Overview",
    problem: "Problem",
    solution: "Solution",
    architecture: "Architecture",
    technologies: "Technologies used",
    gallery: "Gallery",
    relatedCaseStudy: "Related case study",
    relatedCaseStudyDescription:
      "Also read the technical article related to this project, with more details about decisions, challenges and learnings.",
    imageAlt: "Project image",
  },

  items: [
    {
      slug: "whera",
      title: "Whera",
      type: "Frontend",
      category: "Frontend",
      subcategory: "Next.js",
      description:
        "Platform for managing and showcasing local businesses with a mobile-first experience and intelligent discovery.",
      overview:
        "Whera is a web platform designed to connect people to local businesses through a mobile-first experience, store pages, filters, categories and discovery features.",
      problem:
        "Many local businesses have a weak digital presence, depend only on social media and do not have an organized showcase to present products, services, information and contact channels.",
      solution:
        "The solution was to create a lightweight, visual and responsive platform where stores can be displayed as cards, with individual pages, main information, categories, contact options and simple navigation for end users.",
      architecture:
        "Frontend built with Next.js and React, consuming data from Supabase and prepared for dynamic pages, filters, images and future expansion with an admin panel.",
      technologies: ["Next.js", "React", "TypeScript", "Supabase"],
      gallery: [
        "/images/projects/whera/background.jpg",
        "/images/projects/whera/background.jpg",
        "/images/projects/whera/background.jpg",
      ],
      demoUrl: "",
      videoUrl: "",
      githubUrl: "https://github.com/geovanarosamendes",
      relatedPostSlug: "",
    },
    {
      slug: "crm-sso",
      title: "CRM + Microsoft Entra ID",
      type: "Backend",
      category: "Backend",
      subcategory: "Authentication",
      description:
        "Corporate authentication integration using Microsoft Entra ID in business applications.",
      overview:
        "Project focused on integrating corporate login with Microsoft Entra ID into a CRM system using OpenID Connect authentication.",
      problem:
        "The system needed secure authentication with corporate accounts, reducing dependence on internal login and improving user access control.",
      solution:
        "An authentication flow with Microsoft Entra ID was implemented, including middleware configuration, login callback and session handling integrated with the existing system.",
      architecture:
        "Web application integrated with Microsoft Entra ID using OpenID Connect, authentication middleware, session cookies and communication with protected services.",
      technologies: ["C#", ".NET", "OpenID Connect", "Microsoft Entra ID"],
      gallery: [],
      demoUrl: "",
      videoUrl: "",
      githubUrl: "https://github.com/geovanarosamendes",
      relatedPostSlug: "sso-microsoft-entra-id",
    },
    {
      slug: "rabbitmq",
      title: "RabbitMQ Integration",
      type: "Architecture",
      category: "Architecture",
      subcategory: "Messaging",
      description:
        "Event-driven architecture for communication between corporate systems.",
      overview:
        "Conceptual and technical project for asynchronous communication between systems using RabbitMQ messaging.",
      problem:
        "Corporate systems often depend on direct and fragile integrations, creating coupling, slowness and difficulty in tracking failures.",
      solution:
        "An architecture based on queues, producers and consumers was designed, allowing more decoupled, traceable and scalable communication.",
      architecture:
        "Producer services publish messages to RabbitMQ, consumers process events and persist information in a database, with support for retries and logs.",
      technologies: ["RabbitMQ", ".NET", "SQL Server", "Messaging"],
      gallery: [],
      demoUrl: "",
      videoUrl: "",
      githubUrl: "https://github.com/geovanarosamendes",
      relatedPostSlug: "arquitetura-integracoes",
    },
  ],
};
