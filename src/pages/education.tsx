import styled from "styled-components";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { educationData } from "@/data/educationData";
import BentoCard from "@/components/features/BentoCard";
import { Period } from "@/components/common/Period";

export default function Education() {
  const t = useTranslations("education");
  return (
    <>
      <Head>
        <title>{t("title")} | Melanie Busse</title>
      </Head>
      <PageContainer>
        <Title>{t("title")}</Title>
        <Grid>
          {educationData.map((item) => {
            const mappedEducationAsSkill = {
              id: item.id,
              icon: item.icon || "EducationIcon",

              // Wichtig: Da BentoCard intern .title und .description sucht,
              // mappen wir die Übersetzung hier auf die Basis "education.items.item.id"
              translationKey: `education.items.${item.id}`,
              badges: [],
            };

            return (
              <div key={item.id}>
                <Period text={item.period} />
                <BentoCard skill={mappedEducationAsSkill} $gridArea="auto" />
              </div>
            );
          })}
        </Grid>
      </PageContainer>
    </>
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

const PageContainer = styled.div`
  max-width: ${(props) => props.theme.widths.container};
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.h4};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
