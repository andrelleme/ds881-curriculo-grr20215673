export const enData = {
  name: "Andre Leme",
  role: "Software Engineer · Fullstack & Cloud",
  location: "Curitiba, PR",
  email: "andreleme08@gmail.com",
  linkedin: "https://linkedin.com/in/andreleme71/",
  linkedinLabel: "linkedin/andreleme71",
  github: "https://github.com/andrelleme",
  githubLabel: "github/andrelleme",

  summary:
    "Software Engineer focused on backend development and cloud architecture, specialized in the .NET and Azure ecosystem. Experience modernizing mission-critical financial systems, migrating on-premises workloads to the cloud and implementing event-driven architectures. Strong background in Infrastructure as Code (Terraform), governance and monthly closing process optimization, reducing processing times by up to 90%.",

  experience: [
    {
      company: "Volvo Financial Services",
      location: "Curitiba, PR",
      role: "Software Engineering Intern",
      period: "Dec 2024 — Jan 2025",
      bullets: [
        "Led the migration and refactoring of four critical on-premises infrastructure applications to Azure using App Services, Azure Functions and Service Bus to ensure scalability.",
        "Developed a web solution for the leasing operation in Chile, automating monthly closing workflows and ensuring financial data integrity during high-load periods.",
        "Optimized Python integrations between the core system and Dynamics 365, reducing processing time from 1 hour to 5 minutes, directly impacting the agility of the financial closing.",
        "Implemented advanced monitoring with Application Insights, improving incident response time and root cause analysis in microservices.",
        "Standardized technical documentation in Confluence, mapping undocumented legacy processes and improving onboarding and audit compliance.",
        "Collaborated in agile environments through daily meetings and code reviews, ensuring code quality and compliance with Clean Architecture and SOLID principles.",
        "Contributed to internal and external IT audit activities, including evidence collection, technology control analysis and mitigation support for critical findings.",
        "Managed incidents and requests using ITSM practices and the ServiceNow platform."
      ],
    },
  ],

  projects: [
    {
      name: "Household Expense Management System",
      year: "2026",
      stack: "Fullstack · .NET 8 + React + Terraform + Azure",
      github: "https://github.com/andrelleme/controle-gastos-residenciais",
      bullets: [
        "Architected a complete solution using .NET 8 Web API in the backend and React in the frontend, focused on performance and usability.",
        "Implemented Infrastructure as Code (IaC) with Terraform for automated Azure resource provisioning, ensuring reproducible and secure environments.",
        "Applied Clean Architecture principles and automated testing to ensure maintainability and robustness."
      ],
    },
    {
      name: "ERP Data Automation (BOM)",
      year: "2025",
      stack: "Backend · ETL Automation + Python",
      github: "https://github.com/andreleme71",
      bullets: [
        "Developed ETL automation tools for Bill of Materials (BOM) structuring, optimizing complex data imports into management systems."
      ],
    },
  ],

skills: [
  {
    category: "Backend Development",
    tags: [".NET 8 / C#", "ASP.NET Core", "Java / Spring", "Python", "REST APIs"],
  },
  {
    category: "Frontend Development",
    tags: ["React.js", "Angular", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Cloud (Azure & AWS)",
    tags: ["App Services", "Azure Functions", "AWS S3", "EC2", "Lambda"],
  },
  {
    category: "DevOps & CI/CD",
    tags: ["Azure DevOps", "Azure Pipelines", "Docker", "Terraform", "GitHub Actions"],
  },
  {
    category: "Architecture & Data",
    tags: ["Clean Architecture", "DDD", "SQL Server", "PostgreSQL", "MongoDB", "Service Bus"],
  },
  {
    category: "Agile & Management",
    tags: ["Scrum", "Kanban", "ITSM", "ServiceNow", "Confluence", "App Insights"],
  },
],

  education: [
  {
    school: "Universidade Federal do Paraná (UFPR)",
    location: "Curitiba, PR",
    degree: "Technologist in Systems Analysis and Development",
    period: "Mar 2022 — Jun 2027",
  },
  {
    school: "ETEC — Escola Técnica Estadual de SP",
    location: "São Paulo, SP",
    degree: "Technical Degree in Computer Science",
    period: "Jan 2018 — Dec 2020",
  },
],

languages: [
  { name: "English", level: "Fluent", color: "#c8b87a" },
  { name: "Spanish", level: "Intermediate", color: "#8fb89a" },
  { name: "Portuguese", level: "Native", color: "#444" },
],
};