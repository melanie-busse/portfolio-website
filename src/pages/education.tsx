import styled from "styled-components";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { educationData } from "@/data/educationData";
import BentoCard from "@/components/features/BentoCard";
import { Period } from "@/components/common/Period";
import { PageContainer } from "@/components/common/PageContainer";
import Meta from "@/components/seo/Meta";

export default function Education() {
  const t = useTranslations("education");
  return (
    <>
      <Meta titleKey="educationTitle" descriptionKey="educationDescription" />

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
  const currentLocale = locale || "de";

  try {
    return {
      props: {
        messages: {
          common: (await import(`@/messages/${currentLocale}/common.json`)).default,
          education: (await import(`@/messages/${currentLocale}/education.json`)).default,
        },
      },
    };
  } catch (error) {
    console.error("Fehler beim Laden der Übersetzungsdateien in getStaticProps:", error);
    return { props: { messages: {} } };
  }
};

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
