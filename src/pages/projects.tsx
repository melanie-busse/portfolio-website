import styled from "styled-components";
import { projectsData } from "@/data/projectsData";
import { HeaderSection } from "@/components/HeaderSection";
import { PageContainer } from "@/components/PageContainer";

import { Period } from "@/components/Period";
import { CardContent } from "@/components/CardContent";
import { TagGroup } from "@/components/TagGroup";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <PageContainer>
      <HeaderSection headline={t("headline")} text={t("introText")} />

      {projectsData.map((project) => (
        <CardContainer key={project.id}>
          <Period text={project.period} />
          <CardContent
            title={t(`items.${project.id}.title`)}
            company={t(`items.${project.id}.company`)}
            description={t(`items.${project.id}.description`)}
          >
            <TagGroup tags={project.tags} />
          </CardContent>
        </CardContainer>
      ))}
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
