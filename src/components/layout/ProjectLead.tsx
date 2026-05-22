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

  border: ${({ theme }) => theme.borders.sectionThin || "#00f2fe"};
  border-radius: ${({ theme }) => theme.borders?.borderRadius || "12px"};
  box-shadow: 0 0 15px -3px rgba(0, 242, 254, 0.25);
  background: ${(props) => props.theme.colors.backgrounds.box};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1.25rem; /* Etwas kompakter auf dem Smartphone */
    margin: 2rem 0 2.5rem 0;
  }
`;
