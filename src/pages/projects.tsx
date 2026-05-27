import styled from "styled-components";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next";

import { ProjectEntry, projectsData } from "@/data/projectsData";
import { HeaderSection } from "@/components/features/HeaderSection";
import { PageContainer } from "@/components/common/PageContainer";
import { Period } from "@/components/common/Period";
import BentoCard from "@/components/features/BentoCard";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <PageContainer>
      <HeaderSection headline={t("headline")} text={t("introText")} />
      <Grid>
        {projectsData.map((project) => {
          const mappedProjectAsSkill = {
            id: project.id,
            icon: project.icon,
            translationKey: `projects.items.${project.id}`,
            badges: project.tags,
          };

          return (
            <CardContainer key={project.id}>
              <PeriodWrapper>
                <Period text={project.period} />
              </PeriodWrapper>
              <ProjectLink href={`/projects/${project.id}`} passHref>
                <BentoCard skill={mappedProjectAsSkill} $gridArea="auto" />
              </ProjectLink>
            </CardContainer>
          );
        })}
      </Grid>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`@/messages/${locale || "de"}.json`)).default;
  return {
    props: {
      messages,
    },
  };
};

// --- STYLES ---

const Grid = styled.div`
  position: relative;
  margin-left: 20px;
  padding-left: 40px;

  /* FIX 1: Links-Abstand mobil fast vollständig eliminieren */
  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    margin-left: 0;
    padding-left: 10px; /* Nur ein Mini-Sicherheitsabstand zum Bildschirmrand */
    padding-right: 10px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Schafft sauberen Platz zwischen Datum und Karte */
  }
`;

/* FIX 2: Container, um das Datum mobil flexibel zu positionieren */
const PeriodWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    /* Holt das Datum aus der absoluten linken Position (falls es dort feststeckte) 
       und setzt es sauber über die Karte */
    position: relative;
    left: 0;
    margin-bottom: 0.2rem;

    span {
      font-size: 0.85rem; /* Mobil leicht kompakter */
    }
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
    & > div {
      border-color: ${({ theme }) => theme.colors?.accentAqua || "#00f2fe"};
      box-shadow: ${({ theme }) => theme.shadows?.tech || "0 0 15px rgba(0, 242, 254, 0.15)"};
    }
  }
`;
