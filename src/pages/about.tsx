import styled from "styled-components";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { timelineData } from "@/data/timelineData";
import { HeaderSection } from "@/components/HeaderSection";
import { PageContainer } from "@/components/PageContainer";
import { Grid } from "@/components/Grid";
import { Card } from "@/components/Card";
import { Period } from "@/components/Period";
import { CardContent } from "@/components/CardContent";
import { TagGroup } from "@/components/TagGroup";

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
        {timelineData.map((item) => (
          <TimelineItem key={item.id}>
            {" "}
            {/* 💡 Eindeutige ID statt Index */}
            <Period text={item.year} />
            <CardContent
              title={t(`timeline.${item.id}.title`)}
              company={t(`timeline.${item.id}.company`)}
              description={t(`timeline.${item.id}.description`)}
            >
              {/* 💡 Direkt das strukturierte Objekt übergeben – Typenkonflikt gelöst! */}
              <TagGroup tags={item.tags} />
            </CardContent>
          </TimelineItem>
        ))}
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
