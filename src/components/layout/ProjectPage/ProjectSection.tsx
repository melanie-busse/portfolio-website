import React from "react";
import styled from "styled-components";

export default function ProjectSection({ children }: { children: React.ReactNode }) {
  return <StyledProjectSection>{children}</StyledProjectSection>;
}

export const StyledProjectSection = styled.section`
  width: 100%;
  margin-bottom: 4rem;
`;
