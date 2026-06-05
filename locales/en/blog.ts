export const blog = {
  page: {
    badge: "Blog",
    title: "Articles and learnings",
    description:
      "Experiences, studies and reflections on software development, architecture, automation, AI and technology applied to business.",
  },

  detail: {
    back: "Back to blog",
    underConstruction:
      "This article is still under construction. Soon, this space will include complete content with explanations, practical examples and project learnings.",
  },

  card: {
    readArticle: "Read article",
  },

  posts: [
    {
      slug: "sso-microsoft-entra-id",
      title: "How I implemented SSO with Microsoft Entra ID",
      description:
        "A practical summary about corporate authentication, challenges and learnings in legacy applications.",
      category: "Backend",
      subcategory: "Authentication",
      readTime: "5 min read",
    },
    {
      slug: "arquitetura-integracoes",
      title: "Architecture for enterprise integrations",
      description:
        "How to think about communication between systems, events, queues and traceability.",
      category: "Architecture",
      subcategory: "Integrations",
      readTime: "7 min read",
    },
    {
      slug: "dados-negocios",
      title: "Data as support for business decisions",
      description:
        "How to transform scattered information into useful indicators for management.",
      category: "Data & AI",
      subcategory: "Business Intelligence",
      readTime: "6 min read",
    },
  ],
};
