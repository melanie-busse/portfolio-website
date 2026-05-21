import styled from "styled-components";
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <StyledCard>{children}</StyledCard>;
}

const StyledCard = styled.div`
  background: ${(props) => props.theme.colors.backgrounds.card};
  border: ${(props) => props.theme.borders.border};
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.borders.borderRadius};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: ${(props) => props.theme.colors.backgrounds.hovers.card};
  }
`;
