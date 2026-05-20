import styled from "styled-components";
import { useTranslations } from "next-intl";

import { skillsData } from "@/data/skillsData";

export default function SkillsGrid() {
  const t = useTranslations();

  return (
    <GridSection>
      <BentoContainer>
        {skillsData.map((skill) => {
          const IconComponent = skill.icon;

          return (
            <BentoCard key={skill.id} $gridArea={skill.gridArea}>
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
                {skill.badges.map((badge, index) => (
                  <TechBadge key={index}>{badge}</TechBadge>
                ))}
              </BadgeContainer>
            </BentoCard>
          );
        })}
      </BentoContainer>
    </GridSection>
  );
}

const GridSection = styled.section`
  padding: 4rem 2rem;
  max-width: ${(props) => props.theme.widths.footer};
  margin: 0 auto;
`;

const BentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, auto);
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

const BentoCard = styled.div<{ $gridArea?: string }>`
  grid-area: ${(props) => props.$gridArea};
  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius};
  padding: 2rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

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

const CardTitle = styled.h3`
  margin: 0;
`;

const CardText = styled.p`
  margin-bottom: 10px;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 2rem;
`;

const TechBadge = styled.span`
  background: ${(props) => props.theme.colors.backgrounds.box};
  border: ${(props) => props.theme.borders.techBadge};
  color: ${(props) => props.theme.colors.h4};
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-family: ${(props) => props.theme.fonts.tech};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.backgrounds.button};
    border-color: ${(props) => props.theme.colors.h4};
    box-shadow: ${(props) => props.theme.shadows.tech};
    transform: translateY(-2px);
  }
`;
