import styled from "styled-components";

import { skillsData } from "@/data/skillsData";
import BentoCard from "@/components/features/BentoCard";

export default function SkillsGrid() {
  return (
    <GridSection>
      <BentoContainer>
        {skillsData.map((skill) => {
          return <BentoCard key={skill.id} skill={skill} $gridArea={skill.gridArea} />;
        })}
      </BentoContainer>
    </GridSection>
  );
}

const GridSection = styled.section`
  padding: 4rem 2rem;
  max-width: ${(props) => props.theme.widths.footer || "1200px"};
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    padding: 2rem 1rem; /* Weniger Padding auf dem Handy, damit mehr Platz für Inhalt ist */
  }
`;

const BentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, auto);
  gap: 1.5rem;

  /* TABLET-ANSICHT */
  @media (max-width: ${(props) => props.theme.breakpoints.tablet || "768px"}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);

    /* FIX: Wir überschreiben die harte Grid-Area der Karten, 
       damit sie sich sauber in das 2-Spalten-Raster einfügen */
    & > * {
      grid-area: auto !important;
    }
  }

  /* MOBILE-ANSICHT */
  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1rem;

    /* FIX: Auf dem Handy fließt jede Karte stur untereinander weg */
    & > * {
      grid-area: auto !important;
    }
  }
`;
