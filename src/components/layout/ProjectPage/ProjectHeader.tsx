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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!project) return null;

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
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1.5rem 1rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    margin-bottom: 1.2rem; /* Weniger Leerlauf über dem Titel */
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 2;
  width: 100%;
`;

const MainTitle = styled.h1`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: ${(props) => props.theme.colors.textMain};
  line-height: 1.1;
  margin: 0.5rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    font-size: 1.6rem; /* Verhindert hässliche Zeilenumbrüche bei langen Projekttiteln */
  }
`;

const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    gap: 0.8rem;
    flex-direction: column; /* Untereinander auf sehr schmalen Displays */
  }
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
