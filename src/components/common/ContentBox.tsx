import styled from "styled-components";
import React from "react";

export function ContentBox({ children }: { children: React.ReactNode }) {
  return <StyledContentBox>{children}</StyledContentBox>;
}

const StyledContentBox = styled.div`
  background: ${(props) => props.theme.colors.backgrounds.box};
  backdrop-filter: blur(10px);
  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borders.borderRadius};
  padding: 3rem;
`;
