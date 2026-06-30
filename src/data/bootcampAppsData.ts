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
    id: "hide-and-seek",
    gridArea: "1 / 1 / 2 / 5",
    icon: FaGamepad,
    translationKey: "bootcampApps.hideAndSeek",
    badges: ["React", "NestJS", "TypeScript", "Socket.io", "Styled Components", "Docker"],
  },
  {
    id: "darkbay",
    gridArea: "2 / 1 / 3 / 3",
    icon: FaGavel,
    translationKey: "bootcampApps.darkbay",
    badges: ["Angular", "NestJS", "TypeScript", "TypeORM", "MariaDB", "Docker"],
  },
  {
    id: "cyber-chat",
    gridArea: "2 / 3 / 3 / 5",
    icon: FaTerminal,
    translationKey: "bootcampApps.cyber-chat",
    badges: ["NestJS", "TypeScript", "Swagger", "JWT", "REST-API", "Docker"],
  },
  {
    id: "it-library",
    gridArea: "3 / 1 / 4 / 3",
    icon: FaBookOpen,
    translationKey: "bootcampApps.itLibrary",
    badges: ["TypeScript", "HTML5", "CSS3", "REST-API", "Node.js"],
  },
  {
    id: "trail-guide",
    gridArea: "3 / 3 / 4 / 5",
    icon: FaRoute,
    translationKey: "bootcampApps.trailGuide",
    badges: ["Node.js", "TypeScript", "Express", "SQLite", "Docker", "Nginx"],
  },
  {
    id: "theme-creator",
    gridArea: "4 / 1 / 5 / 3",
    icon: FaPalette,
    translationKey: "bootcampApps.themeCreator",
    badges: ["React", "TypeScript", "TailwindCSS", "LocalStorage"],
  },
  {
    id: "rick-and-morty",
    gridArea: "4 / 3 / 5 / 5",
    icon: FaUserAstronaut,
    translationKey: "bootcampApps.rickAndMorty",
    badges: ["React", "TypeScript", "REST-API", "TailwindCSS"],
  },
  {
    id: "art-gallery",
    gridArea: "5 / 1 / 6 / 3",
    icon: FaImages,
    translationKey: "bootcampApps.artGallery",
    badges: ["JavaScript", "HTML5", "CSS3", "DOM-Manipulation"],
  },
  {
    id: "quiz-game",
    gridArea: "5 / 3 / 6 / 5",
    icon: FaGamepad,
    translationKey: "bootcampApps.quizGame",
    badges: ["JavaScript", "HTML5", "CSS3", "JSON"],
  },
];
