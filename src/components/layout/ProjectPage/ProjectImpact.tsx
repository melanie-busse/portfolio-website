import styled from "styled-components";
import { useTranslations } from "next-intl";

import TechBadge from "@/components/common/TechBadge";
import ProjectSection from "@/components/layout/ProjectPage/ProjectSection";
import SectionTitle from "@/components/layout/ProjectPage/SectionTitle";

interface ProjectImpactProps {
  projectId: string;
}

export default function ProjectImpact({ projectId }: ProjectImpactProps) {
  const t = useTranslations();

  return (
    <ProjectSection>
      <SectionTitle title="03 / MY IMPACT" headline="Mein Beitrag" />

      <ImpactList>
        {(() => {
          const impactData = t.raw(`projects.items.${projectId}.impact`);

          if (Array.isArray(impactData)) {
            return impactData.map((item: any, index: number) => (
              <ImpactRow key={item.id || index}>
                <BadgeWrapper>
                  <TechBadge index={index} badge={item.badgeText} $type={item.type || "default"} />
                </BadgeWrapper>

                <ImpactContent>
                  <strong>{item.title}</strong> – {item.description}
                </ImpactContent>
              </ImpactRow>
            ));
          }

          return null;
        })()}
      </ImpactList>
    </ProjectSection>
  );
}

export const ImpactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export const ImpactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 1.5rem;

  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateX(4px);
    border-color: ${(props) => props.theme.colors.backgrounds.hovers.impact};
    background: ${(props) => props.theme.colors.backgrounds.card};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile};) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const BadgeWrapper = styled.div`
  flex-shrink: 0;
  min-width: 110px;
  display: flex;
  align-items: center;
`;

export const ImpactContent = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textMuted};
  margin: 0;

  strong {
    color: ${(props) => props.theme.colors.textMain};
    font-weight: 600;
  }
`;
