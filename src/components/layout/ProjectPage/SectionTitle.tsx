import styled from "styled-components";

export default function SectionTitle({ title, headline }: { title: string; headline: string }) {
  return (
    <SectionTitleRow>
      <SectionBadge>{title}</SectionBadge>
      <h2>{headline}</h2>
    </SectionTitleRow>
  );
}

export const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h3 {
    font-weight: 600;
  }
`;

export const SectionBadge = styled.span`
  font-family: ${(props) => props.theme.fonts?.tech || "monospace"};
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  background: ${(props) => props.theme.colors.backgrounds.box};
  border: ${(props) => props.theme.borders.sectionThin || "#00f2fe"};
  color: ${(props) => props.theme.colors.accentAqua || "#00f2fe"};
  border-radius: 4px;
  letter-spacing: 0.05em;
`;
