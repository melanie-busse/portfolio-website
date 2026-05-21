import { FaBookOpen, FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { ComponentType } from "react";

export interface EducationEntry {
  id: string;
  icon: ComponentType;
  period: string;
  tags?: string[];
}

export const educationData: EducationEntry[] = [
  {
    id: "university",
    icon: FaGraduationCap,
    period: "10/1998 – 09/2004",
    tags: ["Softwaretechnik", "Datenbanken", "Wirtschaftsinformatik"],
  },
  {
    id: "milchwerke",
    icon: FaBriefcase,
    period: "08/1990 – 07/1992",
    tags: ["Ausbildung", "Wirtschaftsprozesse"],
  },
  {
    id: "erich_gutenberg",
    icon: FaBookOpen,
    period: "08/1988 – 07/1990",
    tags: ["Fachhochschulreife", "Bürowirtschaft"],
  },
];
