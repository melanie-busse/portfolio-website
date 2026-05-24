import styled from "styled-components";
import { useTranslations } from "next-intl";

import ProjectSection from "@/components/layout/ProjectPage/ProjectSection";
import TechBadge from "@/components/common/TechBadge";
import SectionTitle from "@/components/layout/ProjectPage/SectionTitle";

interface ProjectStackProps {
  projectId: string;
}

export default function ProjectStack({ projectId }: ProjectStackProps) {
  const t = useTranslations();

  return (
    <ProjectSection>
      <SectionTitle title="05 / STACK" headline="Alle Technologien" />

      <StackContainer>
        {(t.raw(`projects.items.${projectId}.stack`) || []).map((tech: any, index: number) => (
          <TechBadge
            key={tech.name}
            index={index}
            badge={tech.name}
            $type={tech.type || "default"}
          />
        ))}
      </StackContainer>
    </ProjectSection>
  );
}

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
  margin-top: 1.5rem;
  padding: 1.5rem;

  background: ${(props) => props.theme.colors.backgrounds.box || "rgba(30, 41, 59, 0.2)"};
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius || "12px"};
`;
