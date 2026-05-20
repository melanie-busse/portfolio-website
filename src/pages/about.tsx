import styled from "styled-components";

import { timelineData } from "@/data/timelineData";
import { HeaderSection } from "@/components/HeaderSection";
import { PageContainer } from "@/components/PageContainer";
import { Grid } from "@/components/Grid";
import { Card } from "@/components/Card";
import { Period } from "@/components/Period";
import { CardContent } from "@/components/CardContent";
import { TagGroup } from "@/components/TagGroup";

export default function About() {
  return (
    <PageContainer>
      <HeaderSection
        headline="Turning coffee into code since 2005."
        text="Vom Diplom in Wirtschaftsinformatik an der Universität Paderborn bis zur
                   Entwicklung von Enterprise-Lösungen für die Bundesagentur für Arbeit:
                   Meine Leidenschaft gehört stabilen Backends und performanten Frontends."
      />
      <Grid>
        <Card>
          <StatValue>19+</StatValue>
          <StatLabel>Jahre Erfahrung</StatLabel>
        </Card>
        <Card>
          <StatValue>2005</StatValue>
          <StatLabel>First Line of Code</StatLabel>
        </Card>
        <Card>
          <StatValue>Fullstack</StatValue>
          <StatLabel>Fokus</StatLabel>
        </Card>
        <Card>
          <StatValue>VServer</StatValue>
          <StatLabel>Infrastructure</StatLabel>
        </Card>
      </Grid>

      <TimelineWrapper>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <Period text={item.year} />
            <CardContent title={item.title} company={item.company} description={item.description}>
              <TagGroup tags={item.tags} />
            </CardContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </PageContainer>
  );
}

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
