import styled from "styled-components";
import React from "react";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: ${(props) => props.theme.widths.container};
  margin: 0 auto;
  padding: 6rem 2rem; /* Bleibt für Desktop perfekt */
  color: ${(props) => props.theme.colors.textMain};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile || "480px"}) {
    /* 15px oder 20px links und rechts – das wird jetzt dein neuer, 
       globaler Standard für JEDE Seite! */
    padding: 4.5rem 20px 2.5rem 20px;
  }
`;
