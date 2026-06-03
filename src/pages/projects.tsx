import styled from "styled-components";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next";

import { projectsData } from "@/data/projectsData";
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
  const currentLocale = locale || "de";

  try {
    return {
      props: {
        messages: {
          common: (await import(`@/messages/${currentLocale}/common.json`)).default,
          projects: (await import(`@/messages/${currentLocale}/projects.json`)).default,
        },
      },
    };
  } catch (error) {
    console.error("Fehler beim Laden der Übersetzungsdateien in getStaticProps:", error);
    return { props: { messages: {} } };
  }
};

const Grid = styled.div`
  position: relative;
`;

const CardContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const PeriodWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: relative;
    left: 0;
    margin-bottom: 0.2rem;

    span {
      font-size: 0.85rem;
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
      border-color: ${({ theme }) => theme.colors.accentAqua};
      box-shadow: ${({ theme }) => theme.shadows.tech};
    }
  }
`;
