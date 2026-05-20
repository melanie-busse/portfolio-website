import styled from "styled-components";

export function Period({ text }: { text: string }) {
  return <StyledPeriod>{text}</StyledPeriod>;
}

const StyledPeriod = styled.span`
  background: ${(props) => props.theme.colors.backgrounds.hovers.h1});
  color: ${(props) => props.theme.colors.h4};
  padding: 0.3rem 0.8rem;
  border-radius: ${(props) => props.theme.borders.borderRadius};
  font-size: 0.85rem;
  font-weight: 600;
`;
