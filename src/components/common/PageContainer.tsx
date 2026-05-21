import styled from "styled-components";
import React from "react";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: ${(props) => props.theme.widths.container};
  margin: 0 auto;
  padding: 6rem 2rem;
  color: ${(props) => props.theme.colors.textMain};
`;
