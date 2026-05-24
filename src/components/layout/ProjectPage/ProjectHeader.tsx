import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaArrowLeft, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";

import { Period } from "@/components/common/Period";

interface ProjectHeaderProps {
  project: {
    id: string;
    period: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    url?: string;
  };
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const t = useTranslations();

  // Sichert ab, dass Server und Client beim ersten Render exakt dasselbe tun
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!project) return null;

  // Bis der Client bereit ist, rendern wir ein leures Element mit passenden Maßen
  // Dadurch fliegt der HTML-Mismatch-Fehler sofort raus!
  if (!isMounted) {
    return <HeaderPlaceholder />;
  }

  const IconComponent = project.icon;

  return (
    <HeaderWrapper>
      <BackLink href="/projects">
        <FaArrowLeft size={14} />
        {t("projects.backToOverview")}
      </BackLink>

      <HeaderContent>
        <TitleGroup>
          <Period text={project.period} />
          <MainTitle>{t(`projects.items.${project.id}.title`)}</MainTitle>
          <MetaContainer>
            <MetaItem>
              <FaBuilding size={16} />
              <span>{t(`projects.items.${project.id}.company`)}</span>
            </MetaItem>

            {project.url && (
              <MetaItem
                as="a"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                <FaExternalLinkAlt size={14} />
                <span>{t("projects.viewLiveProject")}</span>
              </MetaItem>
            )}
          </MetaContainer>
        </TitleGroup>

        {IconComponent && (
          <IconBackground>
            <IconComponent />
          </IconBackground>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
}

// Platzhalter-Komponente für das serverseitige Vorausschießen
const HeaderPlaceholder = styled.div`
  width: 100%;
  height: 260px;
  background: transparent;
  margin-bottom: 2rem;
`;

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.backgrounds.card};
  border: ${(props) => props.theme.borders.border};
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: ${(props) => props.theme.shadows.headerBox};
  backdrop-filter: blur(4px);
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accentAqua};
  font-family: ${({ theme }) => theme.fonts.tech};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 2;
`;

const MainTitle = styled.h1`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: ${(props) => props.theme.colors.textMain};
  line-height: 1.1;
  margin: 0.5rem 0;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 0.95rem;
  text-decoration: none;

  svg {
    color: ${({ theme }) => theme.colors.accentAqua};
  }

  &.live-link {
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.accentAqua};
    }
  }
`;

const IconBackground = styled.div`
  position: absolute;
  right: 2rem;
  bottom: -1rem;
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.accentAqua};
  opacity: 0.04;
  pointer-events: none;
  z-index: 1;
  transform: rotate(-10deg);

  @media (max-width: ${(props) => props.theme.breakpoints.mobile};) {
    display: none;
  }
`;
