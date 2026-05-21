import { FaChargingStation, FaChartLine, FaCoins, FaSitemap } from "react-icons/fa6";
import { ComponentType } from "react";

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
    id: "emobility",
    icon: FaChargingStation,
    period: "Seit 09/2024",
    tags: {
      frontend: ["Angular", "TypeScript", "Playwright", "Jasmine", "Bootstrap"],
      backend: ["Java 21", "Quarkus", "Kafka", "PostgreSQL", "Microservices", "JWT"],
      tools: ["Azure DevOps", "Kubernetes", "Docker", "CI/CD Pipelines", "Git"],
    },
  },
  {
    id: "amm",
    icon: FaChartLine,
    period: "01/2024 – 08/2024",
    tags: {
      frontend: ["Django Templates", "Bootstrap", "JavaScript", "Barrierefreiheit"],
      backend: ["Python", "Django", "Oracle"],
      tools: ["Docker", "Jenkins", "Scrum", "Maven", "WSL"],
    },
  },
  {
    id: "education",
    icon: FaSitemap,
    period: "01/2022 – 08/2024",
    tags: {
      frontend: ["Angular", "TypeScript", "Jasmine", "Silk-Tests", "Barrierefreiheit"],
      backend: ["Java", "Spring", "REST-Schnittstellen", "JUnit"],
      tools: ["Jenkins", "Docker", "Bitbucket", "Maven", "Scrum"],
    },
  },
  {
    id: "casino",
    icon: FaCoins,
    period: "08/2015 – 06/2021",
    tags: {
      frontend: ["Angular", "JavaScript", "Jasmine/Karma"],
      backend: ["Java", "Spring", "Quarkus", "Microservices", "REST", "PostgreSQL"],
      tools: ["DC/OS", "Kafka", "Jenkins", "Docker", "SonarQube", "GitLab"],
    },
  },
];
