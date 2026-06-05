export const blog = {
  page: {
    badge: "Blog",
    title: "Artigos e aprendizados",
    description:
      "Experiências, estudos e reflexões sobre desenvolvimento de software, arquitetura, automação, IA e tecnologia aplicada a negócios.",
  },

  detail: {
    back: "Voltar para o blog",
    underConstruction:
      "Este artigo ainda está em construção. Em breve, este espaço terá o conteúdo completo com explicações, exemplos práticos e aprendizados do projeto.",
  },

  card: {
    readArticle: "Ler artigo",
  },

  posts: [
    {
      slug: "sso-microsoft-entra-id",
      title: "Como implementei SSO com Microsoft Entra ID",
      description:
        "Um resumo prático sobre autenticação corporativa, desafios e aprendizados em aplicações legadas.",
      category: "Backend",
      subcategory: "Autenticação",
      readTime: "5 min de leitura",
    },
    {
      slug: "arquitetura-integracoes",
      title: "Arquitetura para integrações empresariais",
      description:
        "Como pensar comunicação entre sistemas, eventos, filas e rastreabilidade.",
      category: "Arquitetura",
      subcategory: "Integrações",
      readTime: "7 min de leitura",
    },
    {
      slug: "dados-negocios",
      title: "Dados como apoio para decisões de negócio",
      description:
        "Como transformar informações espalhadas em indicadores úteis para gestão.",
      category: "Dados & IA",
      subcategory: "Business Intelligence",
      readTime: "6 min de leitura",
    },
  ],
};
