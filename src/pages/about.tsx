import styled from "styled-components";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { timelineData } from "@/data/timelineData";
import { HeaderSection } from "@/components/features/HeaderSection";
import { PageContainer } from "@/components/common/PageContainer";
import { Card } from "@/components/layout/Card";
import { Period } from "@/components/common/Period";
import BentoCard from "@/components/features/BentoCard";

export default function About() {
  const t = useTranslations("about");

  return (
    <PageContainer>
      <HeaderSection headline={t("headline")} text={t("introText")} />

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
  const currentLocale = locale || "de";

  try {
    return {
      props: {
        messages: {
          common: (await import(`@/messages/${currentLocale}/common.json`)).default,
          about: (await import(`@/messages/${currentLocale}/about.json`)).default,
        },
      },
    };
  } catch (error) {
    console.error("Fehler beim Laden der Übersetzungsdateien in getStaticProps:", error);
    return { props: { messages: {} } };
  }
};

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 2rem 0 4rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: 10px;
    padding-left: 25px;
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

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      left: -34px;
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
