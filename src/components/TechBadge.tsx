// TechBadge.tsx
import styled from "styled-components";

// Wir erlauben dem Typen entweder deine Timeline-Kategorien oder ein Fallback für Skills
export type BadgeType = "frontend" | "backend" | "tools" | "default";

interface TechBadgeProps {
  index: number;
  badge: string;
  $type?: BadgeType; // Optionaler Prop für die Timeline-Farben
}

export default function TechBadge({ index, badge, $type = "default" }: TechBadgeProps) {
  return (
    <StyledTechBadge key={index} $type={$type}>
      {badge}
    </StyledTechBadge>
  );
}

const StyledTechBadge = styled.span<{ $type: BadgeType }>`
  font-family: ${(props) => props.theme.fonts.tech};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.25s ease-in-out;

  /* DYNAMISCHE FARBEN: Wenn default, nimm dein altes Aqua-Setup. Sonst die Kategorie. */
  color: ${({ theme, $type }) =>
    $type === "default" ? theme.colors.accentAqua : theme.categories[$type].text};

  background: ${({ theme, $type }) =>
    $type === "default" ? theme.colors.backgrounds.techBadge : theme.categories[$type].background};

  border: ${({ theme, $type }) =>
    $type === "default" ? theme.borders.techBadge : `1px solid ${theme.categories[$type].border}`};

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme, $type }) =>
      $type === "default" ? theme.colors.accentAqua : theme.categories[$type].text};

    background: ${({ theme, $type }) =>
      $type === "default"
        ? theme.colors.backgrounds.hovers.tech
        : `rgba(${theme.categories[$type].text}, 0.15)`};

    box-shadow: ${({ theme, $type }) =>
      $type === "default" ? theme.shadows.tech : `0 0 8px ${theme.categories[$type].text}33`};
  }
`;
