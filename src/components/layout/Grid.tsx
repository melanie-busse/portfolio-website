import styled from "styled-components";
import React from "react";

export function Grid({children}: { children: React.ReactNode}) {
    return <StyledGrid>
        {children}
    </StyledGrid>
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;