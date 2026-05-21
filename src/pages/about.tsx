import styled from "styled-components";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { timelineData } from "@/data/timelineData";
import { HeaderSection } from "@/components/features/HeaderSection";
import { PageContainer } from "@/components/common/PageContainer";
import { Grid } from "@/components/layout/Grid";
import { Card } from "@/components/layout/Card";
import { Period } from "@/components/common/Period";
import BentoCard from "@/components/features/BentoCard";

export default function About() {
  const t = useTranslations("about");

  return (
    <PageContainer>
      <HeaderSection headline={t("headline")} text={t("introText")} />

      <Grid>
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
      </Grid>

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
  const messages = (await import(`../../messages/${locale || "de"}.json`)).default;
  return {
    props: {
      messages,
    },
  };
};

const TimelineWrapper = styled.div`
  position: relative;
  border-left: ${(props) => props.theme.borders.timeline};
  margin-left: 20px;
  padding-left: 40px;
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;

  &::before {
    content: "";
    position: absolute;
    left: -49px;
    top: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.h4};
    box-shadow: ${(props) => props.theme.shadows.nav};
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
