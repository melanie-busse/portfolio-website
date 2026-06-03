import styled from "styled-components";
import { useTranslations } from "next-intl";
import ProjectLinks from "@/components/layout/ProjectPage/ProjectLinks";

interface ProjectLeadProps {
  projectId: string;
}

export default function ProjectLead({ projectId }: ProjectLeadProps) {
  const t = useTranslations();

  return (
    <StyledProjectLeadBox>
      <LeadText>{t(`projects.items.${projectId}.leadText`)}</LeadText>
      <ProjectLinks projectId={projectId} />
    </StyledProjectLeadBox>
  );
}

export const StyledProjectLeadBox = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 2.5rem 0 3.5rem 0;
  padding: 2rem;

  border: ${({ theme }) => theme.borders.sectionThin};
  border-radius: ${({ theme }) => theme.borders?.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.button};
  background: ${(props) => props.theme.colors.backgrounds.box};

  & > div {
    padding-left: 0.15rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem;
    margin-bottom: 2.5rem;

    & > div {
      padding-left: 0;
    }
  }
`;

const LeadText = styled.p`
  margin: 0;
`;
