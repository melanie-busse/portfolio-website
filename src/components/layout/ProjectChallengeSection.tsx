import styled from "styled-components";

import { LuNetwork, LuTestTube, LuGitBranch, LuLayoutGrid, LuDatabase } from "react-icons/lu";
import { useTranslations } from "next-intl";

const getChallengeIcon = (iconName: string) => {
  switch (iconName) {
    case "architecture":
      return <LuNetwork />; // Vernetzung / Microservices
    case "testing":
      return <LuTestTube />; // Testarchitektur
    case "devops":
      return <LuGitBranch />; // CI/CD / Git Pipelines
    case "frontend":
      return <LuLayoutGrid />; // UI / Migration
    case "database":
      return <LuDatabase />; // MariaDB / Prisma
    default:
      return <LuNetwork />; // Fallback
  }
};

interface ProjectChallengeSectionProps {
  projectId: string;
}
export default function ProjectChallengeSection({ projectId }: ProjectChallengeSectionProps) {
  const t = useTranslations();

  const challengesArray = t.raw(`projects.items.${projectId}.challenges`) || [];

  return (
    <ProjectSection>
      <SectionTitleRow>
        <SectionBadge>01 / THE CHALLENGE</SectionBadge>
        <h3>Die Herausforderung</h3>
      </SectionTitleRow>

      <ChallengeGrid>
        {challengesArray.map((challenge: any) => (
          <ChallengeCard key={challenge.id}>
            <CardIconWrapper>{getChallengeIcon(challenge.icon)}</CardIconWrapper>
            <div className="card-content">
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          </ChallengeCard>
        ))}
      </ChallengeGrid>
    </ProjectSection>
  );
}

export const ProjectSection = styled.section`
  width: 100%;
  margin-bottom: 4rem;
`;

export const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h3 {
    font-weight: 600;
  }
`;

export const SectionBadge = styled.span`
  font-family: ${(props) => props.theme.fonts?.tech || "monospace"};
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  background: ${(props) => props.theme.colors.backgrounds.box};
  border: ${(props) => props.theme.borders.sectionThin || "#00f2fe"};
  color: ${(props) => props.theme.colors.accentAqua || "#00f2fe"};
  border-radius: 4px;
  letter-spacing: 0.05em;
`;

export const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ChallengeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 2rem 1.5rem;

  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius};

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme.colors.h4};
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.5;
  }
`;

export const CardIconWrapper = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.h4};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: -0.1rem;
`;
