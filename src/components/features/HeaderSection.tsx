import styled from "styled-components";

interface HeaderSectionProps {
  headline: string;
  text: string;
}

export function HeaderSection({ headline, text }: HeaderSectionProps) {
  return (
    <Section>
      <h1>{headline}</h1>
      <Text>{text}</Text>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  margin-bottom: 5rem;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
`;
