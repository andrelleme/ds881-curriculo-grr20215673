export const ptData = {
  name: "Andre Leme",
  role: "Software Engineer · Fullstack & Cloud",
  location: "Curitiba, PR",
  email: "andreleme08@gmail.com",
  linkedin: "https://linkedin.com/in/andreleme71/",
  linkedinLabel: "linkedin/andreleme71",
  github: "https://github.com/andrelleme",
  githubLabel: "github/andrelleme",

  summary:
    "Desenvolvedor de Software com foco em backend e arquitetura cloud, especializado no ecossistema .NET e Azure. Experiência em modernização de sistemas financeiros de missão crítica, migração on-premises para nuvem e implementação de arquiteturas orientadas a eventos. Forte atuação em Infraestrutura como Código (Terraform), governança e otimização de processos de fechamento mensal, reduzindo tempos de processamento em até 90%.",

  experience: [
    {
      company: "Volvo Financial Services",
      location: "Curitiba, PR",
      role: "Estagiário de Engenharia de Software",
      period: "Dez 2024 — Jan 2025",
      bullets: [
        "Liderei a migração e refatoração de quatro aplicações críticas de infraestrutura on-premises para Azure, utilizando App Services, Azure Functions e Service Bus para garantir escalabilidade.",
        "Desenvolvi uma solução web para a operação de leasing no Chile, automatizando fluxos de fechamento mensal e garantindo a integridade dos dados financeiros em períodos de alta carga.",
        "Otimizei integrações via Python entre o sistema core e Dynamics 365, reduzindo o tempo de processamento de 1 hora para 5 minutos, impactando diretamente a agilidade do fechamento financeiro.",
        "Implementei monitoração avançada utilizando Application Insights, reduzindo o tempo médio de resposta a incidentes e facilitando a análise de causa raiz em microsserviços.",
        "Padronizei a documentação técnica no Confluence, mapeando processos legados inexistentes e facilitando o onboarding do time e a conformidade em auditorias.",
        "Colaborei em ambiente ágil participando de Dailies e Code Reviews, assegurando a qualidade de código e conformidade com padrões de Clean Architecture e SOLID.",
        "Contribuí para atividades relacionadas a auditoria de TI interna e externa, incluindo levantamento de evidências,análise de controles tecnológicos e apoio na mitigação de apontamentos críticos.",
        "Gerenciei incidentes e solicitações utilizando práticas ITSM e plataforma ServiceNow"
      ],
    },
  ],

  projects: [
    {
      name: "Sistema de Controle de Gastos Domésticos",
      year: "2026",
      stack: "Fullstack · .NET 8 + React + Terraform + Azure",
      github: "https://github.com/andrelleme/controle-gastos-residenciais",
      bullets: [
        "Arquitetei uma solução completa utilizando .NET 8 Web API no backend e React no frontend, focada em performance e usabilidade.",
        "Implementei Infraestrutura como Código (IaC) via Terraform para o provisionamento automatizado de recursos na Azure, garantindo ambientes replicáveis e seguros.",
        "Apliquei princípios de Clean Architecture e testes automatizados para assegurar a manutenibilidade e robustez do sistema.",
      ],
    },
    {
      name: "Automação de Dados ERP (BOM)",
      year: "2025",
      stack: "Backend · ETL Automation + Python",
      github: "https://github.com/andreleme71",
      bullets: [
        "Desenvolvi ferramentas de automação de ETL para estruturação de Bill of Materials (BOM), otimizando a importação de estruturas de dados complexas para sistemas de gestão.",
      ],
    },
  ],

  skills: [
    {
      category: "Backend",
      tags: [".NET 8 / C#", "ASP.NET Core", "Java / Spring", "Python", "REST APIs", "Microsserviços", "Service Bus"],
    },
    {
      category: "Cloud & IaC",
      tags: ["Azure", "App Services", "Functions", "App Insights", "Terraform", "Docker", "Azure DevOps","AWS"],
    },
    {
      category: "Dados & Arquitetura",
      tags: ["SQL Server", "PostgreSQL", "Clean Architecture", "DDD", "SOLID", "ETL"],
    },
    {
      category: "Frontend & Outros",
      tags: ["React.js", "Confluence", "Scrum", "Kanban"],
    },
  ],

  education: [
    {
      school: "Universidade Federal do Paraná (UFPR)",
      location: "Curitiba, PR",
      degree: "Tecnologo em Análise e Desenvolvimento de Sistemas",
      period: "Mar 2022 — Jun 2027",
    },
    {
      school: "ETEC — Escola Técnica Estadual de SP",
      location: "São Paulo, SP",
      degree: "Técnico em Informática",
      period: "Jan 2018 — Dez 2020",
    },
  ],

  languages: [
    { name: "Inglês", level: "Fluente", color: "#c8b87a" },
    { name: "Espanhol", level: "Intermediário", color: "#8fb89a" },
    { name: "Português", level: "Nativo", color: "#444" },
  ],
};
