import { PageContainer } from "@/components/common/PageContainer";
import { HeaderSection } from "@/components/features/HeaderSection";
import BentoCard from "@/components/features/BentoCard";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { GetStaticProps } from "next";
import Meta from "@/components/seo/Meta";
import { bootcampAppsData } from "@/data/bootcampAppsData";

export default function BootcampAppsPage() {
  const t = useTranslations("bootcampApps");

  return (
    <>
      <Meta titleKey="downloadTitle" descriptionKey="downloadDescription" />

      <PageContainer>
        <HeaderSection headline={t("headline")} text={t("introText")} />

        <GridSection>
          <BentoContainer>
            {bootcampAppsData.map((item) => (
              <BentoCard key={item.id} skill={item} $gridArea={item.gridArea} />
            ))}
          </BentoContainer>
        </GridSection>
      </PageContainer>
    </>
  );
}

const GridSection = styled.section`
  padding: 4rem 2rem;
  max-width: ${(props) => props.theme.widths.footer || "1200px"};
  margin: 0 auto;
`;

const BentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, auto);
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet || "768px"}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
    & > * {
      grid-area: auto !important;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1rem;
    & > * {
      grid-area: auto !important;
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "de";
  try {
    return {
      props: {
        messages: {
          common: (await import(`@/messages/${currentLocale}/common.json`)).default,
          bootcampApps: (await import(`@/messages/${currentLocale}/bootcampApps.json`)).default,
        },
      },
    };
  } catch (error) {
    console.error("Fehler beim Laden der Übersetzungsdateien:", error);
    return { props: { messages: {} } };
  }
};
