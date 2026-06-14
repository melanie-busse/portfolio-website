import styled from "styled-components";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { useTranslations } from "next-intl";

interface ProjectLinksProps {
  projectId: string;
}

export default function ProjectLinks({ projectId }: ProjectLinksProps) {
  const t = useTranslations("projects");

  const githubLink = t(`items.${projectId}.links.github`);
  const liveLink = t(`items.${projectId}.links.live`);

  const githubFallback = `projects.items.${projectId}.links.github`;
  const liveFallback = `projects.items.${projectId}.links.live`;

  const isGithubValide =
    githubLink && githubLink !== githubFallback && githubLink !== "null" && githubLink !== "";
  const isLiveValide =
    liveLink && liveLink !== liveFallback && liveLink !== "null" && liveLink !== "";

  if (!isGithubValide && !isLiveValide) return null;

  // Prüfen, ob es sich um einen internen Link handelt (beginnt mit '/')
  const isInternalLink = liveLink && liveLink.startsWith("/");

  return (
    <LinksContainer>
      {isGithubValide && (
        <LinkButton href={githubLink} target="_blank" rel="noopener noreferrer">
          <LuGithub />
          <span>Code auf GitHub</span>
        </LinkButton>
      )}

      {isLiveValide && (
        <LinkButton
          href={liveLink}
          target={isInternalLink ? "_self" : "_blank"}
          rel={isInternalLink ? undefined : "noopener noreferrer"}
          className="live-btn"
        >
          <LuExternalLink />
          <span>Live Projekt ansehen</span>
        </LinkButton>
      )}
    </LinksContainer>
  );
}

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.85rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.3px;

  border-radius: ${(props) => props.theme.borders?.borderRadius};
  border: ${(props) => props.theme.borders?.border};

  background: ${(props) => props.theme.colors.backgrounds.projectButton};
  color: ${(props) => props.theme.colors.textMain};

  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  svg {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.h4};
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${(props) => props.theme.colors.backgrounds.hovers.button};
    border-color: ${(props) => props.theme.colors.h4};
    transform: translateY(-2px);

    svg {
      transform: scale(1.1);
    }
  }

  &.live-btn {
    &:hover {
      box-shadow: 0 0 15px ${(props) => props.theme.colors.h4};
    }
  }
`;
