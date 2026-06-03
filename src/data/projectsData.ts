import {
  FaAtom,
  FaChargingStation,
  FaGraduationCap,
  FaNetworkWired,
  FaOtter,
  FaSitemap,
  FaStore,
  FaTerminal,
} from "react-icons/fa6";
import { ComponentType } from "react";
import {
  FaCogs,
  FaExchangeAlt,
  FaFileInvoice,
  FaProjectDiagram,
  FaShoppingCart,
} from "react-icons/fa";
import { LuUser } from "react-icons/lu";

export interface ProjectEntry {
  id: string;
  icon: ComponentType;
  period: string;
  tags?: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
}

export const projectsData: ProjectEntry[] = [
  {
    id: "developer-portfolio",
    icon: LuUser,
    period: "05/2026 – 06/2026",
    tags: {
      frontend: ["Next.js (Page Router)", "React", "TypeScript", "next-Intl", "Styled Components"],
      backend: ["Dynamic Routing", "JSON Data Hydration"],
      tools: ["GitHub", "Vercel Deployment", "Lighthouse Audits"],
    },
  },
  {
    id: "zoo2-animalpark-manager",
    icon: FaOtter,
    period: "12/2025 – heute",
    tags: {
      frontend: [
        "React",
        "TypeScript / SWR",
        "Next.js (App Router)",
        "Styled Components",
        "next-Intl",
        "SweetAlert / Toastify",
        "Responsive Design",
      ],
      backend: ["Node.js", "MySQL / MariaDB", "Prisma ORM", "REST APIs", "NextAuth.js"],
      tools: [
        "IntelliJ",
        "Git / GitHub",
        "GitHub Projects",
        "Datenbank-Integration",
        "Vercel Deployment",
      ],
    },
  },
  {
    id: "neuefische-fullstack-bootcamp",
    icon: FaGraduationCap,
    period: "11/2025 – 12/2026",
    tags: {
      frontend: [
        "React",
        "TypeScript",
        "Next.js (Pages- / App-Router)",
        "State Management",
        "Responsives Webdesign",
      ],
      backend: [
        "Node.js",
        "NestJS",
        "Express",
        "RESTful APIs",
        "MariaDB / Prisma",
        "Authentifizierung",
      ],
      tools: [
        "Docker",
        "AWS (EC2/S3)",
        "CI/CD Workflows",
        "OpenAI API / AI Agents",
        "Git",
        "Unit Testing",
      ],
    },
  },
  {
    id: "ba-online-antrag-alg",
    icon: FaFileInvoice,
    period: "02/2025 – 07/2025",
    tags: {
      frontend: ["Angular", "TypeScript", "Reactive Forms", "Accessibility / BITV"],
      backend: ["Java", "Spring Boot", "REST API", "Data Validation"],
      tools: [
        "IntelliJ IDEA",
        "Jenkins",
        "Maven",
        "Git / Bitbucket",
        "Jira / Confluence",
        "JUnit / Mockito",
      ],
    },
  },
  {
    id: "teccon-emobility-microservice",
    icon: FaChargingStation,
    period: "09/2024 – 01/2025",
    tags: {
      frontend: ["Angular", "TypeScript", "Accessibility"],
      backend: ["Java 21", "Quarkus", "Apache Kafka", "Microservices Architecture", "PostgreSQL"],
      tools: ["Playwright", "Jasmine", "JUnit", "Azure Cloud & DevOps", "Kubernetes", "Docker"],
    },
  },
  {
    id: "teccon-ba-amm",
    icon: FaProjectDiagram,
    period: "01/2024 – 08/2024",
    tags: {
      frontend: ["Bootstrap", "UI Refactoring", "Accessibility"],
      backend: ["Python", "Django", "Oracle DB", "Data Analysis"],
      tools: [
        "PyCharm",
        "WSL / Linux",
        "Jenkins",
        "Maven",
        "Docker",
        "Kubernetes",
        "Git / Bitbucket",
      ],
    },
  },
  {
    id: "teccon-ba-infosysbub",
    icon: FaProjectDiagram,
    period: "01/2022 – 01/2024",
    tags: {
      frontend: ["Angular", "TypeScript", "Accessibility (BITV)", "UI Libraries"],
      backend: ["Java", "Spring Boot", "Oracle DB", "Enterprise Services"],
      tools: [
        "Jenkins",
        "Maven",
        "Docker",
        "Kubernetes",
        "JUnit",
        "Rest Assured",
        "Jira / Confluence",
      ],
    },
  },
  {
    id: "edict-marketing-microservice",
    icon: FaProjectDiagram,
    period: "05/2020 – 06/2021",
    tags: {
      frontend: ["Angular", "State Management", "Component Architecture"],
      backend: ["Java", "Quarkus", "PostgreSQL", "Microservices Architektur", "API Gateway"],
      tools: ["IntelliJ IDEA", "JUnit 5", "Rest Assured", "Mocking / WireMock"],
    },
  },
  {
    id: "edict-monolith-apis",
    icon: FaExchangeAlt,
    period: "08/2015 – 05/2020",
    tags: {
      frontend: ["JavaServer Pages", "UI/UX Adaptations"],
      backend: ["Java EE", "REST APIs", "B2B Integrations", "Oracle DB"],
      tools: ["Jira / Confluence", "Scrum", "GitLab", "Enterprise Integration Patterns"],
    },
  },

  {
    id: "edict-devops-pipelines",
    icon: FaCogs,
    period: "08/2015 – 05/2021",
    tags: {
      frontend: [],
      backend: ["Groovy Scripting", "CI/CD Pipeline Design"],
      tools: [
        "Jenkins Automation",
        "Docker Containers",
        "Kubernetes Orchestration",
        "Declarative Pipelines",
      ],
    },
  },
  {
    id: "hmmh-hybris",
    icon: FaShoppingCart,
    period: "02/2013 – 01/2015",
    tags: {
      frontend: ["JavaServer Pages (JSP)", "JavaScript", "HTML5 / CSS3", "Template Refactoring"],
      backend: ["Java EE", "SAP hybris", "ImpEx (Data Migration)", "Checkout-Prozesse"],
      tools: ["Import-Cockpit Performance", "Proof-of-Concepts", "E-Commerce Architektur"],
    },
  },
  {
    id: "hmmh-intershop",
    icon: FaStore,
    period: "02/2013 – 01/2015",
    tags: {
      frontend: ["UI/UX-Optimierung", "Web-Interfaces"],
      backend: ["Java EE", "Intershop", "WebService APIs", "Kundenbonus-Integration"],
      tools: ["Fehleranalyse", "Wunschbox-Anbindung", "BabyOne E-Commerce Support"],
    },
  },
  {
    id: "areva-stromlaufplan",
    icon: FaAtom,
    period: "09/2007 – 01/2013",
    tags: {
      frontend: ["JavaServer Pages (JSP)", "Java Swing", "Adobe Flex SDK", "Apache / Tomcat"],
      backend: ["Java", "Struts (MVC)", "SQL", "Ingres-Datenbank", "OpenRoad"],
      tools: ["Eclipse", "UML-Datenmodellierung", "Anwendungssupport", "Kundeninstallation"],
    },
  },

  {
    id: "areva-reaktor-testing",
    icon: FaTerminal,
    period: "01/2012 – 01/2013",
    tags: {
      frontend: ["PyQt", "Linux Terminal"],
      backend: ["Python", "Hardware-/Software-Analyse"],
      tools: ["PyTest", "PyUnit", "LINUX Integrationszentrum", "Testautomatisierung"],
    },
  },
  {
    id: "isweb",
    icon: FaSitemap,
    period: "04/2005 – 08/2007",
    tags: {
      frontend: ["HTML5 / CSS", "JavaScript", "Photoshop", "Dynamic Web UI"],
      backend: ["LotusScript", "Lotus-Notes-Formel-Sprache", "CMS Datenintegration"],
      tools: ["Lotus Notes CMS", "Intranet Workflows", "Wissensmanagement"],
    },
  },
  {
    id: "memphis",
    icon: FaNetworkWired,
    period: "01/2004 – 08/2004",
    tags: {
      frontend: ["JSP", "PDA UI Design", "Graphical User Interface"],
      backend: ["Java", "Tomcat", "XML Processing", "Datenbank-Integration"],
      tools: ["EU-Forschungsprojekt", "Systemintegration", "C-LAB"],
    },
  },
];
