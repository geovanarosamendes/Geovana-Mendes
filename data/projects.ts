export const projects = [
  {
    slug: "whera",
    title: "Whera",
    type: "Frontend",
    category: "Frontend",
    subcategory: "Next.js",

    description:
      "Plataforma para gestão e divulgação de negócios locais com foco em experiência mobile e descoberta inteligente.",

    overview:
      "O Whera é uma plataforma web pensada para conectar pessoas a negócios locais, com experiência mobile-first, páginas de lojas, filtros, categorias e descoberta de estabelecimentos.",

    problem:
      "Muitos negócios locais têm baixa presença digital, dependem apenas de redes sociais e não possuem uma vitrine organizada para apresentar produtos, serviços, informações e canais de contato.",

    solution:
      "A solução foi criar uma plataforma leve, visual e responsiva, onde lojas podem ser exibidas em cards, com página individual, informações principais, categorias, contatos e navegação simples para o usuário final.",

    architecture:
      "Frontend em Next.js com React, consumo de dados via Supabase e estrutura preparada para páginas dinâmicas, filtros, imagens e expansão futura com painel administrativo.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
    ],

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
    subcategory: "Autenticação",

    description:
      "Integração de autenticação corporativa utilizando Microsoft Entra ID em aplicações empresariais.",

    overview:
      "Projeto focado na integração de login corporativo com Microsoft Entra ID em um sistema CRM, utilizando autenticação baseada em OpenID Connect.",

    problem:
      "O sistema precisava permitir autenticação segura com contas corporativas, reduzindo dependência de login interno e melhorando controle de acesso dos usuários.",

    solution:
      "Foi implementado fluxo de autenticação com Microsoft Entra ID, configuração de middleware, callback de login e tratamento de sessão para integração com o sistema existente.",

    architecture:
      "Aplicação web integrada ao Microsoft Entra ID usando OpenID Connect, middleware de autenticação, cookies de sessão e comunicação com serviços protegidos.",

    technologies: [
      "C#",
      ".NET",
      "OpenID Connect",
      "Microsoft Entra ID",
    ],

    gallery: [],

    demoUrl: "",
    videoUrl: "",

    githubUrl: "https://github.com/geovanarosamendes",

    relatedPostSlug: "sso-microsoft-entra-id",
  },

  {
    slug: "rabbitmq",
    title: "Integração RabbitMQ",
    type: "Arquitetura",
    category: "Arquitetura",
    subcategory: "Mensageria",

    description:
      "Arquitetura baseada em eventos para comunicação entre sistemas corporativos.",

    overview:
      "Projeto conceitual e técnico para comunicação assíncrona entre sistemas utilizando mensageria com RabbitMQ.",

    problem:
      "Sistemas corporativos muitas vezes dependem de integrações diretas e frágeis, criando acoplamento, lentidão e dificuldade de rastrear falhas.",

    solution:
      "Foi desenhada uma arquitetura baseada em filas, produtores e consumidores, permitindo comunicação mais desacoplada, rastreável e preparada para crescimento.",

    architecture:
      "Serviços produtores publicam mensagens no RabbitMQ, consumidores processam eventos e persistem informações em banco de dados, com possibilidade de retentativas e logs.",

    technologies: [
      "RabbitMQ",
      ".NET",
      "SQL Server",
      "Mensageria",
    ],

    gallery: [],

    demoUrl: "",
    videoUrl: "",

    githubUrl: "https://github.com/geovanarosamendes",

    relatedPostSlug: "arquitetura-integracoes",
  },
];