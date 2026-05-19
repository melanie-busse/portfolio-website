import styled from "styled-components";

interface HeaderSectionProps {
  headline: string;
  text: string;
}

export function HeaderSection({ headline, text }: HeaderSectionProps) {
  return (
    <Section>
      <Headline>{headline}</Headline>
      <Text>{text}</Text>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  margin-bottom: 5rem;
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: #00f2ff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 242, 255, 0.3);
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`;
