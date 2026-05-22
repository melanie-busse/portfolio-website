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
              <Period text={project.period} />
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

const CardContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  position: relative;
  margin-left: 20px;
  padding-left: 40px;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;

  /* Kleiner visueller Effekt: Wenn man über den Link hovert, 
     kann sich das Design der inneren Bento-Card leicht anpassen */
  &:hover {
    cursor: pointer;

    /* Falls deine BentoCard auf Transforms reagiert, 
       kannst du das hier antriggern */
    & > div {
      border-color: ${({ theme }) => theme.colors?.accentAqua || "#00f2fe"};
      box-shadow: ${({ theme }) => theme.shadows?.tech || "0 0 15px rgba(0, 242, 254, 0.15)"};
    }
  }
`;
