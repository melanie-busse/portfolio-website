import styled from "styled-components";
import { LuNetwork, LuTestTube, LuGitBranch, LuLayoutGrid, LuDatabase } from "react-icons/lu";
import { useTranslations } from "next-intl";

import ProjectSection from "@/components/layout/ProjectPage/ProjectSection";
import SectionTitle from "@/components/layout/ProjectPage/SectionTitle";

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
export default function ProjectChallenge({ projectId }: ProjectChallengeSectionProps) {
  const t = useTranslations();

  const challengesArray = t.raw(`projects.items.${projectId}.challenges`) || [];

  return (
    <ProjectSection>
      <SectionTitle title="01 / THE CHALLENGE" headline="Die Herausforderung" />

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
