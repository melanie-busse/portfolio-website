import styled from "styled-components";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next";

import { projectsData } from "@/data/projectsData";
import { HeaderSection } from "@/components/features/HeaderSection";
import { PageContainer } from "@/components/common/PageContainer";
import { Period } from "@/components/common/Period";
import BentoCard from "@/components/features/BentoCard";

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
              <BentoCard skill={mappedProjectAsSkill} $gridArea="auto" />
            </CardContainer>
          );
        })}
      </Grid>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../../messages/${locale || "de"}.json`)).default;
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
