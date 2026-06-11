import {
  FaFilePdf,
  FaFileArrowDown,
  FaGraduationCap,
  FaBriefcase,
  FaChalkboardUser,
} from "react-icons/fa6";

export const downloadData = [
  {
    id: "cv-de",
    gridArea: "1 / 1 / 2 / 3", // Erste Reihe, linke Hälfte
    icon: FaFileArrowDown,
    translationKey: "about.cvDe", // Mappt auf dein download.json (über den 'about' Namespace)
    badges: [], // Bleibt leer -> BadgeContainer wird in der BentoCard nicht gerendert
  },
  {
    id: "cv-en",
    gridArea: "1 / 3 / 2 / 5", // Erste Reihe, rechte Hälfte
    icon: FaFileArrowDown,
    translationKey: "about.cvEn",
    badges: [],
  },
  {
    id: "diplom",
    gridArea: "2 / 1 / 3 / 3", // Zweite Reihe, linke Hälfte
    icon: FaGraduationCap,
    translationKey: "about.diplom",
    badges: [],
  },
  {
    id: "zeugnisse",
    gridArea: "2 / 3 / 3 / 5", // Zweite Reihe, rechte Hälfte
    icon: FaBriefcase,
    translationKey: "about.zeugnisse",
    badges: [],
  },
  {
    id: "bootcamp",
    gridArea: "3 / 1 / 4 / 5", // Dritte Reihe, volle Breite (4 Spalten) als fetter Abschluss!
    icon: FaChalkboardUser,
    translationKey: "about.bootcamp",
    badges: [],
  },
];
