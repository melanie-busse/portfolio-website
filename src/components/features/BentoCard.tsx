import styled from "styled-components";
import { useTranslations } from "next-intl";

import TechBadge from "@/components/common/TechBadge";

export default function BentoCard({ skill, $gridArea }: { skill: any; $gridArea?: any }) {
  const IconComponent = skill.icon;
  const t = useTranslations();

  // Wir nutzen die Prop falls übergeben, andernfalls den Fallback aus dem Objekt
  const finalGridArea = $gridArea || skill.gridArea;

  // Dynamische Keys für die Übersetzung zusammenbauen
  const titleKey = `${skill.translationKey}.title`;
  const companyKey = `${skill.translationKey}.company`;
  const descriptionKey = `${skill.translationKey}.description`;

  return (
    <StyledBentoCard key={skill.id} $gridArea={finalGridArea}>
      <CardHeader>
        <IconWrapper>
          <IconComponent />
        </IconWrapper>
        <HeaderTitleWrapper>
          <CardTitle>{t.raw(titleKey)}</CardTitle>
          {/* Rendert die Firma NUR, wenn der Key im JSON existiert (z.B. bei der Timeline) */}
          {t.has(companyKey) && <CardCompany>{t.raw(companyKey)}</CardCompany>}
        </HeaderTitleWrapper>
      </CardHeader>

      <CardText
        dangerouslySetInnerHTML={{
          __html: t.raw(descriptionKey),
        }}
      />

      <BadgeContainer>
        {Array.isArray(skill.badges)
          ? // WALKLING/SKILLS: flaches Array
            skill.badges.map((badge: string, index: number) => (
              <TechBadge key={`${badge}-${index}`} index={index} badge={badge} $type="default" />
            ))
          : // TIMELINE: Verschachteltes Objekt mit Kategorien
            Object.entries(skill.badges).flatMap(([category, badgeArray]) =>
              (badgeArray as string[]).map((badge: string, index: number) => (
                <TechBadge
                  key={`${badge}-${index}`}
                  index={index}
                  badge={badge}
                  $type={category as "frontend" | "backend" | "tools"}
                />
              ))
            )}
      </BadgeContainer>
    </StyledBentoCard>
  );
}

const CardHeader = styled.div`
  display: flex;
  align-items: center; /* Zentriert Icon und Textblock vertikal */
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stapelt Titel und Firma untereinander */
  gap: 0.2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  word-break: break-word;
`;

const CardCompany = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.h4}; /* Nutzt deine Akzentfarbe */
  word-break: break-word;
`;

const StyledBentoCard = styled.div<{ $gridArea?: string }>`
  grid-area: ${(props) => props.$gridArea};
  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-height: 100%;
  height: 100%;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  h2 {
    color: ${(props) => props.theme.colors.primaryPetrol};
    margin: 0.5rem 0;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.h4};
    box-shadow: ${(props) => props.theme.shadows.hover};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      ${(props) => props.theme.colors.backgrounds.bentoBox},
      transparent
    );
    pointer-events: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints?.mobile || "480px"}) {
    padding: 1.5rem;
    box-sizing: border-box;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.h4};
  filter: drop-shadow(0 0 8px ${(props) => props.theme.colors.backgrounds.iconWrapper});
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const CardText = styled.p`
  margin: 0;
  word-break: break-word;
  hyphens: auto;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 1.5rem;
  width: 100%;
`;
