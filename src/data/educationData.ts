export interface EducationEntry {
  id: string;
  period: string;
  tags?: string[]; // Optional, falls du Tech-Stacks oder Skills anzeigen willst
}

export const educationData: EducationEntry[] = [
  {
    id: "university",
    period: "10/1998 – 09/2004",
    tags: ["Softwaretechnik", "Datenbanken", "Wirtschaftsinformatik"],
  },
  {
    id: "milchwerke",
    period: "08/1990 – 07/1992",
    tags: ["Ausbildung", "Wirtschaftsprozesse"],
  },
  {
    id: "erich_gutenberg",
    period: "08/1988 – 07/1990",
    tags: ["Fachhochschulreife", "Bürowirtschaft"],
  },
];
