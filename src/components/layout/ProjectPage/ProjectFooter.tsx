import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ProjectFooterProps {
  prevProjectId: string;
  nextProjectId: string;
}
export default function ProjectFooter({ prevProjectId, nextProjectId }: ProjectFooterProps) {
  const t = useTranslations();

  return (
    <ProjectNavFooter>
      <Link href={`/projects/${prevProjectId}`} passHref legacyBehavior>
        <NavLinkCard $align="left">
          <div className="nav-label">
            <FaArrowLeft size={12} />
            <span>{t("projects.navigation.previous")}</span>
          </div>
          <h3>{t(`projects.items.${prevProjectId}.title`)}</h3>
        </NavLinkCard>
      </Link>

      <Link href={`/projects/${nextProjectId}`} passHref legacyBehavior>
        <NavLinkCard $align="right">
          <div className="nav-label">
            <span>{t("projects.navigation.next")}</span>
            <FaArrowRight size={12} />
          </div>
          <h3>{t(`projects.items.${nextProjectId}.title`)}</h3>
        </NavLinkCard>
      </Link>
    </ProjectNavFooter>
  );
}

export const ProjectNavFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: ${(props) => props.theme.borders.editorHeader};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile};) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const NavLinkCard = styled.a<{ $align: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$align === "left" ? "flex-start" : "flex-end")};
  justify-content: center;
  padding: 1.5rem;
  cursor: pointer;
  text-decoration: none;

  background: ${(props) => props.theme.colors.backgrounds.box || "rgba(30, 41, 59, 0.2)"};
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius || "12px"};
  transition: all 0.25s ease-in-out;

  .nav-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${(props) => props.theme.fonts.tech};
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.accentAqua};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
    transition: transform 0.25s ease-in-out;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textMain};
    margin: 0;
  }

  &:hover {
    background: ${(props) => props.theme.colors.backgrounds.card};
    border-color: ${(props) => props.theme.colors.backgrounds.hovers.impact};

    .nav-label {
      transform: ${(props) => (props.$align === "left" ? "translateX(-4px)" : "translateX(4px)")};
    }
  }
`;
