import styled from "styled-components";
import { useTranslations } from "next-intl";

import TechBadge from "@/components/TechBadge";

export default function BentoCard({ skill, $gridArea }: { skill: any; $gridArea?: any }) {
  const IconComponent = skill.icon;
  const t = useTranslations();

  return (
    <StyledBentoCard key={skill.id} $gridArea={skill.gridArea}>
      <CardHeader>
        <IconWrapper>
          <IconComponent />
        </IconWrapper>
        <CardTitle>{t.raw(`${skill.translationKey}.title`)}</CardTitle>
      </CardHeader>

      <CardText
        dangerouslySetInnerHTML={{
          __html: t.raw(`${skill.translationKey}.description`),
        }}
      />

      <BadgeContainer>
        {Array.isArray(skill.badges)
          ? // WALKLING/SKILLS: flaches Array
            skill.badges.map((badge: string, index: number) => (
              <TechBadge index={index} badge={badge} $type="default" />
            ))
          : // TIMELINE: Verschachteltes Objekt mit Kategorien
            Object.entries(skill.badges).flatMap(([category, badgeArray]) =>
              (badgeArray as string[]).map((badge: string, index: number) => (
                <TechBadge
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

const StyledBentoCard = styled.div<{ $gridArea?: string }>`
  grid-area: ${(props) => props.$gridArea};
  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius};
  padding: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

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
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.h4};
  filter: drop-shadow(0 0 8px ${(props) => props.theme.colors.backgrounds.iconWrapper});
  display: flex;
  align-items: center;
`;

const CardTitle = styled.h3``;

const CardText = styled.p``;

const Institute = styled.h2``;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 1.5rem;
`;
