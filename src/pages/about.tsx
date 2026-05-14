import styled from 'styled-components';
import {timelineData} from "@/data/timelineData";

export default function About() {
    return (
        <Container>
            <HeroSection>
                <Greeting>Turning coffee into code since 2005.</Greeting>
                <IntroText>
                    Vom Diplom in Wirtschaftsinformatik an der Universität Paderborn bis zur
                    Entwicklung von Enterprise-Lösungen für die Bundesagentur für Arbeit:
                    Meine Leidenschaft gehört stabilen Backends und performanten Frontends.
                </IntroText>
            </HeroSection>

            <StatsGrid>
                <StatCard>
                    <StatValue>19+</StatValue>
                    <StatLabel>Jahre Erfahrung</StatLabel>
                </StatCard>
                <StatCard>
                    <StatValue>2005</StatValue>
                    <StatLabel>First Line of Code</StatLabel>
                </StatCard>
                <StatCard>
                    <StatValue>Fullstack</StatValue>
                    <StatLabel>Fokus</StatLabel>
                </StatCard>
                <StatCard>
                    <StatValue>VServer</StatValue>
                    <StatLabel>Infrastructure</StatLabel>
                </StatCard>
            </StatsGrid>

            <TimelineWrapper>
                {timelineData.map((item, index) => (
                    <TimelineItem key={index}>
                        <YearBubble>{item.year}</YearBubble>
                        <ContentCard>
                            <Role>{item.title}</Role>
                            <Company>{item.company}</Company>
                            <Description>{item.description}</Description>
                            <TagCloud>
                                {item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                            </TagCloud>
                        </ContentCard>
                    </TimelineItem>
                ))}
            </TimelineWrapper>
        </Container>
    );
}

// Styled Components (Auszug)
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 5rem;
`;

const Greeting = styled.h1`
  font-size: 3rem;
  color: #00f2ff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 242, 255, 0.3);
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`;

const TimelineWrapper = styled.div`
  position: relative;
  border-left: 2px solid rgba(0, 242, 255, 0.2);
  margin-left: 20px;
  padding-left: 40px;
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;

  &::before {
    content: '';
    position: absolute;
    left: -49px;
    top: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #00f2ff;
    box-shadow: 0 0 10px #00f2ff;
  }
`;

const YearBubble = styled.span`
  background: rgba(0, 242, 255, 0.1);
  color: #00f2ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
`;

const ContentCard = styled.div`
  background: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  margin-top: 1rem;
`;

const Role = styled.h3`color: #f5f5f5; margin-bottom: 0.3rem;`;
const Company = styled.h4`color: #00f2ff; font-weight: 500; margin-bottom: 1rem;`;
const Description = styled.p`color: #a0a0a0; line-height: 1.6;`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  color: rgba(245, 245, 245, 0.6);
  border: 1px solid rgba(245, 245, 245, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const StatCard = styled.div`
  background: rgba(0, 242, 255, 0.05);
  border: 1px solid rgba(0, 242, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 242, 255, 0.1);
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #00f2ff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #a0a0a0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;