import styled from "styled-components";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { timelineData } from "@/data/timelineData";
import { HeaderSection } from "@/components/features/HeaderSection";
import { PageContainer } from "@/components/common/PageContainer";
// Den globalen Grid-Import entfernen wir oder ersetzen ihn hier:
import { Card } from "@/components/layout/Card";
import { Period } from "@/components/common/Period";
import BentoCard from "@/components/features/BentoCard";

export default function About() {
  const t = useTranslations("about");

  return (
    <PageContainer>
      <HeaderSection headline={t("headline")} text={t("introText")} />

      {/* HIER JETZT DAS OPTIMIERTE STATS-GRID NUTZEN */}
      <StatsGrid>
        <Card>
          <StatValue>{t("stats.expValue")}</StatValue>
          <StatLabel>{t("stats.expLabel")}</StatLabel>
        </Card>
        <Card>
          <StatValue>{t("stats.codeValue")}</StatValue>
          <StatLabel>{t("stats.codeLabel")}</StatLabel>
        </Card>
        <Card>
          <StatValue>{t("stats.focusValue")}</StatValue>
          <StatLabel>{t("stats.focusLabel")}</StatLabel>
        </Card>
        <Card>
          <StatValue>{t("stats.infraValue")}</StatValue>
          <StatLabel>{t("stats.infraLabel")}</StatLabel>
        </Card>
      </StatsGrid>

      <TimelineWrapper>
        {timelineData.map((item) => {
          const mappedTimelineAsSkill = {
            icon: item.icon || "WorkIcon",
            translationKey: `about.timeline.${item.id}`,
            badges: item.tags,
          };

          return (
            <TimelineItem key={item.id}>
              <Period text={item.year} />
              <BentoCard skill={mappedTimelineAsSkill} $gridArea={"auto"} />
            </TimelineItem>
          );
        })}
      </TimelineWrapper>
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

// Das neue responsive Grid für die 4 Boxen
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Desktop: 4 nebeneinander */
  gap: 1.5rem;
  margin: 2rem 0 4rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet || "768px"}) {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2x2 */
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    grid-template-columns: repeat(2, 1fr); /* HIER: Auch auf Mobile stur 2 nebeneinander! */
    gap: 1rem; /* Etwas kompakterer Abstand auf dem Smartphone */

    /* Falls die Card-Komponente ein zu großes Padding hat, 
       können wir es hier für Mobile leicht herabsetzen */
    & > div {
      padding: 1.2rem 1rem;
    }
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  border-left: ${(props) => props.theme.borders.timeline};
  margin-left: 20px;
  padding-left: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    margin-left: 10px;
    padding-left: 25px; /* Etwas kompakter mobil, damit die BentoCards mehr Platz haben */
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;

  &::before {
    content: "";
    position: absolute;
    left: -49px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.h4};
    box-shadow: ${(props) => props.theme.shadows.nav};

    @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
      left: -34px; /* Verschiebung anpassen, weil margin-left/padding-left oben verringert wurden */
    }
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.h4};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;
