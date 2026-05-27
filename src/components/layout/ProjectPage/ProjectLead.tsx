import styled from "styled-components";
import { useTranslations } from "next-intl";

interface ProjectLeadProps {
  projectId: string;
}

export default function ProjectLead({ projectId }: ProjectLeadProps) {
  const t = useTranslations();

  return <StyledProjectLead>{t(`projects.items.${projectId}.leadText`)}</StyledProjectLead>;
}

export const StyledProjectLead = styled.p`
  width: 100%;
  max-width: 100%;
  margin: 2.5rem 0 3.5rem 0;
  padding: 2rem;

  border: ${({ theme }) => theme.borders.sectionThin};
  border-radius: ${({ theme }) => theme.borders?.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.button};
  background: ${(props) => props.theme.colors.backgrounds.box};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1.5rem 1rem;
    margin-bottom: 2.5rem;
  }
`;
