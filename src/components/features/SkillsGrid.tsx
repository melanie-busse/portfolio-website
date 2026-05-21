import styled from "styled-components";

import { skillsData } from "@/data/skillsData";
import BentoCard from "@/components/features/BentoCard";

export default function SkillsGrid() {
  return (
    <GridSection>
      <BentoContainer>
        {skillsData.map((skill) => {
          return <BentoCard skill={skill} $gridArea={skill.gridArea} />;
        })}
      </BentoContainer>
    </GridSection>
  );
}

const GridSection = styled.section`
  padding: 4rem 2rem;
  max-width: ${(props) => props.theme.widths.footer};
  margin: 0 auto;
`;

const BentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, auto);
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;
