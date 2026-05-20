export interface TimelineEntry {
  id: string;
  year: string;
  tags: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
}

export const timelineData: TimelineEntry[] = [
  {
    id: "bootcamp",
    year: "2025 - 2026",
    tags: {
      frontend: ["Next.js", "React", "TypeScript", "JavaScript"],
      backend: ["Nest.js", "Node.js", "Prisma", "MongoDB", "MariaDB"],
      tools: ["Cloud Native", "Claude Code"],
    },
  },
  {
    id: "teccon",
    year: "2022 - 2025",
    tags: {
      frontend: ["Angular", "TypeScript"],
      backend: ["Java", "Python", "Django"],
      tools: ["JUnit", "Selenium", "Git", "Scrum", "Jira", "Confluence"],
    },
  },
  {
    id: "edict",
    year: "2015 - 2021",
    tags: {
      frontend: ["Angular", "TypeScript", "JavaScript"],
      backend: ["Java", "Spring", "Quarkus", "Microservices", "Rest-API", "Oracle"],
      tools: ["Jenkins", "Swagger", "Git", "Scrum", "Jira", "Confluence"],
    },
  },
  {
    id: "hmmh",
    year: "2013 - 2015",
    tags: {
      frontend: ["Web-Content"],
      backend: ["Java", "Hybris", "Intershop", "MariaDB"],
      tools: ["PoC", "SVN", "Scrum", "Jira", "Confluence"],
    },
  },
  {
    id: "areva",
    year: "2007 - 2013",
    tags: {
      frontend: ["JSP", "Swing", "GUI Design"],
      backend: ["Java", "Python", "Struts", "Oracle"],
      tools: ["Tomcat", "UML", "PyUnit", "JUnit"],
    },
  },
  {
    id: "isweb",
    year: "2005 - 2007",
    tags: {
      frontend: ["HTML", "CSS", "JavaScript", "Photoshop"],
      backend: ["CMS Integration", "LotusScript"],
      tools: ["Lotus Notes", "Workflows"],
    },
  },
  {
    id: "university",
    year: "2004",
    tags: {
      frontend: ["Graphical UI (PDA)", "JSP"],
      backend: ["XML", "Web Services", "PHP", "MySQL"],
      tools: ["UPnP", "Web Services"],
    },
  },
];
