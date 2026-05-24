import styled from "styled-components";
import { useTranslations } from "next-intl";

import TechBadge, { BadgeType } from "@/components/common/TechBadge";
import ProjectSection from "@/components/layout/ProjectPage/ProjectSection";
import SectionTitle from "@/components/layout/ProjectPage/SectionTitle";

interface ProjectSectionProps {
  projectId: string;
}

export default function ProjectTechnology({ projectId }: ProjectSectionProps) {
  const t = useTranslations();

  return (
    <ProjectSection>
      <SectionTitle title="02 / THE ARCHITECTURE" headline="Technologieentscheidungen" />

      <ArchitectureGrid>
        {(t.raw(`projects.items.${projectId}.architecture`) || []).map(
          (tech: any, index: number) => (
            <ArchitectureCard key={tech.id}>
              <CardHeader>
                <StatusDot $type={tech.type || "default"} />
                <h3>{tech.title}</h3>
              </CardHeader>

              <p>{tech.description}</p>

              <TechBadge
                index={index}
                badge={tech.type === "tools" ? "DevOps / Tools" : tech.type}
                $type={tech.type || "default"}
              />
            </ArchitectureCard>
          )
        )}
      </ArchitectureGrid>
    </ProjectSection>
  );
}

export const ArchitectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  width: 100%;
  margin-top: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop};) {
    grid-template-columns: repeat(2, 1fr); 

  @media (max-width: ${(props) => props.theme.breakpoints.mobile};) {
    grid-template-columns: 1fr; 
`;

export const ArchitectureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.75rem 1.5rem;
  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius};
  min-height: 250px;

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme.colors.h4};
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textMuted};
    margin: 1rem 0 1.5rem 0;
    flex-grow: 1;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textMain};
    margin: 0;
  }
`;

export const StatusDot = styled.span<{ $type: BadgeType }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${({ theme, $type }) =>
    $type === "default" ? theme.colors.accentAqua : theme.categories[$type].text};

  box-shadow: 0 0 8px
    ${({ theme, $type }) =>
      $type === "default" ? theme.colors.accentAqua : theme.categories[$type].text};

  flex-shrink: 0;
`;
