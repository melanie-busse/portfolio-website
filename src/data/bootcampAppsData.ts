import { FaGavel, FaTerminal } from "react-icons/fa6";

export const bootcampAppsData = [
  {
    id: "darkbay",
    gridArea: "1 / 1 / 2 / 3",
    icon: FaGavel,
    translationKey: "bootcampApps.darkbay",
    // Wir packen die Badges in eine Kategorie, damit Object.entries() funktioniert!
    badges: ["Angular", "NestJS", "TypeScript", "TypeORM", "MariaDB", "Docker"],
  },
  {
    id: "cyber-chat",
    gridArea: "1 / 3 / 2 / 5",
    icon: FaTerminal,
    translationKey: "bootcampApps.cyber-chat",
    badges: ["NestJS", "TypeScript", "Swagger", "JWT", "REST-API", "Docker"],
  },
];
