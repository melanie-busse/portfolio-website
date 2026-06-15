import {
  FaBookOpen,
  FaGavel,
  FaTerminal,
  FaRoute, // Für Trail-Guide (Route/Wandern)
  FaPalette, // Für Theme-Creator (Palette/Design)
  FaUserAstronaut, // Für Rick and Morty (Sci-Fi/Weltraum)
  FaImages, // Für Art-Gallery (Galerie/Bilder)
  FaGamepad, // Für Quiz-Game (Spiel)
} from "react-icons/fa6";

export const bootcampAppsData = [
  {
    id: "darkbay",
    gridArea: "1 / 1 / 2 / 3",
    icon: FaGavel,
    translationKey: "bootcampApps.darkbay",
    badges: ["Angular", "NestJS", "TypeScript", "TypeORM", "MariaDB", "Docker"],
  },
  {
    id: "cyber-chat",
    gridArea: "1 / 3 / 2 / 5",
    icon: FaTerminal,
    translationKey: "bootcampApps.cyber-chat",
    badges: ["NestJS", "TypeScript", "Swagger", "JWT", "REST-API", "Docker"],
  },
  {
    id: "it-library",
    gridArea: "2 / 1 / 3 / 3",
    icon: FaBookOpen,
    translationKey: "bootcampApps.itLibrary",
    badges: ["TypeScript", "HTML5", "CSS3", "REST-API", "Node.js"],
    // Hinweis: Falls du hier das Objekt behalten musst, ändere es gerne zurück.
  },
  {
    id: "trail-guide",
    gridArea: "2 / 3 / 3 / 5", // Zeile 2: Spalte 3 bis 5
    icon: FaRoute,
    translationKey: "bootcampApps.trailGuide",
    badges: ["Node.js", "TypeScript", "Express", "SQLite", "Docker", "Nginx"],
  },
  {
    id: "theme-creator",
    gridArea: "3 / 1 / 4 / 3", // Zeile 3: Spalte 1 bis 3
    icon: FaPalette,
    translationKey: "bootcampApps.themeCreator",
    badges: ["React", "TypeScript", "TailwindCSS", "LocalStorage"],
  },
  {
    id: "rick-and-morty",
    gridArea: "3 / 3 / 4 / 5", // Zeile 3: Spalte 3 bis 5
    icon: FaUserAstronaut,
    translationKey: "bootcampApps.rickAndMorty",
    badges: ["React", "TypeScript", "REST-API", "TailwindCSS"],
  },
  {
    id: "art-gallery",
    gridArea: "4 / 1 / 5 / 3", // Zeile 4: Spalte 1 bis 3
    icon: FaImages,
    translationKey: "bootcampApps.artGallery",
    badges: ["JavaScript", "HTML5", "CSS3", "DOM-Manipulation"],
  },
  {
    id: "quiz-game",
    gridArea: "4 / 3 / 5 / 5", // Zeile 4: Spalte 3 bis 5
    icon: FaGamepad,
    translationKey: "bootcampApps.quizGame",
    badges: ["JavaScript", "HTML5", "CSS3", "JSON"],
  },
];
